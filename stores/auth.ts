import {
  defineStore,
} from 'pinia'

import type{
  User,
} from '@/types/user'

/**
 * 로그인 된 유저 정보 스토어
 */
export const useAuthStore = defineStore('auth', () => {
  /**
   * 유저 정보
   */
  const user = ref<User | null>(null)
  const setUser = async (_user: (User | null)) => {
    user.value = _user
  }

  return {
    /**
     * 유저 정보
     */
    user,
    setUser,
  }
})
