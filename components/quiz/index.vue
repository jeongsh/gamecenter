<template>
  <p class="title">
    {{ currentQuestion.title }}
  </p>
  <QuizContents
    v-for="(content, idx) in currentQuestion.contents"
    :key="idx"
    :content="content"
  />
  <div class="wrap-choices">
    <QuizChoices
      :choices="currentQuestion.choices"
      :questionType="currentQuestion.questionType"
      :propAnswerValue="currentQuestion.answers"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentQuestion: any
}>()
</script>

<style lang="scss" scoped>
.title {
  font-size: 17px;
  letter-spacing: -0.5px;
  font-weight: 500;
  color: #2b2b2b;
  margin-bottom: 8px;
  padding: 0;
  line-height: 1.3;
  min-height: 40px;
  height: auto;
}
.wrap-choices{
  margin: 32px 0;
}
</style>
<style lang="scss">
.question-container{
  .wrap-quiz > *{
    margin-bottom: 8px;
    border-radius: 8px;
  }
}
</style>