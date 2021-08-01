<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button type="submit">Sign up</button>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '@/hooks/useSignup'

export default {
  setup(_, context) {
    const { error, signup } = useSignup()

    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)

      if (!error.value) {
        context.emit('signup')
      }
    }

    return {
      handleSubmit,
      displayName,
      email,
      error,
      password,
    }
  },
}
</script>

<style></style>
