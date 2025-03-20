<template>
  <div
    v-for="choice in choices"
    class="choice-item"
  >
    <!-- :checked="selectedAnswer.indexOf(choice.value) >= 0" -->
    <span class="index">
      {{ choice.value }}.
    </span>
    <input
      type="checkbox"
      :value="choice.value"
      name="choiceAll"
      :id="'type-choiceAll-' + choice.value"
      :checked="propAnswerValue.includes(String(choice.value))"
      @change="handleCheckboxChange($event.target.value, $event.target.checked)"
    >
    <label
      :for="'type-choiceAll-' + choice.value"
      class="choice"
      :class="{'active': propAnswerValue.includes(String(choice.value))}"
    >
      {{ choice.content }}
    </label>
    <div
      class="circle"
      :class="{'active': propAnswerValue.includes(String(choice.value))}"
    >
      <div class="inner-circle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    choices: any
    propAnswerValue : string[]
    propQuestionIndex : number
  }>()

  const {
    choices,
    propAnswerValue,
    propQuestionIndex
  } = toRefs(props)

  const emit = defineEmits(['emitAnswer'])

  const answerValue = ref<string[]>([])

  watch(propQuestionIndex, (newVal) => {
    answerValue.value = []
  })

  const handleCheckboxChange = (value: string, isChecked: boolean) => {
    console.log(answerValue.value)
    $howlerPlay('click.mp3')
    if (isChecked) {
      if (!answerValue.value.includes(String(value))) {
        answerValue.value.push(String(value))
      }
    } else {
      answerValue.value = answerValue.value.filter(val => val !== String(value))
    }

    emit('emitAnswer', answerValue.value)
  }

</script>
<style lang="scss" scoped>
input{
  display: none;
}
.choice-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  margin-bottom: 12px;
  .index{
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.05px;
    width: 24px;
  }
  .choice{
    flex: 1;
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
    &.active{
      border: 3px solid #2A47A5;
    }
  }
}

.circle{
  width: 24px;
  height: 24px;
  background: #fff;
  border: 1px solid #CECECE;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner-circle{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #E8E8E8;
  }
  &.active{
    border-color: #2A47A5;
    .inner-circle{
      background: #2A47A5;
    }
  }
}
@media (max-width: 540px){
  .choice-item{
    gap: 8px;
    .index{
      font-size: 20px;
      width: 20px;
    }
    .choice{
      height: 48px;
      font-size: 18px;
    }
  }
}
</style>