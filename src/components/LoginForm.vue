<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '@/hooks/useLogin'

export default {
  setup(_, context) {
    const { error, login } = useLogin()

    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await login(email.value, password.value)

      if (!error.value) {
        context.emit('login')
      }
    }

    return {
      handleSubmit,
      email,
      error,
      password,
    }
  },
}
</script>

<style></style>
