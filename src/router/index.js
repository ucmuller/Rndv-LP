import Vue from 'vue'
import Router from 'vue-router'
import TopPage from '@/components/TopPage'
import ReferralPage from '@/components/ReferralPage'
import Payment from '@/components/Payment'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import Tos from '@/components/Tos'

Vue.use(Router)
Vue.component('router-link', Vue.options.components.RouterLink)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TopPage',
      component: TopPage
    },
    {
      path: '/referralpage/:id',
      name: 'ReferralPage',
      component: ReferralPage,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/privacypolicy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    },
    {
      path: '/tos',
      name: 'Tos',
      component: Tos
    }
  ]
})
