<script setup lang="ts">
import { ref, onMounted } from 'vue'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import userData from '../data.js'

const header = ref('Contacts')
const users = ref([])


onMounted(async() => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    users.value = data
    
  } catch (error) {
    console.log(error);
  }
})

</script>

<template>
  <h1>{{ header.toLocaleUpperCase() }}</h1>
  <!-- <input v-model="header" /> -->
  <!-- * v-model provides 2 way data binding for reactive references -->
  <ul>
    <li v-for="{name, username, id, email, phone, website} in users" :key="id" >
      <img src="https://robohash.org/1" alt="robo" />
      <div class="credentials">
        <div>Name: {{ name }}</div>
        <div>Username: {{ username }}</div>
        <div>Email: {{ email }}</div>
        <div>Phone: {{ phone }}</div>
        <div>website: {{ website }}</div>
      </div>
    </li>
  </ul> 
</template>

<style>
img {
  height: 100px;
  widows: 100px;
}


header {
  color: white;
}

input {
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 0.4rem;
  font-size: 0.9rem;
}

ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

ul li {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 1rem;
  margin: auto;
  width: 260px;
  height: 280px;
  border: 1px solid grey;
  list-style-type: none;
  color: whitesmoke;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
  }
}
</style>
