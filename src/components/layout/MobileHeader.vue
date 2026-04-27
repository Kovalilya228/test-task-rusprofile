<script setup lang="ts">
import { useSubscriptionStore } from "@/store/subscription";
import FunBar from "@/components/ui/FunBar.vue";

const store = useSubscriptionStore();

const emit = defineEmits<{
  (e: "unsubscribe-all"): void;
}>();

function handleClick() {
  emit("unsubscribe-all");
}
</script>

<template>
  <header class="mobile-header">
    <div class="fun-container">
        <FunBar :percent="store.funPercent"/>
    </div>
    <button
        class="mobile-header__button"
        @click="handleClick"
    >
        Unsubscribe all
    </button>
  </header>
</template>

<style lang="scss" scoped>
.mobile-header {
  display: none;
  padding: 12px 16px;
  background: #fff;
  border-bottom: 1px solid #eee;
}

.mobile-header__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.mobile-header__label {
  font-size: 12px;
  letter-spacing: 0.08em;
  color: #888;
}

.mobile-header__button {
    border: 1px solid $color-border;
    font-size: 14px;
    line-height: 14px;
    padding: 8px 8px;
    color: $color-primary;
    font-weight: 500;
    border-radius: $radius-xs;
}

.mobile-header__row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mobile-header__percent {
  font-size: 14px;
  font-weight: 600;
  min-width: 40px;
}

.mobile-header__bar {
  flex: 1;
  height: 6px;
  background: #eee;
  border-radius: 3px;
  overflow: hidden;
}

.mobile-header__fill {
  height: 100%;
  background: #000;
  transition: width 0.3s ease;
}

.fun-container {
    width: 100%;
}

@media (max-width: 768px) {
  .mobile-header {
    display: flex;
    position: sticky;
    gap: 12px;
    top: 0;
    z-index: 1;
  }
}
</style>