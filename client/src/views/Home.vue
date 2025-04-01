<script setup>
import { ref } from 'vue'
import api from '../api/api'
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
const message = ref('')
const postData = ref('')

const fetchData = async () => {
  try {
    const response = await api.get('/hello')
    message.value = response.data.message
  } catch (error) {
    console.error('Error:', error)
  }
}

const sendData = async () => {
  try {
    const response = await api.post('/data', { data: postData.value })
    console.log('Response:', response.data)
  } catch (error) {
    console.error('Error:', error)
  }
}
</script>

<template>
  <div>
    <h1>Home</h1>
    <button @click="counter.increment()">Count: {{ counter.count }}</button>
    
    <div>
      <button @click="fetchData">Fetch API</button>
      <p>{{ message }}</p>
    </div>
    
    <div>
      <input v-model="postData" placeholder="Enter data">
      <button @click="sendData">Send Data</button>
    </div>
    
    <router-link to="/about">Go to About</router-link>
  </div>
</template>