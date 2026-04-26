<script setup lang="ts">
import { ref } from "vue"
import { useSubscriptionStore } from "@/store/subscription"
import SubscriptionsList from "./SubscriptionsList.vue"
import Popup from "./Popup.vue"
import MobileHeader from "./MobileHeader.vue"

const store = useSubscriptionStore()

const openModal = ref(false)

function handleUnsubscribeClick() {
  openModal.value = true
}

function confirmUnsubscribe() {
  store.unsubscribeAll()
  openModal.value = false
}

function cancelUnsubscribe() {
  openModal.value = false
}
</script>

<template>
  <MobileHeader @unsubscribe-all="handleUnsubscribeClick"/>
  <main class="content">
    <div class="content__header">
      <div class="content__header-left">
        <h1 class="content__header-title">Ok, let's change your preferences</h1>
        <p class="content__header-subtitle">To unsubscribe, please uncheck the appropriate box(es).</p>
      </div>
      <button class="content__button" @click="handleUnsubscribeClick">
        Unsubscribe from all
      </button>
    </div>

    <SubscriptionsList :items="store.items" />
  </main>

  <Popup
    v-if="openModal"
    :percent="store.funPercent"
    @confirm="confirmUnsubscribe"
    @cancel="cancelUnsubscribe"
  />
</template>

<style lang="scss" scoped>
.content {
  flex: 1;
  padding: 128px;
  &__button {
    border: 1px solid $color-border;
    font-size: 16px;
    line-height: 16px;
    padding: 10px 16px;
    color: $color-primary;
    font-weight: 500;
    border-radius: $radius-xs;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 24px;
    &-title {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: $space-lg;
    }
    &-subtitle {
      color: $color-gray;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
@media (max-width: 768px) {
  .content {
    padding: 24px;
    &__button {
      display: none;
    }
  }
}
</style>