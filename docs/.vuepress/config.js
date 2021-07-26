const { description } = require('../../package')

module.exports = {
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#title
	 */
	title: 'RN原理揭秘',
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#description
	 */
	description: description,

	/**
	 * Extra tags to be injected to the page HTML `<head>`
	 *
	 * ref：https://v1.vuepress.vuejs.org/config/#head
	 */
	head: [
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
	],

	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	themeConfig: {
		repo: '',
		editLinks: false,
		docsDir: '',
		editLinkText: '',
		lastUpdated: false,
		nav: [
			{
				text: 'Config',
				link: '/config/'
			},
			{
				text: 'VuePress',
				link: 'https://v1.vuepress.vuejs.org'
			}
		],
		"sidebar": [
			[
				"/",
				"前言"
			],
			{
				"title": "理念篇",
				"collapsable": true,
				"children": [
					{
						"title": "第一章: RN理念",
						"children": [
							[
								"/preparation/overview",
								"RN理念"
							],
							[
								"/preparation/oldConstructure",
								"老的RN架构"
							],
							[
								"/preparation/newConstructure",
								"新的RN架构"
							],
							[
								"/preparation/summary",
								"总结"
							]
						]
					},
					{
						"title": "第二章 前置知识",
						"children": [
							[
								"/preparation/ios",
								"ios"
							],
							[
								"/preparation/android",
								"android"
							]
						]
					}
				]
			},
			{
				"title": "架构篇",
				"collapsable": true,
				"children": [
					{
						"title": "第三章 RN启动流程",
						"children": [
							[
								"/process/overview",
								"概览"
							]
						]
					},
					{
						"title": "第四章 RN通信原理",
						"children": [
							[
								"/communication/overview",
								"概览"
							],
						]
					},
					{
						"title": "第五章 RN线程管理",
						"children": [
							[
								"/thread/overview",
								"概览"
							]
						]
					},
					{
						"title": "第六章 RN VS 小程序",
						"children": [
							[
								"/compare/overview",
								"概览"
							]
						]
					},
				]
			},
			{
				"title": "实现篇",
				"collapsable": true,
				"children": [
					{
						"title": "第五章 Fabric",
						"children": [
							[
								"/fabric/overview",
								"概览"
							],
						]
					},
					{
						"title": "第六章 Turbo Modules",
						"children": [
							[
								"/turbo/overview",
								"概览"
							]
						]
					},
					{
						"title": "第七章 JSCore(JavaScript VM)",
						"children": [
							[
								"/jscore/overview",
								"概览"
							]
						]
					},
					{
						"title": "第八章 Metro (JS Bundler)",
						"children": [
							[
								"/metro/overview",
								"概览"
							]
						]
					}
				]
			},
		]
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: [
		'@vuepress/plugin-back-to-top',
		'@vuepress/plugin-medium-zoom',
	]
}
