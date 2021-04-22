<template>
  <div class="details">
    <div class="details-container">
      <img class="main-image" :src="details.data.strDrinkThumb" alt="" />
      <div class="info">
        <div class="links">
          <NuxtLink to="/">
            <p class="link-to-home">Home</p>
          </NuxtLink>
          <p>/</p>
          <p>{{ details.data.strDrink }}</p>
        </div>

        <h1>{{ details.data.strDrink }}</h1>

        <div class="instructions">
          <h2>Instructions:</h2>
          <ul v-if="details.data.strInstructions !== undefined">
            <li
              v-for="(instruction, index) in details.data.strInstructions.split(
                '.'
              )"
              :key="index"
            >
              <span> {{ instruction }} </span>
            </li>
          </ul>
        </div>

        <div class="glass">
          <h2>Glass:</h2>
          <p>{{ details.data.strGlass }}</p>
        </div>
      </div>

      <div class="ingredients">
        <h2>Ingredients: ( {{ getIngredients.length }} )</h2>
        <div class="ingredients-container">
          <div
            class="ingredient"
            v-for="(ingredient, index) in getIngredients"
            :key="index"
          >
            <img
              :src="`http://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`"
              alt=""
            />
            <h3>{{ getMeasure[index] }} {{ ingredient }}</h3>
          </div>
        </div>
      </div>

      <div class="other">
        <Cocktails :inDetails="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Details",

  // async asyncData({ $http }) {
  //   const details = await $http.$get(
  //     `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.$route.query.id}`
  //   );
  //   return { details };
  // },

  computed: {
    ...mapState(["details", "searchText"]),
    ...mapGetters(["getIngredients", "getMeasure"]),
  },

  mounted() {
    this.$store.dispatch("fetchDetails", this.$route.params.id);
  },
};
</script>

<style lang="postcss" scoped>
.details-container {
  @apply grid
  grid-cols-2
}
.main-image {
  @apply h-4/5;
}
.info {
  @apply flex
  flex-col
  justify-around
  text-left
  p-16
  h-4/5;
}
.links {
  @apply flex
  items-center;
}
p {
  @apply mr-4;
}
h1 {
  @apply text-5xl
  font-bold;
}
.instructions {
  @apply my-8;
}
h2{
  @apply
  text-2xl
}
.instructions ul {
  @apply 
  list-none
  flex
  flex-col
  text-left
  p-0;
}
.instructions ul li {
  @apply my-4;
}
.glass h2 {
  @apply
  my-8
}
.ingredients-container{
  @apply
  w-full
  my-8
  grid
  grid-cols-2
  justify-center
}
.ingredient{
  @apply
  w-48
  my-4
  justify-self-center
}
.ingredient h3{
  @apply
  my-4
  text-center
}
.ingredient img{
  @apply
  w-48
}
.other{
  @apply
  col-start-1
  col-end-3

}
</style>