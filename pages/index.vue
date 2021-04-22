<template>
  <div class="container">
    <div>
      <Form />
      <Info />
      <Cocktails />
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="postcss" scoped>
/* .container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
.container{
  @apply
  flex
  justify-center
  items-center
  text-center
  mx-auto
  w-screen
}
</style>
