<template>
  <transition name="modal-fade" appear>
    <div
      v-if="modalStore.modalState !== null"
      class="modal"
      @click="modalStore.closeModal()"
    >
      <ModalsCreateModal 
        v-if="modalStore.modalState === 'create'"
        @close="modalStore.closeModal()"
      />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/modal";

const modalStore = useModalStore();
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
