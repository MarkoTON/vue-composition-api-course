<template>
  <teleport to=".modals-container">
    <div
      v-if="modelValue"
      class="modal"
    >
      <h1>{{ title }}</h1>
      <!-- Here in this slot content is coming from '<component>' -->
      <slot />
      <!-- End of slot -->
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
      <div>
        Username is: {{ userData.username }}
      </div>
      <hr>
      <h2>props:</h2> {{props}}
      <br>
      <h2>props.modelValue:</h2> {{props.modelValue}}
      <br>
      <h2>props.title:</h2> {{props.title}}
      <h2>Just using 'title':</h2> {{title}}
    </div>
  </teleport>
</template>

<script setup>
/*
  imports
*/

  import { inject } from 'vue'

/*
  props
*/

  // Unutar script-e mora da se koristi props.title etc.
  const props = defineProps({
    // v-model
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'No title specified'
    }
  })

/*
  emits
*/

  const emit = defineEmits(['update:modelValue'])

/*
  user data
*/

  const userData = inject('userData')

</script>

<style>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>