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
    width: 100%;
    height: 62px;
    border-radius: 10px;
    border: 1px solid #CECECE;
    background: #fff;
    padding-left: 20px;
    color: #2B2B2B;
    font-size: 24px;
    font-weight: 600;
    display: flex;
    align-items: center;
    text-align: left;
    cursor: pointer;
    &:focus{
      border: 3px solid #2A47A5;
    }
    &::placeholder{
      color: #747474;
    }
  }

  @media screen and (max-width: 540px) {
    .input-text{
      font-size: 18px;
      height: 48px;
    }
  }
</style>