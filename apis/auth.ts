import {
  API_GET_LOGIN,
  API_GET_ME,
} from '@/consts/apis/auth'

import {
  User,
} from '@/types/user'

/**
 * 로그인 된 내 정보 가져오기
 */
export const fetchMe = async () => await $fetchBase<User>(API_GET_ME)


type Token = string
/**
 * 유저 넘버를 이용한 로그인
 * 개발 중에만 사용됨
 */
export const dummyLogin = async (userNo: number) => $fetchBase<{
  user: User,
  token: Token,
}>(
  `${API_GET_LOGIN}?userNo=${userNo}`
)
