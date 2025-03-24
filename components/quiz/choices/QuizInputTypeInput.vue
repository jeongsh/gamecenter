<template>
  <div>
    <input
      class="input-text"
      type="text"
      :value="propAnswerValue[0]"
      @change="inputedValue($event.target.value)"
      placeholder="정답을 입력해주세요."
    >
  </div>
</template>

<script setup lang="ts">
  const { choices, propAnswerValue } = defineProps(['choices', 'propAnswerValue'])

  const emit = defineEmits(['emitAnswer'])


  const answerValue = ref<string[]>([])

  const inputedValue = (inputedValue: string) => {
    if (answerValue.value.length === 0) {
      answerValue.value.push(inputedValue)
    } else {
      answerValue.value[0] = inputedValue
    }

    if (inputedValue === '') {
      answerValue.value = []
    }

    emit('emitAnswer', answerValue.value)
  }
</script>

<style lang="scss" scoped>
  .input-text{
    display: flex;
    align-items: center;
    padding: 5px 10px;
    color: #2d73f8;
    line-height: 1;
    background-image: linear-gradient(45deg, #DCF1FE 0%, #EAF1FC 100%);
    border: 1px solid #16a3f7;
    border-radius: 30px;
    font-size: 13px;
    width: 100%;
  }
</style>