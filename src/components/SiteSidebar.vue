<template>
  <div class="border-end col-auto col-md-3 col-xl-2 col-xxl-2 d-flex bg-white flex-column align-items-center align-items-md-start pt-2 text-white min-vh-100">
    <!-- DESKTOP MENU -->
      <img src="logo/logo.png" class="mb-5 mt-4 ps-5"/>
      <h3 class="text-uppercase d-none d-md-flex align-items-center text-gray-400 fs-6">
        <div class="bg-gray-400 me-3 ms-2" style="height: 1px; width: 25px;">&nbsp;</div>
        Personal
      </h3>
      <ul v-for="menu in menus1" :key="menu" class="ps-5 nav nav-pills flex-column mb-md-5 mb-0 align-items-center align-items-md-start" id="menu">
        <li class="nav-item">
					<router-link
						v-for="item in menu"
						:key="item"
						:to="item.route"
						class="nav-link text-gray-700 d-flex align-items-center px-0"
					>
					<component
						:is="item.icon"
						class="me-3"
						style="height: 20px"
					/>
          <span class="d-none d-md-inline fs-6"> {{ item.title }} </span>
					</router-link>
        </li>
      </ul>

      <h3 class="text-uppercase d-none d-md-flex align-items-center text-gray-400 fs-6">
        <div class="bg-gray-400 me-3 ms-2" style="height: 1px; width: 25px;">&nbsp;</div>
        professional
      </h3>
      <ul v-for="menu in menus2" :key="menu" class="ps-5 nav nav-pills flex-column mb-md-5 mb-0 align-items-center align-items-md-start" id="menu">
        <li class="nav-item">
					<router-link
						v-for="item in menu"
						:key="item"
						:to="item.route"
						class="nav-link text-gray-700 d-flex align-items-center px-0"
					>
					<component
						:is="item.icon"
						class="me-3"
						style="height: 20px"
					/>
          <span class="d-none d-md-inline fs-6"> {{ item.title }} </span>
					</router-link>
        </li>
      </ul>

      <div class="sidebar-footer-bg mb-5 ms-2 d-none d-md-block">
        <p class="fs-6 text-dark fw-bold ps-4 pt-4">Upgrade to <br> Premium</p>
        <div class="ps-4">
          <button type="button" class="btn btn-primary text-white">Upgrade</button>
        </div>
      </div>
    </div>
</template>

<script>
import {
	ChartPieIcon,
	ViewGridIcon,
	InboxIcon,
  HomeIcon,
  UserIcon,
  StarIcon,
  DocumentIcon,
  DocumentTextIcon,
  CreditCardIcon,
  CalculatorIcon,
  ChartBarIcon,
  CogIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/vue/outline'

import { useRoute } from 'vue-router'

export default {
  components: {
		ChartPieIcon,
		ViewGridIcon,
		InboxIcon,
    HomeIcon,
    UserIcon,
    StarIcon,
    DocumentIcon,
    DocumentTextIcon,
    CreditCardIcon,
    CalculatorIcon,
    ChartBarIcon,
    CogIcon,
    UsersIcon,
    XIcon,
  },

  emits: ['toggle'],

  setup() {
    const menus1 = [
      [
        {
          title: 'Dashboard',
          icon: 'chart-pie-icon',
          route: '#',
          name: 'dashboard',
        },
        {
          title: 'Inbox',
          icon: 'inbox-icon',
          route: '#',
          name: 'customers',
        },
        {
          title: 'UI Elements',
          icon: 'star-icon',
          route: '#',
          name: 'items',
        },
      ],
    ]

    const menus2 = [
      [
        {
          title: 'Forms',
          icon: 'document-icon',
          route: '#',
          name: 'estimates',
        },
        {
          title: 'Tables',
          icon: 'document-text-icon',
          route: '#',
          name: 'invoices',
        },
        {
          title: 'Charts',
          icon: 'chart-bar-icon',
          route: '#',
          name: 'payments',
        },
        {
          title: 'Widgets',
          icon: 'view-grid-icon',
          route: '#',
          name: 'expenses',
        },
				{
          title: 'Icons',
          icon: 'calculator-icon',
          route: '#',
          name: 'expenses',
        },
				{
          title: 'Maps',
          icon: 'view-grid-icon',
          route: '#',
          name: 'expenses',
        },
      ],
    ]

    const route = useRoute()

    function hasActiveUrl(url) {
      return route.path.indexOf(url) > -1
    }

    return { menus1, menus2, hasActiveUrl }
  },
}
</script>

<style scoped>
.sidebar-footer-bg {
  background-image: url('/assets/sidebar-foot.png');
  height: 150px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>