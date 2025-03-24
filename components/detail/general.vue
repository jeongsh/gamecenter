<template>
  <div class="wrap-question">
    <div class="container-question">
      <div v-for="(quiz, index) in quizGeneralList"  class="wrap-quiz">
        <Quiz
          v-if="currentGeneralIndex === index"
          :currentQuestion="quiz.themeQuestionContent"
        />
      </div>
    </div>
    <div class="container-info">
      <div v-for="(quiz, index) in quizGeneralList">
        <div v-if="currentGeneralIndex === index">
          <div class="wrap-info">
            <div class="info">
              <p class="info-category">문제 유형</p>
              <p class="info-content">{{ convertedQuestionType(quiz.themeQuestionType) }}</p>
            </div>
            <div class="info">
              <p class="info-category">분류</p>
              <p class="info-content">
                {{ quiz.classificationOrgName }}, {{ quiz.classificationGradeName }}학년, {{ quiz.classificationSubjectName }}
              </p>
            </div>
            <div class="info">
              <p class="info-category">날짜</p>
              <p class="info-content">
                {{ quiz.modifiedDtFm }}
              </p>
            </div>
            <div class="info">
              <p class="info-category">출제자</p>
              <p class="info-content">
                {{ quiz.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ThemeQuizList } from '@/types/common'
import { useCommonStore } from '@/stores/common'
const router = useRouter()
const route = useRoute()

const props = defineProps<{
  gameNo: number;
  detailType: string;
  quizGeneralList: ThemeQuizList;
  currentGeneralIndex: number;
}>();
const gameType = storeToRefs(useCommonStore()).gameType

const convertedQuestionType = (questionType : string) =>{
  switch (questionType) {
    case 'input': return '단답형'; break
    case 'choice': return '선택형'; break
    case 'choiceAll': return '다중 선택형'; break
    case 'ox': return 'OX형'; break
    case 'numbers': return '숫자형'; break
    case 'directions': return '방향형'; break
  }
}
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
  .container-question{
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
.container-info{
  width: 206px;
  background: none;
  border: none;
  backdrop-filter: none;
  padding: 8px 0;
}
.wrap-info{
  width: 100%;
  background: #fff;
  border: 1px solid #dbdbdb;
  padding: 16px;
  border-radius: 8px;
  word-break: keep-all;
  .info{
    display: flex;
    margin-bottom: 8px;
    &:last-child{
      margin-bottom: 0;
    }
    .info-category{
      font-size: 12px;
      font-weight: 500;
      letter-spacing: -0.8px;
      color: #949494;
      width: 45px;
      margin-right: 14px;
      line-height: 18px;
    }
    .info-content{
      font-size: 12px;
      font-weight: 500;
      letter-spacing: -0.36px;
      color: #2b2b2b;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 18px;
    }
  }
}
</style>
