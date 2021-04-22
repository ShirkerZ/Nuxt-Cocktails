<template>
  <div class="form">
    <form @submit.prevent="updateQuery">
      <i class="fas fa-search"></i>
      <input v-model="search" placeholder="Search Cocktail" />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      search: "",
    };
  },

  watch: {
    $route: function () {
      this.$store.dispatch("fetchCocktails");
    },
  },

  methods: {
    updateQuery() {
      this.$router.push({
        path: this.$route.path,
        query: { s: this.search },
      });
    },
  },

  mounted() {
    if (this.$route.query.s === undefined) {
      this.$router.push({ path: this.$route.path, query: { s: "" } });
    }
  },
};
</script>

<style lang="postcss" scoped>
    form{
      @apply
      flex
      justify-center
      items-center
      my-4
      md:justify-between
      md:w-full
      focus-within:text-blue-500
    }
    input{
      @apply
      text-base
      border-0
      border-b-2
      outline-none
      bg-transparent
      border-gray-800
      max-h-12
      mx-2
      my-0
      w-full
      text-gray-800
      placeholder-gray-300
      sm:w-9/12
      md:text-2xl
    }
    button{
      @apply
      text-white
      bg-gray-800
      outline-none
      max-h-12
      text-sm
      py-1.5
      px-6
      md:text-lg
      md:px-12
      md:py-4
      md:flex
      md:items-center
      hover:bg-gray-900
      transition-colors
    }
    i{
      @apply
      md:text-xl   
    }

</style>
