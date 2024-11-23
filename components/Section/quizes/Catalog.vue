<template>
  <div class="quiz-catalog">
    <!-- ----------------------------------------- -->
    <!--                [ Title ]                  -->
    <!-- ----------------------------------------- -->
    <Text tag="p" tag-type="subtitle" color="gray" align="center"
      >Explore Courses</Text
    >
    <Text tag="h2">Quiz Catalog</Text>

    <!-- ----------------------------------------- -->
    <!--               [ Catalog ]                 -->
    <!-- ----------------------------------------- -->
    <div class="quiz-catalog__container">
      <div class="quiz-catalog__item" v-for="quiz in quizzes" :key="quiz.id">
        <Text tag="h3" color="gray">{{ quiz.title }}</Text>
        <Text tag="p">{{ quiz.description }}</Text>
        <Text tag="p" color="gray"
          >Total Questions: {{ quiz.questions.length }}</Text
        >
        <Button text="Start Quiz" @click="startQuiz(quiz)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Quiz } from '~/types';

const quizzes = ref<Quiz[]>([]);

const startQuiz = (quiz: Quiz) => {
  // Logic to start the quiz
};
</script>
