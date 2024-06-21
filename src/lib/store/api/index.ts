import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const TAGS_KEY = {
  POKEMONS: "POKEMONS",
};

const TagsArray = Object.values(TAGS_KEY);

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

export const api = createApi({
  baseQuery,
  endpoints: () => ({}),
  tagTypes: TagsArray,
});
