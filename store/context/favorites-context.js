const { createContext, useState } = require('react');

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealsIds((currnetFavIds) => [...currnetFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealsIds((currnetFavIds) => currnetFavIds.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favoriteMealsIds,
    addFavorite,
    removeFavorite,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;
