<template>
  <main>
    <h1>Protected view</h1>
    <p v-if="error" class="error">{{error}}</p>
    <p v-if="loading">Loading...</p>
    <p v-else>{{protectedData.message}}</p>
  </main>
</template>

<script>
export default {
  name: "Protected",
  data() {
    return {
      protectedData: null,
      error: null,
      loading: true
    }
  },
  mounted() {
    this.$api.protected()
        .then(response => {
          this.loading = false
          this.protectedData = response.data
        })
        .catch(e => this.error = e)
  }
}
</script>

<style scoped>
  .error {
    padding: 1rem;
    border-radius: 10px;
    border: 2px solid red;
    background-color: gray;
  }
</style>