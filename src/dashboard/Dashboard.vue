<template>
  <div class="px-4">
    <div class="d-flex flex-md-row flex-column justify-content-between align-items-center">
      <div class="text-md-start text-center">  
        <h3 class="fs-6 text-gray-500">Welcome Johnathan</h3>
        <h2 class="fs-4 text-dark">Analytical Dashboard</h2>
      </div>
      <div class="d-flex align-items-center mt-2 mt-md-0">
        <div class="dropdown">
          <button class="btn bg-blue-100 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
           <span class="text-gray-600 fs-6">Today 23 March</span> 
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <div class="ms-3">  
          <button type="button" class="text-white btn btn-primary d-flex align-items-center">
            <PlusIcon class="me-2" style="width: 20px"/>
            Add New
          </button>
        </div>
      </div>
    </div>

    <SalesEarning />
    <SalesPerformance />
  </div>
</template>

<script>
import SalesEarning from '../components/dashboard-partials/Sales&Earnings.vue'
import SalesPerformance from '../components/dashboard-partials/Sales&Performance.vue'
import {
	PlusIcon 
} from '@heroicons/vue/outline'

export default {
  components: {
		PlusIcon,
    SalesEarning,
    SalesPerformance
  }
}
</script>