<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  percent: number;
}>();

let isZeroPercent = computed(() => props.percent === 0)   

const emit = defineEmits<{
  (e: "confirm"): void;
  (e: "cancel"): void;
}>();
</script>

<template>
  <div class="overlay" @click.self="emit('cancel')">
    <div class="modal">

      <button class="modal__close" aria-label="close" @click="emit('cancel')">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.707 12.7071L6.70703 6.70711M0.707031 0.707108L6.70703 6.70711M6.70703 6.70711L12.707 0.707108M6.70703 6.70711L0.707031 12.7071" stroke="black" stroke-opacity="0.2" stroke-width="2"/>
        </svg>
      </button>

      <h3 class="modal__title">{{isZeroPercent ? "No fun yet!" : "Are you sure?"}}</h3>

      <p class="modal__text">{{isZeroPercent ? "You have no subscriptions on any site." : `Please confirm that you want to unsubscribe from all and lose ${percent}% fun.`}}</p>

      <div class="modal__actions">
        <button v-if="isZeroPercent" class="modal__button" @click="emit('cancel')">
          Ok
        </button>
        <button v-else class="modal__button unsubscribe" @click="emit('confirm')">
          Affirmative
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(12, 28, 96, 0.3);
  backdrop-filter: blur(3px); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.modal {
  background: $color-white;
  padding: 24px;
  border-radius: $radius-sm;
  width: 512px;
  height: 200px;
  position: relative;
  &__title {
    margin-bottom: 20px;
    color: $color-modal-dark;
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
  }
  &__close {
    cursor: pointer;
    position: absolute;
    right: 28px;
    top: 28px;
  }
  &__text {
    color: $color-gray;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
  }
  &__actions {
    display: flex;
    justify-content: end;
  }
  &__button {
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    color: $color-white;
    background-color: $color-primary;
    border-radius: $radius-xs;
    padding: 10px 16px;
  }
}
@media (max-width: 768px) {
  .modal {
    max-width: 90vw;
  }
}
</style>