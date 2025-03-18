import {
  API_GET_VOTE_ROOM_BY_CODE,
  API_GET_VOTE_ROOM_BY_ID,
  API_GET_RECENT_ENTERED_VOTE_ROOMS_BY_USER_NO,
} from '@/consts/apis/vote/vote-room'

import type {
  VoteRoom,
} from '@/types/vote/vote-room'

/**
 * 투표장 정보 가져오기
 * 안 씀
 */
export const fetchVoteRoomByCode = async ({
  roomCode,
}: {
  roomCode: string
}) => await $fetchBase<VoteRoom>(API_GET_VOTE_ROOM_BY_CODE, {
  method: 'POST',
  body: {
    roomCode,
  },
})

/**
 * 투표장 정보 가져오기
 */
export const fetchVoteRoomById = async ({
  roomId,
}: {
  roomId: string
}) => await $fetchBase<VoteRoom>(API_GET_VOTE_ROOM_BY_ID, {
  method: 'POST',
  body: {
    roomId,
  },
})

/**
 * 내가 참여했던 최근 투표장 정보 가지고 오기
 */
export const fetchRecentEnteredVoteRoomsByUserNo = async () => (
  await $fetchBase<any[]>(API_GET_RECENT_ENTERED_VOTE_ROOMS_BY_USER_NO, {
    method: 'GET',
  })
)
