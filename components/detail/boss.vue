<template>
  <div class="wrap-question">
    <div class="question-container">
      <Quiz :currentQuestion="currentQuestion"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
const router = useRouter()
const route = useRoute()

const props = defineProps({
  gameNo: {
    type: Number
  },
  detailType: {
    type: String,
  }
})
const gameType = storeToRefs(useCommonStore()).gameType
const currentQuestion = {
  title: "지구의 지속 가능한 발전에 대한 설명으로 옳지 않은 것은?",
  questionType: "choice",
  answers: ["1"],
  contents: [
    {
      type: "text",
      content: "지속 가능한 발전은 환경, 경제, 사회적 측면을 모두 고려하여 발전하는 개념이다.",
    },
    {
      type: "embedVideo",
      content: "https://www.youtube.com/shorts/fjkLOCK4c20",
    },
    {
      type: "embedVideo",
      content: "https://www.youtube.com/watch?v=BjkGYHOoUo8",
    },
  ],
  choices: [
    {
      type: "text",
      content: "지구가 위협받고 있다는 위기감에서 비롯된 개념이다.",
      value: "1",
    },
    {
      type: "text",
      content: "인간의 편리한 삶을 최우선으로 여기는 개발 방식이다.",
      value: "2",
    },
    {
      type: "text",
      content: "환경 보호와 경제 성장의 조화를 추구하는 개발 방식이다​",
      value: "3",
    },
    {
      type: "text",
      content:
        "풍력, 조력 등과 같이 환경 친화적인 개발을 통해 지속 가능한 발전을 이룰 수 있다.",
      value: "4",
    },
    {
      type: "text",
      content:
        "지속 가능한 발전을 위해 우리나라는 국가적 차원에서 저탄소 ​녹색 성장 정책을 추진하고 있다.",
      value: "5",
    },
  ],
  explanation: [],
};
</script>

<style lang="scss" scoped>
.wrap-question{
  display: flex;
  padding: 16px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #dbdbdb;
  gap: 16px;
  height: 100%;
  display: flex;
  gap: 16px;
  .question-container{
    width: 470px;
    padding: 16px;
    height: 100%;
    overflow-y: auto;
    border-radius: 16px;
    border: 1px solid #dbdbdb;
  }
  .question-title{
    min-height: 40px;
    font-size: 17px;
    letter-spacing: -0.5px;
    font-weight: 500;
    color: #2b2b2b;
    margin-bottom: 8px;
    padding: 0;
    line-height: 1.3;
  }
}
</style>
