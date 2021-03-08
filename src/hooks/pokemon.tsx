import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';

// import UserRepository from '../services/sqlite/repository/userRepository';
// import { UserEntity } from '../services/sqlite/entity/user.entity';

import Pokemon from '../@types/pokemon';
import PokemonCoverPage from '../services/api/resource/pokemon/contracts/receive/pokemonCoverPage';

import * as PokemonApi from '../services/api/resource/pokemon';

interface AuthContextData {
  loading: boolean;
  selectedPokemon: Pokemon;
  downloadPokemons(): Promise<void>;
  selectPokemon(pokemon: Pokemon): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const PokemonProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(null);

  const selectPokemon = useCallback(async (pokemon: Pokemon): Promise<void> => {
    setSelectedPokemon(pokemon);
  }, []);

  const downloadPokemons = useCallback(async (): Promise<void> => {
    setLoading(true);
    try {
      const pokemonsFirstPage: PokemonCoverPage = await PokemonApi.getPokemonsCoverFirstPage();

      if (pokemonsFirstPage.results.length > 0) {
        const detailedPokemonTest: Pokemon = await PokemonApi.getPokemonDetails(
          pokemonsFirstPage.results[0].url,
        );
        console.log('Pokemon detail', detailedPokemonTest);
      }
    } catch (err) {
      console.error('[ERROR] downloadPokemons:', err);
    }
    setLoading(false);
  }, []);

  const contextValues = useMemo(
    () => ({
      loading,
      selectedPokemon,
      downloadPokemons,
      selectPokemon,
    }),
    [loading, selectedPokemon, downloadPokemons, selectPokemon],
  );

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

function usePokemon(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('usePokemon must be used within an PokemonProvider');
  }
  return context;
}

export { PokemonProvider, usePokemon };
