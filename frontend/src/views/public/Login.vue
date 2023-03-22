<template>
 <main>
   <h1>Login</h1>
   <form @submit.prevent="login">
     <input type="text" placeholder="Username" v-model="username">
     <input type="password" placeholder="Password" v-model="password">
     <button type="submit">Submit</button>
   </form>
 </main>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$api.login({username: this.username, password: this.password})
          .then(response => {
            this.$api.saveToken(response.data.access, response.data.refresh)
            this.$router.push({path: this.$route.query.next || '/'})
          })
          .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>