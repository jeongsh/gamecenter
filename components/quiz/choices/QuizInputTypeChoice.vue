<template>
  <div
    v-for="choice in choices"
    class="choice-item"
    :class="{'active': propAnswerValue.includes(String(choice.value))}"
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
      class="choice"
    >
      {{ choice.content }}
    </label>
    <label
      :for="'type-choice-' + choice.value"
      class="circle"
    >
    </label>
  </div>
</template>

<script setup lang="ts">
  const { choices, propAnswerValue } = defineProps(['choices', 'propAnswerValue'])

  const emit = defineEmits(['emitAnswer'])

  const answerValue = ref<string[]>([])

  const choiceValue = (value: string) => {
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  gap: 8px;
  .index{
    font-size: 13px;
    font-weight: 500;
    width: 12px;
  }
  .choice{
    flex: 1;
    min-height: 40px;
    padding: 12px 16px;
    height: auto;
    border: 1px solid #dbdbdb;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.3px;
    word-break: break-all;
    line-height: 1;
    outline: none;
    border-radius: 8px;
  }
  .circle{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #9d9d9d;
    position: relative;
    cursor: pointer;
    &::after{
      content: "";
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #dbdbdb;
      border: 1px solid #dbdbdb;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &.active{
    .index{
      color: #16a3f7;
    }
    .choice{
      border: 1px solid #16a3f7;
      background: #dcf1fe;
    }
    .circle{
      border-color: #16a3f7;
      &::after{
        background-image: linear-gradient(180deg, #1493DE 0%, #1493DE 100%);
        border-color: #16a3f7;
      }
    }
  }
}

</style>