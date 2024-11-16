<template>
  <div>
    <h1>Welcome to Quiztastic</h1>
    <p>Test your knowledge with our amazing quizzes!</p>
    <NuxtLink to="/quiz" class="cta-button">Start a Quiz</NuxtLink>
  </div>
</template>

<script setup lang="ts">
// You can add any page-specific logic here
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-button {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
}
</style>