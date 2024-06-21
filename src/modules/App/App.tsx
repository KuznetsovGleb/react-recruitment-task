import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { PokemonsList } from "../pokemons/components/PokemonsList";
import { PokemonCard } from "../pokemons/components/PokemonCard";
import "./index.css";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonsList />} />
      <Route path="/:id" element={<PokemonCard />} />
    </Routes>
  );
};
