import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/test', '/test2'],
        },
        sitemap: 'https://lumoralabs.io/sitemap.xml',
    }
}
