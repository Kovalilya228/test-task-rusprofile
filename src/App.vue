<script setup lang="ts">
import { onMounted } from 'vue'
import { useSubscriptionStore } from './store/subscription'
import data from '@/assets/subscribe.json'
import Sidebar from '@/components/layout/Sidebar.vue'
import MainContent from '@/components/layout/MainContent.vue'

const store = useSubscriptionStore()

onMounted(() => {
  store.setItems(data)
})
</script>

<template>
  <div class="layout">
    <Sidebar />
    <MainContent />
  </div>  
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  min-height: 100vh;
  overflow: auto;
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
    overflow: unset;
  }
}
</style>