<template>
  <div class="cocktails" ref="cocktails">
    <div v-if="cocktails.loaded === false">
      <transition-group class="cocktails-container" name="skeleton">
        <div
          class="cocktail"
          v-for="(skeleton, index) in skeletonCards"
          :key="index"
        >
          <div class="skeleton-img"></div>
          <div class="skeleton-line"></div>
        </div>
      </transition-group>
    </div>

    <div v-else-if="cocktails.data === null || cocktails.data === undefined">
      <p>Nessun cocktail trovato...</p>
    </div>

    <div v-else>
      <transition-group
        @enter="fadeInCocktails"
        @leave="fadeOutCocktails"
        class="cocktails-container"
        name="list"
      >
        <div
          v-for="(cocktail, index) in cocktails.data"
          :key="`${cocktail.idDrink}-${index}`"
          class="cocktail"
          :data-index="index"
          :class="{ in_details: inDetails, load_less: loadLess }"
        >
          <NuxtLink :to="`/cocktails/${cocktail.idDrink}`">
            <div class="dark-background">
              <h2>{{ cocktail.strDrink }}</h2>
            </div>
            <img :src="cocktail.strDrinkThumb" alt="" />
            <h3>{{ cocktail.strDrink }}</h3>
          </NuxtLink>
        </div>
      </transition-group>

      <button
        @click="loadMoreDrinks"
        class="load-more"
        :class="{ button_in_details: inDetails, hide_button: hideButton }"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { gsap } from "gsap";

export default {
  name: "Cocktails",

  data() {
    return {
      loadLess: true,
      hideButton: false,
      skeletonCards: 3,
    };
  },

  props: {
    inDetails: Boolean,
  },

  methods: {
    loadMoreDrinks() {
      this.loadLess = false;
      this.hideButton = true;
    },

    fadeInCocktails: function (el, done) {
      let delay = el.dataset.index * 100;
      setTimeout(() => {
        gsap.from(el, {
          duration: 1,
          opacity: 0,
          yPercent: 300,
          onComplete: done,
        });
      }, delay);
    },

    fadeOutCocktails: function (el, done) {
      gsap.to(el, {
        duration: 0.5,
        opacity: 0,
        onComplete: done,
      });
    },
  },

  computed: {
    ...mapState(["cocktails"]),
  },

  mounted() {
    this.$store.dispatch("fetchCocktails");
  },
};
</script>

<style lang="postcss" scoped>
.cocktail-enter-active,
.cocktail-leave-active {
  transition: opacity 0.5s;
}
.cocktail-enter,
.cocktail-leave-to {
  opacity: 0;
}

.list-move {
  transition: transform 0.5s;
}

.cocktails-container {
  @apply flex
  flex-col 
  justify-center
  items-center
  md:grid
  md:grid-cols-3;
}

.cocktail {
  @apply flex
  w-full
  my-6
  rounded-2xl
  shadow
  relative
  overflow-hidden
  md:mx-auto
  md:w-11/12
  md:flex-col
  md:shadow-none
  md:rounded-none;
}
a {
  @apply grid
grid-cols-2
w-full
md:flex
md:flex-col;
}
img {
  @apply w-full;
}
h3 {
  @apply text-lg
  flex
  justify-center
  items-center
  md:my-4
  md:text-2xl;
}
/*md:flex*/
.dark-background {
  @apply hidden
  md:flex
  justify-center
  items-center
  absolute
  inset-0
  w-full
  h-5/6
  z-10
  bg-black
  bg-opacity-70
  text-white
  opacity-0
  transition-opacity
  duration-500
  hover:opacity-100;
}
h2 {
  @apply md:text-2xl;
}
.skeleton-img {
  @apply bg-gray-300
  w-48
  h-48
  md:w-96
  md:h-80;
}
.skeleton-line {
  @apply bg-gray-300
  mt-4
  w-48
  h-8;
}
/* .skeleton-enter-active,
.skeleton-leave-active {
  transition: opacity 0.5s;
}
.skeleton-enter,
.skeleton-leave-to {
  opacity: 0;
} */

.in_details:nth-child(n + 4),
.load_less:nth-child(n + 10) {
  display: none;
}

.skeleton-enter-active {
  @apply transition-opacity
  duration-300;
}
.skeleton-leave-active {
  @apply transition-opacity
  duration-100;
}
.skeleton-enter{
  @apply
  opacity-0
}
.skeleton-leave-to{
  @apply
  opacity-0
}
.load-more {
  @apply bg-gray-800
  py-3
  px-8
  mt-4
  text-white
  outline-none
  max-h-12
  md:text-lg
  md:px-12
  md:py-4
  md:flex
  md:items-center
  md:justify-self-center
  md:mx-auto
  hover:bg-gray-900
  transition-colors
}
.button_in_details{
  @apply
  hidden
}
.hide_button{
  @apply
  hidden
}
</style>
