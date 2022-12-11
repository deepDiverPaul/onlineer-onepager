// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            "meta": [
                {
                    "name": "viewport",
                    "content": "width=device-width, initial-scale=1"
                },
                {
                    "name": "description",
                    "content": "I am a freelance frontend engineer with 6+ years professional experience, working for startups and mid-sized companies worldwide."
                },
                {
                    "charset": "utf-8"
                }
            ],
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@huntersofbook/plausible-nuxt',
        'nuxt-directus',
        '@nuxt/image-edge',
    ],
    plausible: {
        init: {
            domain: 'onlineer.de',
            apiHost: 'https://plausible.onlineer.de',
            trackLocalhost: false
        }
    },
    directus: {
        url: 'https://directus.onlineer.de/'
    },
    nitro: {
        compressPublicAssets: true,
        minify: true,
    }
})
