Vue.component('nav-component', {
	template: `<a href="#">{{ todo.title }}</a>`,
	props: ['todo']	
})
var vm = new Vue({
	el: '#mainPage',
	data: {
		pagesTitle: [
			{title: '主页'},
			{title: '项目'},
			{title: '爱好'},
			{title: '个人'}
		]
	}
})