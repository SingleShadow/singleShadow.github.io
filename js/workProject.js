/*Vue.component('navChild', {                   //子组件
	template: `<a href="#">{{ todo.title }}</a>`,
	props: ['todo']	
});
Vue.component('nav-component', {               //父组件
	template: `
			<header>
			<nav>
				<navChild v-for="item in pagesTitle" v-bind:todo="item"></navChild>
			</nav>
		</header>
		`,
	components: {
		'navChild': navChild
	},
	data: function(){
  	return {
			pagesTitle: [
				{title: '主页'},
				{title: '项目'},
				{title: '爱好'},
				{title: '个人'}
			]
		}
  }
});*/
var navList=Vue.extend({   //定义一个子组件，组件内的li标签想v-for出来
  template:'<a href="#">{{ todo.title }}</a>',
  props:['todo']
});

var navigation=Vue.extend({  //定义父组件，在父组件内部注册子组件
  template:`
		<header>
			<nav>
				<nav-list v-for="item in pagesTitle" v-bind:todo="item"></nav-list>
			</nav>
		</header>
		`,
  components:{
    'nav-list':navList
  },
  data: function(){
  	return {
			pagesTitle: [
				{title: '主页'},
				{title: '项目'},
				{title: '爱好'},
				{title: '个人'}
			]
		}
  }
});
var vm = new Vue({
	el: '#mainPage',
	data: {
		pagesTitle: [
			{title: '主页'},
			{title: '项目'},
			{title: '爱好'},
			{title: '个人'}
		]
	},
	components: {
		'navigation': navigation
		// 'nav-component': nav-component
	}
})