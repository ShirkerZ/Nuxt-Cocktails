<template>
  <div class="info">
    <ul v-if="cocktails.data">
      <li>Total Drink: {{ cocktails.data.length }}</li>
      |
      <li>Total Ingredients: {{ totalNumberIngredients }}</li>
      |
      <li>Drink Images: {{ totalDrinkImages }}</li>
    </ul>

    <ul v-else>
      <li>Total Drink: 0</li>
      |
      <li>Total Ingredients: 0</li>
      |
      <li>Drink Images: 0</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Info",

  computed: {
    ...mapState(["cocktails", "drinkImagesCounter"]),
    ...mapGetters(["totalNumberIngredients", "totalDrinkImages"]),
  },
};
</script>

<style lang="postcss" scoped>
.info {
  @apply flex
  justify-center
  my-4
  md:my-12;
}
ul {
  @apply flex
  justify-center
  items-center
  md:text-2xl;
}
ul li {
  @apply text-xs
  mx-1.5
  md:text-2xl
  md:mx-8;
}
</style>