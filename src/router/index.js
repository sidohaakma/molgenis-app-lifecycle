import Vue from 'vue'
import Router from 'vue-router'
import LifeCycleCatalogue from '@/components/LifeCycleCatalogue'
import HarmonizationComparison from '@/components/harmonization/HarmonizationComparison'

Vue.use(Router)
const {baseUrl} = window.__INITIAL_STATE__ || {}
export default new Router({
  mode: 'history',
  base: baseUrl,
  routes: [
    {
      path: '/',
      component: LifeCycleCatalogue
    },
    {
      props: true,
      path: '/:variable',
      component: HarmonizationComparison,
      children: [
        {
          path: ':harmonization',
          name: 'harmonization',
          props: true,
          component: HarmonizationComparison
        }
      ]
    },
    {
      path: '/',
      redirect: '/lifecycle'
    }
  ]
})
