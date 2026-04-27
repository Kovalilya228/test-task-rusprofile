<script setup lang="ts">
import type { Subscription } from "@/types/subscription";
import SubscriptionCard from "@/components/subscription/SubscriptionCard.vue";

defineProps<{
  items: Subscription[];
}>();
</script>

<template>
  <div class="grid">
    <SubscriptionCard
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: $space-lg;
}
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(1, minmax(220px, 1fr));
  }
}
</style>