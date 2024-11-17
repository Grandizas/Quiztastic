import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    
    // user: null,
    // quizzes: [],
    // currentQuiz: null,
  }),

  getters: {
    // Define your getters here
    // isLoggedIn: (state) => !!state.user,
    // availableQuizzes: (state) => state.quizzes,
  },

  actions: {
    loadQuizzes() {
      // Implement logic to load quizzes
    },
  },
})