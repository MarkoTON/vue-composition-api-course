<template>
  <div class="home">
    
    <h2>{{ appTitle }}</h2>

    <h3>{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text">
      <!-- <input v-model="counterTitle" type="text"> -->
    </div>

  </div>
</template>

<script setup>
import { reactive } from 'vue'
// import { ref } from 'vue'

// Non reactive data
const appTitle = 'My Ok Counter App'

// const counter = ref(0),
//       counterTitle = ref('My Counter')

// Ne moramo da koristimo .value kada koristimo reactive objects
const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

const increaseCounter = () => {
  counterData.count++
}

const decreaseCounter = () => {
  counterData.count--
}

console.log(reactive)
console.log(counterData)
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>