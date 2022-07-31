<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show dark modals?
        <input
          v-model="showDarkModals"
          type="checkbox"
        />
      </label>
    </div>
    <button @click="showModal = true">Show modal</button>
    <component
      v-model="showModal"
      :is="showDarkModals ? ModalDark : Modal"
      title="My modal title (via prop)"
    >
      <h3 style="color:red"><u>This content is comming from 'component'. And it will go to Modal or ModalDark base on 'showDarkModals' condiotion!!</u></h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa laboriosam vero natus ut rerum quaerat, saepe praesentium tempore et hic velit odio nemo minus labore quam ullam quod architecto?</p>
    </component>
  </div>
</template>

<script setup>
/*
  imports
*/

  import { ref } from 'vue'
  import Modal from '@/components/Modal.vue'
  import ModalDark from '@/components/ModalDark.vue'

/*
  modals
*/

  const showDarkModals = ref(false)
  const showModal = ref(false)

</script>

<!--
<script>
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal
  }
}
</script>
-->