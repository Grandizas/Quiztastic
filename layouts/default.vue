<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <footer>
      <p>&copy; 2024 Quiztastic. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// You can add any layout-wide logic here
</script>

<style scoped>
main {
  padding: 2rem;
}

footer {
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: center;
}
</style>
