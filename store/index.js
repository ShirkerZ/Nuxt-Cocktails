
export const state = () => ({
  searchText: "",

  cocktails: {
    data: [],
    loaded: false,
    error: "",
  },

  details: {
    data: [],
    loaded: false,
    error: "",
  },
});

export const getters = {

  getSearchText: state => {
    return state.searchText
  },

  totalNumberIngredients: state => {
    let totalNumberIngredients = 0
    state.cocktails.data.forEach((cocktail) => {
      for (let i = 1; i < 16; i++) {
        if (cocktail[`strIngredient${i}`] && cocktail[`strIngredient${i}`]) {
          totalNumberIngredients++
        } else {
          break;
        }
      }
    });
    return totalNumberIngredients;
  },

  totalDrinkImages: state => {
    let totalDrinkImages = 0
    state.cocktails.data.filter(cocktail => cocktail.strDrinkThumb != null && totalDrinkImages++)
    return totalDrinkImages;
  },

  getIngredients: state => {
    let ingredientsArray = [];
    for (let i = 1; i < 16; i++) {
      if (
        state.details.data[`strIngredient${[i]}`] != null &&
        state.details.data[`strIngredient${[i]}`] != undefined
      ) {
        ingredientsArray.push(state.details.data[`strIngredient${[i]}`]);
      } else {
        break;
      }
    }
    return ingredientsArray;
  },

  getMeasure: state => {
    let measureArray = [];
    for (let i = 1; i < 16; i++) {
      if (state.details.data[`strMeasure${i}`]) {
        measureArray.push(state.details.data[`strMeasure${i}`])
      } else {
        break;
      }
    }
    return measureArray
  }
}

export const mutations = {

  updateSearchText: (state, payload) => {
    state.searchText = payload
  },

  updateCocktails: (state, payload) => {
    state.cocktails.data = payload
  },

  updateDetails: (state, payload) => {
    state.details.data = payload
  },

  updateLoaded: (state) => {
    state.cocktails.loaded = true
  },

  resetLoaded: (state) => {
    state.cocktails.loaded = false
  },
}

export const actions = {

  fetchCocktails: (context) => {
    context.commit('resetLoaded')
    setTimeout(() => {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${context.state.searchText}`
      )
        .then((res) => res.json())
        .then(data => context.commit('updateCocktails', data.drinks))
        .then(context.commit('updateLoaded'))
        .catch((err) => console.log(err.message))
    }, 500)
  },

  fetchDetails: (context, payload) => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${payload}`
    )
      .then(res => res.json())
      .then(data => context.commit('updateDetails', data.drinks[0]))
      .catch(err => console.log(err.message))
  },
}

