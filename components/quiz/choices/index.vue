<template>
  <component
    :is="getComponentType()"
    :choices="choices"
    :propAnswerValue="propAnswerValue"
    :propQuestionIndex="propQuestionIndex"
    @emitAnswer="emitAnswerValue"
  >
  </component>
  <!-- <h1>{{ questionType }}</h1> -->
</template>

<script setup lang="ts">
  import QuizInputTypeChoice from './QuizInputTypeChoice.vue'
  import QuizInputTypeOx from './QuizInputTypeOx.vue'
  import QuizInputTypeInput from './QuizInputTypeInput.vue'
  import QuizInputTypeChoiceAll from './QuizInputTypeChoiceAll.vue'
  import QuizInputTypeLock from './QuizInputTypeLock.vue'
  import QuizInputTypeDirection from './QuizInputTypeDirection.vue'

  const props = defineProps<{
    choices: any
    questionType : string
    propAnswerValue : string[]
    propQuestionIndex : number
  }>()

  const emit = defineEmits(['emitAnswer'])

  const {
    choices,
    questionType,
    propAnswerValue,
    propQuestionIndex
  } = toRefs(props)

  const typeToString: any = {
    'choice': QuizInputTypeChoice,
    'ox': QuizInputTypeOx,
    'input': QuizInputTypeInput,
    'choiceAll': QuizInputTypeChoiceAll,
    'numbers': QuizInputTypeLock,
    'directions': QuizInputTypeDirection,
  }

  const getComponentType: any = () => {
    return typeToString[questionType.value] || '유효하지 않은 타입'
  }

  const emitAnswerValue = (value: string[]) => {
    emit('emitAnswer', value)
  }
</script>