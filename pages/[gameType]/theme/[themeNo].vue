<template>
  <div class="container">
    <DetailLnb 
      :gameNo="themeNo" 
      :tabType="tabType"
      :currentGeneralIndex="currentGeneralIndex"
      :generalLength="quizGeneralList.length"
      @handleTab="handleTab"
      @changeGeneralIndex="changeGeneralIndex"
    />
    <div class="wrap-tab">
      <CommonBreadcrumb
        :linkList ="[{
          name: '테마 상세',
          link: `/${gameType}/theme/${themeNo}`
        }]"
      />
      <DetailScenario 
        v-if="tabType === 'scenario'"
        :themeNo="themeNo"
      />
      <DetailGeneral 
        v-else-if="tabType === 'general'"
        :gameNo="themeNo"
        :detailType="'theme'"
        :quizGeneralList="quizGeneralList"
        :currentGeneralIndex="currentGeneralIndex"
      />
      <DetailBoss 
        v-else-if="tabType === 'boss'"
        :gameNo="themeNo"
        :detailType="'theme'"
      />
    </div>
    <DetailRnb 
      :gameNo="themeNo" 
      :tabType="tabType"
    />
  </div>
</template>

<script setup lang="ts">
import type { ThemeQuizList } from '@/types/common'
import { useCommonStore } from '@/stores/common'
const router = useRouter()
const route = useRoute()

const themeNo = Number(route.params.themeNo)
const gameType = storeToRefs(useCommonStore()).gameType

const tabType = ref(`${gameType.value === 'qr' ? 'scenario' : 'general'}`)

const handleTab = (type: string) => {
  tabType.value = type
}
const currentGeneralIndex = ref(0)
const changeGeneralIndex = (index: number) => {
  currentGeneralIndex.value = index
}

const quizGeneralList : ThemeQuizList = [
  {
    "themeQuestionNo": 797,
    "themeNo": 118,
    "themeQuestionTitle": "문제 만들기",
    "themeQuestionAnswers": ["2"],
    "themeQuestionType": "choice",
    "themeQuestionContent": {
      "title": "문제 만들기",
      "questionType": "choice",
      "answers": ["2"],
      "contents": [
        {
          "type": "text",
          "content": "121"
        },
        {
          "type": "image",
          "content": "20250307/143708035857787.png"
        }
      ],
      "choices": [
        {
          "type": "text",
          "content": "12",
          "value": "1"
        },
        {
          "type": "text",
          "content": "1231",
          "value": "2"
        }
      ],
      "explanation": []
    },
    "themeQuestionTag": "",
    "themeQuestionOrder": 1,
    "modifiedDt": null,
    "modifiedDtFm": "2025년 03월 10일",
    "deletedYn": 0,
    "classificationOrgName": "초등",
    "classificationGradeName": "2",
    "classificationSubjectName": "영어",
    "content": null
  },
  {
    "themeQuestionNo": 798,
    "themeNo": 118,
    "themeQuestionTitle": "두번째",
    "themeQuestionAnswers": ["31231"],
    "themeQuestionType": "input",
    "themeQuestionContent": {
      "title": "두번째",
      "questionType": "input",
      "answers": ["31231"],
      "contents": [
        {
          "type": "text",
          "content": "14"
        }
      ],
      "choices": [],
      "explanation": []
    },
    "themeQuestionTag": "",
    "themeQuestionOrder": 2,
    "modifiedDt": null,
    "modifiedDtFm": "2025년 03월 10일",
    "deletedYn": 0,
    "classificationOrgName": "고등",
    "classificationGradeName": "1",
    "classificationSubjectName": "영어",
    "content": null
  }
]
</script>

<style lang="scss" scoped>
.wrap-tab{
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  overflow-y: auto;
}
</style>
