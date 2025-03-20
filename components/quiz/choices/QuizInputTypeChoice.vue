<template>
  <div
    v-for="choice in choices"
    class="choice-item"
  >
    <input
      type="radio"
      :value="choice.value"
      name="choice"
      :checked="propAnswerValue.includes(String(choice.value))"
      :id="'type-choice-' + choice.value"
      @click="choiceValue(choice.value)"
    >
    <span class="index">
      {{ choice.value }}.
    </span>
    <label
      :for="'type-choice-' + choice.value"
      :class="{'active': propAnswerValue.includes(String(choice.value))}"
      class="choice"
    >
    {{ choice.content }}
    </label>
  </div>
</template>

<script setup lang="ts">
  const { choices, propAnswerValue } = defineProps(['choices', 'propAnswerValue'])

  const emit = defineEmits(['emitAnswer'])

  const answerValue = ref<string[]>([])

  const choiceValue = (value: string) => {
    $howlerPlay('click.mp3')
    if (answerValue.value.length === 0) {
      answerValue.value.push(String(value))
    } else {
      answerValue.value[0] = String(value)
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