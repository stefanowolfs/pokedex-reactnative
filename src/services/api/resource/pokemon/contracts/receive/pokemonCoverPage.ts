import PokemonCoverResult from './pokemonCoverResult';

export default interface PokemonCoverPage {
  count: number;
  next: string;
  previous: string;
  results: PokemonCoverResult[];
}
