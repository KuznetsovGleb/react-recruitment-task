import { api } from "./index";
import { Pokemon } from "../../types";

export const pokemonApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPokemonByName: build.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
