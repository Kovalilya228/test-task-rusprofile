import type { SiteKey } from "@/constants/siteMeta";

export interface SubscriptionDTO {
    site: string;
    subscribed: boolean;
}

export interface Subscription {
    id: string;
    site: SiteKey;
    title: string;
    image: string;
    subscribed: boolean;
}