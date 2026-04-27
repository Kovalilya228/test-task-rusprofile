<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue"
import { useSubscriptionStore } from "@/store/subscription"
import SubscriptionsList from "@/components/subscription/SubscriptionsList.vue"
import MobileHeader from "@/components/layout/MobileHeader.vue"
import Spinner from "@/components/ui/Spinner.vue"

const store = useSubscriptionStore()

const openModal = ref(false)

const Popup = defineAsyncComponent({
  loader: () => import("@/components/popup/Popup.vue"),
  loadingComponent: Spinner,
  delay: 200,
  timeout: 3000,
})

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
  margin-left: 320px;
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

@media (min-width: 768px) and (max-width: 850px) {
  .content {
    padding-inline: 48px;
  }
  .grid {
    grid-template-columns: repeat(1, minmax(220px, 1fr));
  }
}

@media (min-width: 851px) and (max-width: 1100px) {
  .content {
    padding-inline: 48px;
  }
  .grid {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }
}

@media (min-width: 1101px) and (max-width: 1430px) {
  .content {
    padding-inline: 48px;
  }
  .grid {
    grid-template-columns: repeat(3, minmax(220px, 1fr));
  }
}

@media (max-width: 768px) {
  .content {
    margin-left: 0;
    padding: 24px;
    &__button {
      display: none;
    }
  }
}
</style>