<template>
  <form class="input-comment" @submit.prevent="submit">
    <legend>Comentar</legend>
    <label for="name">Nombre</label>
    <input v-model="name" name="name" type="text" />
    <label for="email">Correo</label>
    <input v-model="email" name="email" type="email" />
    <label for="content">Comentario</label>
    <textarea
      v-model="content"
      name="content"
      cols="30"
      rows="4"
      placeholder="Escribe aquí tu comentario"
    >
    </textarea>
    <button @submit.prevent>Comentar</button>
  </form>
</template>

<script setup>
  const emits = defineEmits(['submit'])

  const name = ref('')
  const email = ref('')
  const content = ref('')

  function submit(e) {
    emits('submit', {
      name: name.value,
      email: email.value,
      content: content.value.slice(0, 120),
    })
    name.value = ''
    email.value = ''
    content.value = ''
  }
</script>

<style lang="scss" scoped>
.input-comment {
  @apply flex flex-col gap-2 mt-6 mb-4;
  legend {
    @apply text-xl font-bold;
  }
  label {
    @apply text-gray-600;
  }
  input,
  textarea {
    @apply p-2;
  }
  button {
    @apply border bg-gray-300 hover:bg-gray-400 px-4 py-2 text-center font-bold;
  }
}
</style>
