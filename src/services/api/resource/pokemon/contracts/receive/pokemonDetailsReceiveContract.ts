/* eslint-disable camelcase */

interface MoveReceiveContract {
  move: {
    name: string;
    url: string;
  };
}

interface TypeReceiveContract {
  type: {
    name: string;
    url: string;
  };
}

interface SpriteContract {
  front_default: string;
}

export default interface PokemonDetailsReceiveContract {
  id: string;
  name: string;
  height: number;
  weight: number;
  types: TypeReceiveContract[];
  moves: MoveReceiveContract[];
  sprites: SpriteContract;
}
