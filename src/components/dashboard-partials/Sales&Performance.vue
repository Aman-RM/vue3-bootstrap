<template>
  <div class="row mt-5 g-5">
    <div class="col-4">
      <div class="card p-4" style="border-radius: 15px;">
        <div class="d-flex justify-content-between border-bottom pb-3">
          <div>
            <h3 class="text-dark fs-5 m-0 fw-thin">Total Sales</h3>
            <label class="text-gray-500" style="font-size:12px;">Overview of years</label>
          </div>
          <div class="dropdown">
            <button class="btn bg-blue-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="d-flex align-items-center">
                <span class="text-gray-600 fs-6">Today 23 March</span> 
                <ChevronDownIcon class="text-gray-600 ms-2" style="height: 16px"  />
              </div>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <label class="text-gray-500">Sales Yearly</label>
          <label class="text-dark fs-5">8,00,000</label>
        </div>
        <div class="d-block mx-auto mt-4">
          <img class="w-auto" src="assets/piechart.png" alt="pie">
        </div>
        <ul class="d-flex w-100 justify-content-between mt-5">
          <li class="text-primary"><span class="text-gray-600">2021</span></li>
          <li class="text-blue-600"><span class="text-gray-600">2020</span></li>
          <li class="text-warning"><span class="text-gray-600">2019</span></li>
        </ul>
      </div>
    </div>
    <div class="col-8">
      <table class="table">
        <thead>
          <tr>
            <th class="text-gray-400" style="font-weight: 300" scope="col">Assigned</th>
            <th class="text-gray-400" style="font-weight: 300" scope="col">Name</th>
            <th class="text-gray-400" style="font-weight: 300" scope="col">Priority</th>
            <th class="text-gray-400" style="font-weight: 300" scope="col">Budget</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="d-flex" scope="row">
              <img src="logo/avatar1.png" alt="avatar" style="height: 36px; width: 36px"/>
              <div class="d-flex flex-column">
                <label class="text-dark" style="font-size: 14px;">Sunil Joshi</label>
                <label class="text-gray-500" style="font-size: 12px; font-weight: 300;">
                  Web Designer
                </label>
              </div>
            </th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import {
  ChevronDownIcon
} from '@heroicons/vue/outline'

export default {
  components: {
    ChevronDownIcon
  }
}
</script>