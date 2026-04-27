<script setup lang="ts">
defineProps<{
  percent: number;
}>();
</script>

<template>
  <div class="fun">
    <label class="fun__label">FUN YOU GET</label>
    <div class="fun__bar-container">
      <div class="fun__bar">
        <div
          class="fun__fill"
          :style="{ width: percent + '%' }"
        />
      </div>
      <div class="fun__percent">
        {{ percent }}%
      </div>
    </div>   
  </div>
</template>

<style lang="scss" scoped>
.fun {
  //margin-top: 24px;
  display: flex;
  flex-direction: column;
}

.fun__label {
  font-size: 12px;
  line-height: 18px;
  color: $color-aside-lightgray;
  cursor: default;
}

.fun__bar-container {
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
}

.fun__bar {
  height: 16px;
  background: $color-aside-dark;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  border-radius: $radius-sm;
}

.fun__fill {
  height: 100%;
  background: $color-orange;
  transition: width 0.3s ease;
}

.fun__percent {
  color: $color-orange;
  font-size: 16px;
  line-height: 16px;
  min-width: 32px;
  max-width: 32px;
}
</style>