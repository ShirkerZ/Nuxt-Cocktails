<template>
  <div class="main-container">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="postcss" scoped>
/* html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.main-container{
  padding: 0 14.5vw;
} */

.main-container{
  @apply
  px-4
  sm:px-12
}
*{
  @apply
  p-0
  m-0
  box-border
}
</style>
