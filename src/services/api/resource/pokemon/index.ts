import Api from '../../index';
import NetworkException from '../../../../utils/exceptions/NetworkException';

import PokemonDetailsReceiveContract from './contracts/receive/pokemonDetailsReceiveContract';
import PokemonCoverPage from './contracts/receive/pokemonCoverPage';
import Pokemon from '../../../../@types/pokemon';

export const getPokemonsCoverFirstPage = async (): Promise<PokemonCoverPage> => {
  try {
    const response = await Api.get(
      'https://pokeapi.co/api/v2/pokemon/?limit=151',
    );
    if (response?.status !== 200) throw new NetworkException();
    return response.data;
  } catch (err) {
    throw new NetworkException(err);
  }
};

export const getPokemonDetails = async (
  detailsUrl: string,
): Promise<Pokemon> => {
  try {
    const response = await Api.get(detailsUrl);
    if (response?.status !== 200) throw new NetworkException();
    const body: PokemonDetailsReceiveContract = response.data;

    if (!body) throw new NetworkException('Error, pokemon details not found');

    return {
      id: body.id,
      name: body.name,
      height: body.height,
      weight: body.weight,
      types: body.types.map(typeData => typeData.type.name),
      moves: body.moves.map(moveData => moveData.move.name),
      spriteDefault: body.sprites.front_default,
    };
  } catch (err) {
    throw new NetworkException(err);
  }
};
