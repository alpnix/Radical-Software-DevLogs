// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Radical Software DevLogs',
			logo: {
				src: './src/assets/houston.webp',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/alpnix/Radical-Software-DevLogs' },
			],
			customCss: ['./src/styles/custom.css'],
			editLink: {
				baseUrl: 'https://github.com/alpnix/Radical-Software-DevLogs/edit/master/2-1/',
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'DevLogs',
					items: [
						{ label: 'DevLog 1-3', slug: 'devlog-1-3' },
						{ label: 'DevLog 2-1', slug: 'devlog-2-1' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
