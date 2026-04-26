<script setup lang="ts">
import { onMounted } from 'vue'
import { useSubscriptionStore } from './store/subscription'
import data from '../public/subscribe.json'
import Sidebar from './components/Sidebar.vue'
import MainContent from './components/MainContent.vue'

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
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }
}
</style>