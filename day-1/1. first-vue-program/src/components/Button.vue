<script setup>
import { ref } from "vue";

let changeColor = ref(false);

const handleClick = () => {
    changeColor.value = !changeColor.value 
    console.log(changeColor.value)   
} 


</script>

<template>
  <div class="btn_parent">
    <button @click="handleClick">Change !</button>
  </div>
</template>

<style scoped>
.btn_parent {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}

button {
  padding: 1rem 2rem;
  background-color: teal;
  border-radius: 0.3rem;
  border: none;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
