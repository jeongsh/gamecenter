<template>
  <component
    :is="getComponentType(content.type)"
    :content="content"
  >
  </component>
</template>

<script setup lang="ts">
  import QuizContentTypeText from './QuizContentTypeText.vue'
  import QuizContentTypeImage from './QuizContentTypeImage.vue'
  import QuizContentTypeVideo from './QuizContentTypeVideo.vue'
  import QuizContentTypeAudio from './QuizContentTypeAudio.vue'

  const { content } = defineProps(['content'])


  const typeToString: any = {
    'text': QuizContentTypeText,
    'image': QuizContentTypeImage,
    'embedVideo': QuizContentTypeVideo,
    'audio': QuizContentTypeAudio
  }

  const getComponentType: any = (type: string) => {
    return typeToString[type] || '유효하지 않은 타입'
  }
</script>