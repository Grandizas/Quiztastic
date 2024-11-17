<template>
  <div>
    <h1>Quiz</h1>
    <p v-if="!quizStarted">Ready to start the quiz?</p>
    <button v-if="!quizStarted" @click="startQuiz" class="start-button">
      Start Quiz
    </button>
    <div v-else>
      <!-- Add quiz components here -->
      <p>Quiz questions will appear here</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const quizStarted = ref(false)

const startQuiz = () => {
  quizStarted.value = true
  // Add logic to fetch quiz questions or set up the quiz
}
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}

.start-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}
</style>
