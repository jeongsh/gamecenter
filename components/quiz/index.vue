<template>
  <p class="title">
    {{ currentQuestion.title }}
  </p>
  <QuizContents
    v-for="(content, idx) in currentQuestion.contents"
    :key="idx"
    :content="content"
  />
  <!-- <QuizChoices
    :choices="currentQuestion.choices"
    :questionType="currentQuestion.questionType"
    :propAnswerValue="answerValue[questionIndex]"
    :propQuestionIndex="questionIndex"
  /> -->
  </template>
  
  <script setup lang="ts">
  const currentQuestion = {
    title: '문제 제목',
    contents: [
      { type: 'text', content: '문제 내용' },
      { type: 'image', content: 'https://example.com/image.jpg' }
    ],
    choices: [
      { type: 'choice', content: '선택지 1' },
      { type: 'ox', content: 'O/X 문제' },
      { type: 'input', content: '입력 문제' }
    ],
    questionType: 'choice'
  }
  </script>
  
  <style lang="scss" scoped>

  </style>