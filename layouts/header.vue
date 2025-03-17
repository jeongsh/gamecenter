<template>
  <header id="header" class="nav">
    <nav class="nav-header">
      <div class="nav-left-menu">
        <h1 class="logo">
          <a class="link-logo" :href="RAPORAPO_WEB_HOST">
            <img src="~/assets/images/logo.svg" alt="RAPORAPO">
          </a>
        </h1>
        <ul class="link-wrap">
          <li>
            <a
              class="btn-link"
              :href="RAPORAPO_WEB_HOST"
              id="btn-town"
            >
              타운으로
            </a>
          </li>
          <li>
            <a
              class="btn-link active"
              href="/battle"
              data-depth1="square"
            >
              라포 의회
            </a>
          </li>
          <li>
            <a
              class="btn-link"
              :href="RAPORAPO_GAME_HOST"
              data-depth1="game"
            >
              게임 센터
            </a>
          </li>
          <li>
            <a
              class="btn-link"
              :href="RAPORAPO_PLAYGROUND_HOST"
              data-depth1="playground"
            >
              퍼즐 하우스
            </a>
          </li>
          <li>
            <a
              class="btn-link"
              :href="RAPORAPO_POOL_HOST"
              data-depth1="pool"
            >
              문제 도서관
            </a>
          </li>
        </ul>
      </div>
      <!-- / nav-left-menu -->

      <div class="nav-right-menu">
        <button
          class="btn btn-user-menu collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#user-menu"
        >
          <!-- <img class="user-img" :src="$getProfileImageSrc(user.userNo, user.userProfileImage)" alt="">
          <div class="user-nickname ellipsis">{{user.userNickname}}</div> -->
        </button>

        <div id="user-menu" class="collapse user-menu">
          <a :href="TREE_HOUSE_URL" class="link-profile">
            <!-- <img class="user-img" :src="$getProfileImageSrc(user.userNo, user.userProfileImage)" alt=""> -->
            <div class="box-text">
              <!-- <div class="menu-nickname">{{user.userNickname}}</div>
              <div class="menu-id">{{user.userId}}</div> -->
            </div>
          </a>

          <div class="box-link">
            <a :href="LOGOUT_PAGE_URL" class="btn-link-small">로그아웃</a>
            <a :href="TREE_HOUSE_URL" class="btn-link-small">프로필</a>
          </div>
        </div>
        <!-- / user-menu -->
      </div>
      <!-- / nav-right-menu -->
    </nav>
    <div class="wrap-nav-depth-2">
    <div class="nav-depth-2" data-depth2="game">
      <ul class="link-wrap">
        <li>
          <a
            :href="`${RAPORAPO_GAME_HOST}/qr`"
            class="btn-link"
          >
            QR퀴즈 방탈출
          </a>
        </li>
        <li>
          <a
            :href="`${RAPORAPO_GAME_HOST}/ox`"
            class="btn-link"
          >
            OX-배틀로얄
          </a>
        </li>
        <li>
          <a
            :href="`${RAPORAPO_GAME_HOST}/bingo`"
            class="btn-link"
          >
            빙고의 신
          </a>
        </li>
        <li>
          <a
            :href="`${RAPORAPO_GAME_HOST}/quiztime`"
            class="btn-link"
          >
            퀴즈타임
          </a>
        </li>
        <li>
          <a
            :href="`${RAPORAPO_GAME_HOST}/baseball`"
            class="btn-link"
          >
            HIT & RUN
          </a>
        </li>
        <li>
          <a
            :href="`${RAPORAPO_GAME_HOST}/mindgaze`"
            class="btn-link"
          >
            시선추적 AI 심리검사
          </a>
        </li>
      </ul>
    </div>
    <div class="nav-depth-2" data-depth2="playground">
      <ul class="link-wrap">
        <li>
          <a
            :href="`${RAPORAPO_PLAYGROUND_HOST}/consonant`"
            class="btn-link"
          >
            초성게임
          </a>
        </li>
        <li>
          <a
            :href="`${RAPORAPO_PLAYGROUND_HOST}/combination`"
            class="btn-link"
          >
            흩어진 단어 찾기
          </a>
        </li>
        <li>
          <a
            :href="`${RAPORAPO_PLAYGROUND_HOST}/card`"
            class="btn-link"
          >
            카드 짝 맞추기
          </a>
        </li>
        <li>
          <a
            :href="`${RAPORAPO_PLAYGROUND_HOST}/speedquiz`"
            class="btn-link"
          >
            스피드 퀴즈
          </a>
        </li>
      </ul>
    </div>
    <div class="nav-depth-2" data-depth2="pool">
      <ul class="link-wrap">
        <li>
          <a
            :href="`${RAPORAPO_POOL_HOST}/qr/pool`"
            class="btn-link"
          >
            문제 도서관
          </a>
        </li>
        <li>
          <a
            :href="`${RAPORAPO_POOL_HOST}/qr/library`"
            class="btn-link"
          >
            My 문제
          </a>
        </li>
      </ul>
    </div>
    <div class="nav-depth-2" data-depth2="square">
      <ul class="link-wrap">
        <li>
          <a
            href="/battle"
            class="btn-link"
          >
            배틀 토론
          </a>
        </li>
        <li>
          <a
            href="/vote"
            class="btn-link"
          >
            국민 투표
          </a>
        </li>
      </ul>
    </div>
  </div>
  </header>
</template>

<script lang="ts" setup>
import {
  TREE_HOUSE_URL,
  LOGOUT_PAGE_URL,
  RAPORAPO_WEB_HOST,
  RAPORAPO_GAME_HOST,
  RAPORAPO_PLAYGROUND_HOST,
  RAPORAPO_POOL_HOST,
} from '@/consts/path'

// import {
//   useAuthStore,
// } from '@/stores/auth'

// defineProps<{
//   active: string
// }>()

// const {
//   user,
// } = useAuthStore()



const { active } = defineProps({
  active: {
    type: String,
    default: 'home',
    validator: (value: string): boolean => ['home', 'debate', 'battle'].includes(value)
  }
})

onMounted(() => {
  const header = document.querySelector("#header");

  //data-depth1에 마우스 올렸을 때 data-depth2 active추가
  const depth1 = document.querySelectorAll("[data-depth1]");
  const depth2 = document.querySelectorAll("[data-depth2]");
  const btnTown = document.querySelector('#btn-town');
  depth1.forEach((el) => {
    console.log(1)
    el.addEventListener("mouseover", () => {
      const depth2Active = document.querySelector(
        `[data-depth2=${(el as HTMLElement).dataset.depth1}]`
      );
      depth2.forEach((el) => el.classList.remove("active"));
      depth2Active?.classList.add("active");
    });
  });
  // depth1이랑 depth2에서 마우스를 벗어났을 때 active제거
  header?.addEventListener("mouseleave", () => {
    depth2.forEach((el) => el.classList.remove("active"));
  });
  btnTown?.addEventListener("mouseover", () => {
    depth2.forEach((el) => el.classList.remove("active"));
  });
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as *;

.nav {
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 1030;
  height: 56px;

  &-header {
    display: flex;
    margin: 0 auto;
    padding: 0 40px;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid #DBDBDB;
    position: relative;
    z-index: 10;
    background: #fff;

    .nav-left-menu,
    .nav-right-menu {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .logo {
      width: 200px;
      margin-bottom: 0;
      margin-right: 24px;
    }
    .link-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 0;
      width: 128px;
      height: 48px;
      padding: 0 10px;
    }
    .text-icon {
      margin-right: 24px;
    }
    .link-wrap {
      margin: 0;
      padding-left: 0;
      list-style: none;
      display: flex;

      li {        // width: 80px
        padding: 0 16px;
        height: 48px;
        margin-right: 24px;
      }
      .btn-link {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
      }
    }
    .nav-right-menu {
      position: relative;
      .link-wrap {
        li {
          margin-left: 40px;
          margin-right: 0;
          width: auto;
        }
        .btn-link {
          font-size: 14px;
          letter-spacing: -0.3px;
        }
        .login {
          color: $text;
        }
        .join {
          color: $blue;
        }
      }
    }
    .btn-link {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: -0.2px;
      color: #767676;
      text-decoration-line: none;
      display: block;

      &.active {
        color: $gray-6;
        font-weight: 600;
      }  // nav-header
    }
  }
  .btn-user-menu {
    height: 40px;
    border-radius: 8px;
    border: 1px solid $white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 12px 0 6px;
    min-width: 200px;
    &.collapsed {
      background-image: none;

      .user-nickname {
        color: #2b2b2b;
      }
    }
    .user-img {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,0.6);
      margin-right: 6px;
      object-fit: cover;
    }
    .user-nickname {
      color: #2b2b2b;
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
    }
  }
}
.user-menu {
  position: absolute;
  right: 0;
  bottom: -168px;
  border-radius: 16px;
  border: 1px solid #EDEDED;
  background: #FFF;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.24);
  width: 294px;
  padding: 0 16px;
  .link-profile {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    padding-top: 16px;
  }
  .user-img {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    object-fit: cover;
  }
  .box-link {
    margin-top: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
  }
  .box-text {
    width: calc(100% - 68px);
  }
  .menu-nickname {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.6px;
    color: $gray-6;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
    line-height: 22px;
  }
  .menu-id {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.36px;
    color: #949494;
    line-height: 14px;
  }
  .icon-chevron_right {
    display: none;
  }
  .btn-link-small {
    border-radius: 8px;
    border: 1px solid #C9C9C9;
    background: #FFF;
    display: flex;
    width: 128px;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: #2B2B2B;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.56px;
    &:nth-of-type(2) {
      border-color: #16A3F7;
      color: #16A3F7;
    }
  }
  .icon-chevron_right {
    font-size: 28px;
    color: #9D9D9D;
    position: absolute;
    right: 5px;
  }
}
.wrap-nav-depth-2 {
  width: 100%;
  height: 46px;
  position: relative;
}
.nav-depth-2 {
  padding: 0 40px 0 264px;
  height: 46px;
  background: #fff;
  width: 100%;
  position: absolute;
  top: -100%;
  transition: 0.5s;

  .link-wrap {
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0;

    li {
      height: 100%;
      margin-right: 10px;
      list-style: none;
    }
    .btn-link {
      padding: 0 16px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: -0.2px;
      color: #767676;
      text-decoration-line: none;
    }
  }
  &.active {
    top: 0;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.16);
  }
}
</style>
