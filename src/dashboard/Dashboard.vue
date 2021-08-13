<template>
  <div class="px-4 bg-gray-100">
    <div class="d-flex flex-md-row flex-column justify-content-between align-items-center">
      <div class="text-md-start text-center">  
        <h3 class="fs-6 text-secondary">Welcome Johnathan</h3>
        <h2 class="fs-4 text-dark">Analytical Dashboard</h2>
      </div>
      <div class="d-flex align-items-center mt-2 mt-md-0">
        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Today 23 March
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
  </div>
</template>

<script>
import SalesEarning from '../components/dashboard-partials/Sales&Earnings.vue'
import {
	PlusIcon 
} from '@heroicons/vue/outline'

export default {
  components: {
		PlusIcon,
    SalesEarning
  }
}
</script>