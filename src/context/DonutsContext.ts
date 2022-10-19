import { createContext } from "react";
import Donut from "../models/Donut";

interface FavoritesContextModel {
  favorites: Donut[];
  addToCart: (gif: Donut) => void;
  remove: (id: string) => void;
  isFav: (id: string) => boolean;
}

const defaultValues: FavoritesContextModel = {
  favorites: [],
  addToCart: () => {},
  remove: () => {},
  isFav: () => false,
};

const FavoritesContext = createContext(defaultValues);

export default FavoritesContext;
