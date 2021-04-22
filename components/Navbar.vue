<template>
  <div class="navbar">
    <nav>
      <h2>Cocktail Time</h2>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="postcss" scoped>
.navbar {
  @apply container
  mb-20;
}
nav {
  @apply w-screen
  h-16
  bg-white
  fixed
  inset-0
  flex
  justify-center
  items-center
  z-10
}
h2 {
  @apply text-2xl
  p-4;
}
</style>