export type GameType = (
  'qr' |
  'ox' |
  'bingo' |
  'quiztime' |
  'baseball'
)

export type ThemeQuizList = {
  themeQuestionNo: number;
  themeNo: number;
  themeQuestionTitle: string;
  themeQuestionAnswers: string[];
  themeQuestionType: "choice" | "input"; // 문제 유형 추가 가능
  themeQuestionContent: {
    title: string;
    questionType: "choice" | "input";
    answers: string[];
    contents: { type: string; content: string }[];
    choices: { type: string; content: string; value: string }[];
    explanation: any[];
  };
  themeQuestionTag: string;
  themeQuestionOrder: number;
  modifiedDt: string | null;
  modifiedDtFm: string;
  deletedYn: 0 | 1;
  classificationOrgName: string;
  classificationGradeName: string;
  classificationSubjectName: string;
  content: any;
}[];
