<template>
  <main>
    <h1>Home</h1>
    <button @click="$api.logout(false)">Logout</button>
    <router-link :to="{name: 'protected'}">Protected view</router-link>
  </main>
</template>

<script>
import {api as $api} from "@/services/api";

export default {
  name: "Home",
  computed: {
    $api() {
      return $api
    }
  }
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