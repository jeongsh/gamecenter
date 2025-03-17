export type UserGrade = 'NONE' | 'SUBSCRIPTION' | 'CERTIFICATION'

export interface User {
  userNo: number
  userId: string
  userRole: number
  userNickname: string
  userIntroduction: string
  userProfileImage: string
  userTemporaryYn: boolean
  userGrade: UserGrade
}
