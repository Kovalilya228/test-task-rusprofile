import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { SubscriptionDTO, Subscription } from '@/types/subscription'
import { siteMeta, isSiteKey } from '@/constants/siteMeta'
import type { SiteKey } from '@/constants/siteMeta'
import placeholder from '@/assets/placeholder.png'

export const useSubscriptionStore = defineStore('subscription', () => {
    const items = ref<Subscription[]>([])

    const total = computed(() => items.value.length)

    const active = computed(() => items.value.filter(i => i.subscribed).length)

    const funPercent = computed(() => {
        if (!total.value) return 0
        return Math.round((active.value / total.value) * 100)
    })

    function setItems(data: SubscriptionDTO[]) {
        items.value = data
        .filter((item): item is SubscriptionDTO & {site: SiteKey} => isSiteKey(item.site))
        .map(item => {
            const meta = siteMeta[item.site]
            
            return {
            id: crypto.randomUUID(),
            site: item.site,
            title: meta?.title ?? item.site,
            image: meta?.image ?? placeholder,
            subscribed: item.subscribed,
        }})
    }

    function toggle(site: string) {
        const item = items.value.find(i => i.site === site)
        if (!item) return

        item.subscribed = !item.subscribed

        logState()
    }

    function unsubscribeAll() {
        items.value.forEach(i => {
            i.subscribed = false
        })

        logState()
    }

    function logState() {
        console.log(JSON.stringify(items.value.map(i => ({
            site: i.site,
            subscribed: i.subscribed
        }))))
    }

    return {
        items,
        total,
        active,
        funPercent,
        setItems,
        toggle,
        unsubscribeAll,
    }
})