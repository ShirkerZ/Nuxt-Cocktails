<template>
    <div class="error">
        <h1> Error: {{error.statusCode}} </h1>
        <h3>{{error.message}} </h3>
        <nuxt-link to="/">Return to Home</nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['error'],
    layout: "default",
}
</script>