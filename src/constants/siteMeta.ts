import site1 from '@/assets/site1.png'
import site2 from '@/assets/site2.png'
import site3 from '@/assets/site3.png'
import site4 from '@/assets/site4.png'
import site5 from '@/assets/site5.png'
import site6 from '@/assets/site6.png'

export const siteMeta = {
    trainyrbrain : {
        title: "Test your world geography skills",
        image: site1
    },
    ynquiz : {
        title: "Test your knowledge with our fun and challenging quiz game! Compete, learn, and improve with a wide range of topics.",
        image: site2
    },
    finditquiz : {
        title: "Guess the song from short clips",
        image: site3
    },
    moviequizonline : {
        title: "Identify films from iconic scenes",
        image: site4
    },
    findsuperstar : {
        title: "Challenge your historical knowledge",
        image: site5
    },
    whatcountry : {
        title: "Answer questions on various sports",
        image: site6
    },
} as const;

export type SiteKey = keyof typeof siteMeta;

export function isSiteKey(site: string): site is SiteKey {
  return site in siteMeta;
}