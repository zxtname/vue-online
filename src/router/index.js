// 导入 Vue 及 vue-router
import Vue from "vue";
import Router from "vue-router";

// 这是 Vue 中使用插件的固定模式，
// 我们之后还会与他见面。
Vue.use(Router);

// 导入这个路由下使用的组件

// @ 指向的目录是 src.
const __import__ = file => () => import(`@/pages/${file}.vue`);

const router = new Router({
	mode: "history",
	routes: [{
			path: "/", // 这是配置的路径 / 表示根目录，你可以配置/abcd 来测试效果
			name: "home", // 指定一个路由的名字可以省很多事，当然这是可选项
			// 在这里添加导入的组件
			component: __import__("home"),
			// 本质上只是一个对象，所以可以填任意数据，
			// 本实验中为了统一，额外的属性都将放到 meta 里。
			meta: {
				title: "淘课盟"
			}
		},
		{
			path: "/test",
			component: () => import('@/pages/test.vue'),
			meta: {
				title: "用来测试的页面"
			}
		},
		{
			path: '/intcourses',
			name: 'intcourses',
			component: __import__('intcourses'),
			meta: {
				title: '推荐课程-淘课盟'
			}
		},
		{
			path: '/freecourses',
			name: 'freecourses',
			component: __import__('freecourses'),
			meta: {
				title: '免费课程-淘课盟'
			}
		},
		{
			path: '/medcourses',
			name: 'medcourses',
			component: __import__('medcourses'),
			meta: {
				title: '医学专区-淘课盟'
			}
		},
		{
			path: '/nmedcourses',
			name: 'nmedcourses',
			component: __import__('nmedcourses'),
			meta: {
				title: '非医学专区-淘课盟'
			}
		},
		{
			path: '/coursesdetail',
			name: 'coursesdetail',
			component: __import__('coursesdetail'),
			meta: {
				title: '课程详情-淘课盟'
			}			
		},
		{
			path: '/pay',
			name: 'pay',
			component: __import__('pay'),
			meta: {
				title: '确认订单-淘课盟'
			}
		},
		{
			path: '/search',
			name: 'search',
			component: __import__('search'),
			meta: {
				title: '搜索-淘课盟'
			}
		},
		{
			path: '/personal',
			name: 'personal',
			component: __import__('personal'),
			meta: {
				title: '个人中心-淘课盟'
			}
		},
		{
			path: '/videoplay',
			name: 'videoplay',
			component: __import__('videoplay'),
			meta: {
				title: '视频播放-淘课盟'
			}
		},
		{
			path: '/help',
			name: 'help',
			component: __import__('help'),
			meta: {
				title: '帮助中心-淘课盟'
			}
		},
		{
			path: '/privacy',
			name: 'privacy',
			component: __import__('privacy'),
			meta: {
				title: '隐私政策-淘课盟'
			}
		},
		{
			path: '/suggestion',
			name: 'suggestion',
			component: __import__('suggestion'),
			meta: {
				title: '意见反馈-淘课盟'
			}
		},
		{
			path: '/aboutus',
			name: 'aboutus',
			component: __import__('aboutus'),
			meta: {
				title: '关于我们-淘课盟'
			}
		},
		{
			path: '/contact',
			name: 'contact',
			component: __import__('contact'),
			meta: {
				title: '联系我们-淘课盟'
			}
		},
		{
			path: '/joinus',
			name: 'joinus',
			component: __import__('joinus'),
			meta: {
				title: '加入我们-淘课盟'
			}
		},
	]
});

// 导出我们刚刚配置好的路由信息
export default router;

router.afterEach((to) => {
	// 设置当前页面的 title 为 meta 中我们设置的 title.
	document.title = to.meta.title
})
