<template>
  <form>
    <textarea
      v-model="message"
      placeholder="type a message and hit enter to send"
      @keypress.enter.prevent="handleSubmit"
    >
    </textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import getUser from '@/hooks/getUser'
import useCollection from '@/hooks/useCollection'
import { timestamp } from '@/firebase/config'
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const { user } = getUser()
    const { addDoc, error } = useCollection('messages')

    const message = ref('')

    const handleSubmit = async () => {
      const chat = {
        createdAt: timestamp,
        message: message.value,
        name: user.value.displayName,
      }

      await addDoc(chat)
      if (!error.value) {
        message.value = ''
      }
    }

    return {
      handleSubmit,
      error,
      message,
    }
  },
}
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
