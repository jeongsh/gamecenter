<template>
  <div class="wrap-ox">
    <!-- @change="(e, ...args) => handleChangeInputAnswer(e, args)" -->
    <label
      for="type-o"
      class="box-o"
      :class="{'active': propAnswerValue.includes('o')}"
    >
      <input
        type="radio"
        name="ox"
        value="o"
        id="type-o"
        :checked="propAnswerValue.includes('o')"
        @click="selectOx($event.target.value)"
      >
    </label>
    <label
      for="type-x"
      class="box-x"
      :class="{'active': propAnswerValue.includes('x')}"
    > 
      <input
        type="radio"
        name="ox"
        value="x"
        id="type-x"
        :checked="propAnswerValue.includes('x')"
        @click="selectOx($event.target.value)"
      >
    </label>
  </div>
</template>

<script setup lang="ts">
  const { choices, propAnswerValue } = defineProps(['choices', 'propAnswerValue'])

  const emit = defineEmits(['emitAnswer'])

  const answerValue = ref<string[]>([])

  const selectOx = (oxValue: string) => {
    if (answerValue.value.length === 0) {
      answerValue.value.push(oxValue)
    } else {
      answerValue.value[0] = oxValue
    }

    emit('emitAnswer', answerValue.value)
  }
</script>
<style lang="scss" scoped>
.wrap-ox{
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
}
input{
  display: none;
}
.box-o{
  max-width: 250px;
  display: block;
  flex: 1;
  aspect-ratio: 1;
  cursor: pointer;
  // background: url(@/assets/images/quiztime/o-disable.svg) no-repeat center center;
  background-size: cover !important;
  &.active{
    // background: url(@/assets/images/quiztime/o.svg) no-repeat center center;
  }
}

.box-x{
  max-width: 250px;
  flex: 1;
  aspect-ratio: 1;
  display: block;
  flex: 1;
  aspect-ratio: 1;
  cursor: pointer;
  // background: url(@/assets/images/quiztime/x-disable.svg) no-repeat center center;
  background-size: cover !important;
  &.active{
    // background: url(@/assets/images/quiztime/x.svg) no-repeat center center;
  }
}

@media screen and (max-width: 540px) {
  .box-o{
    max-width: 100px;
  }
  .box-x{
    max-width: 100px;
  }
}
</style>