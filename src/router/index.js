import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: (resolve) => {
        require(['../components/Home'], resolve)
      }
    }, {
      path: '/contact',
      name: 'contact',
      component: (resolve) => {
        require(['../components/contact'], resolve)
      }
    }, {
      path: '/about',
      name: 'about',
      component: (resolve) => {
        require(['../components/about'], resolve)
      }
    }, {
      path: '/article/:id',
      name: 'article',
      component: (resolve) => {
        require(['../components/article'], resolve)
      }
    }, {
      path: '/fuel',
      name: 'fuel',
      component: (resolve) => {
        require(['../components/fuel'], resolve)
      }
    }, {
      path: '/fuelDetailed',
      name: 'fuelDetailed',
      component: (resolve) => {
        require(['../components/fuelDetailed'], resolve)
      }
    }, {
      path: '/fibre',
      name: 'fibre',
      component: (resolve) => {
        require(['../components/fibre'], resolve)
      }
    }, {
      path: '/wisdom',
      name: 'wisdom',
      component: (resolve) => {
        require(['../components/wisdom'], resolve)
      }
    }, {
      path: '/system',
      name: 'system',
      component: (resolve) => {
        require(['../components/system'], resolve)
      }
    }, {
      path: '/lab',
      name: 'lab',
      component: (resolve) => {
        require(['../components/lab'], resolve)
      }
    },
    {
      path: '/bigData',
      name: 'bigData',
      component: (resolve) => {
        require(['../components/bigData'], resolve)
      }
    },
    {
      path: '/health',
      name: 'health',
      component: (resolve) => {
        require(['../components/health'], resolve)
      }
    },
    {
      path: '/three-dimensional',
      name: 'three-dimensional',
      component: (resolve) => {
        require(['../components/three-dimensional'], resolve)
      }
    },
    {
      path: '/building',
      name: 'building',
      component: (resolve) => {
        require(['../components/building'], resolve)
      }
    },
    {
      path: '/scada',
      name: 'scada',
      component: (resolve) => {
        require(['../components/scada'], resolve)
      }
    },
  ],
  /*路由跳转在最顶端显示*/
  scrollBehavior(to,from,savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x:0, y:0}
    }
  }
})
