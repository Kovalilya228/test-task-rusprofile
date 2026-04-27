<script setup lang="ts">
import { useSubscriptionStore } from "@/store/subscription"
import type { Subscription } from "@/types/subscription"

const props = defineProps<{
  item: Subscription
}>()

const store = useSubscriptionStore()

function handleClick() {
  store.toggle(props.item.site)
}
</script>

<template>
  <div class="card">
    <img class="card__image" :src="item.image" :alt="`${item.site} logo`" loading="lazy">
    <p class="card__title">{{ item.title }}</p>

    <button
      class="card__btn"
      :class="{ active: item.subscribed }"
      @click="handleClick"
    >
    <svg 
      class="card__btn-icon" 
      :class="{visible: item.subscribed}" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.25 11.625C23.25 18.0469 18 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.25 5.20312 0 11.625 0C18 0 23.25 5.25 23.25 11.625ZM10.2656 17.8125L18.8906 9.1875C19.1719 8.90625 19.1719 8.39062 18.8906 8.10938L17.8125 7.07812C17.5312 6.75 17.0625 6.75 16.7812 7.07812L9.75 14.1094L6.42188 10.8281C6.14062 10.5 5.67188 10.5 5.39062 10.8281L4.3125 11.8594C4.03125 12.1406 4.03125 12.6562 4.3125 12.9375L9.1875 17.8125C9.46875 18.0938 9.98438 18.0938 10.2656 17.8125Z" fill="#346DF1"/>
    </svg>
      {{ item.subscribed ? "Subscribed" : "Subscribe" }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: $space-lg;
  background-color: $color-white;
  border-radius: $radius-desktop-card;
  display: flex;
  flex-direction: column;
  gap: $space-md;
  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 16px;
    line-height: 24px;
    max-height: calc(24px * 2);
    min-height: calc(24px * 2);
    overflow: hidden;
  }
}

.card__btn {
  padding: 4px 12px;
  border: none;
  cursor: pointer;
  background: $color-primary;
  color: $color-white;
  border-radius: $radius-desktop-card-btn;
  width: fit-content;
  display: flex;
  gap: $space-sm;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  
  &-icon {
    display: none;
    &.visible {
      display: block;
    }
  }
  &.active {
    background: $color-secondary;
    color: $color-primary;
  }
}
</style>