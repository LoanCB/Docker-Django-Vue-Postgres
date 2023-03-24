<template>
  <main>
    <h1>Home</h1>
    <button @click="$api.logout">Logout</button>
    <router-link :to="{name: 'protected'}">Protected view</router-link>
  </main>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  button {
    margin-right: 1rem;
  }
</style>