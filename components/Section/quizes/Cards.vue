<template>
  <div v-for="card in cards" :class="`section-quizes__card bg-${card.color}`">
    <div :class="`section-quizes__card--cover c-${card.color}`">
      <i :class="card.icon" />
    </div>

    <Text tag="p" tag-type="standard" color="white" align="center">
      {{ card.text }}
    </Text>
  </div>
</template>

<script lang="ts" setup>
// prettier-ignore
const cards = [
  { color: 'blue',   icon: 'fi fi-tr-calendar-pen',    text: 'Interactive Quizes' },
  { color: 'yellow', icon: 'fi fi-tr-star-of-david',   text: 'Real-time Feedback' },
  { color: 'green',  icon: 'fi fi-tr-olive-oil',       text: 'Leaderboard Rankings' },
  { color: 'red',    icon: 'fi fi-tr-square-terminal', text: 'Fun Challenges' },
];
</script>
