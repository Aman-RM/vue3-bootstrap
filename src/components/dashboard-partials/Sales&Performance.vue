<template>
  <div class="row mt-5 container-fluid">
    <div class="col-12 col-lg-4">
      <div class="card p-4" style="border-radius: 15px;">
        <div class="d-flex justify-content-between border-bottom pb-3">
          <div>
            <h3 class="text-dark fs-5 m-0 fw-thin">Total Sales</h3>
            <label class="text-gray-500" style="font-size:12px;">Overview of years</label>
          </div>
          <div class="dropdown">
            <button class="btn bg-blue-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="d-flex align-items-center">
                <span class="text-gray-600 fs-6">March 2021</span> 
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
    <div class="card col-12 col-lg-8 p-4 mt-lg-0 mt-4" style="border-radius: 15px;">
      <div class="d-flex justify-content-between mb-3">
        <div>
          <h3 class="text-dark fs-5 m-0 fw-thin">Products Performance</h3>
          <label class="text-gray-500" style="font-size:12px;">Ample Admin vs Pixel Admin</label>
        </div>
        <div class="dropdown">
          <button class="btn bg-blue-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div class="d-flex align-items-center">
              <span class="text-gray-600 fs-6">March 2021</span> 
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
      <table class="table m-0">
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
            <th class="d-flex p-3" scope="row">
              <img class="rounded-circle"  src="logo/avatar1.png" alt="avatar" style="height: 36px; width: 36px"/>
              <div class="d-flex flex-column ms-2">
                <label class="text-dark" style="font-size: 14px;">Sunil Joshi</label>
                <label class="text-gray-500" style="font-size: 12px; font-weight: 300;">
                  Web Designer
                </label>
              </div>
            </th>
            <td class="text-gray-500 pt-0 pt-lg-4 p-3" style="font-size: 14px;">Elite Admin</td>
            <td class="p-3"><button type="button" class="btn btn-primary btn-sm mt-0 mt-lg-1">Low</button></td>
            <td class="text-dark fs-6 pt-lg-4 p-3">$3.9k</td>
          </tr>
          <tr>
            <th class="d-flex p-3" scope="row">
              <img class="rounded-circle"  src="logo/avatar1.png" alt="avatar" style="height: 36px; width: 36px"/>
              <div class="d-flex flex-column ms-2">
                <label class="text-dark" style="font-size: 14px;">Andrew McDownland</label>
                <label class="text-gray-500" style="font-size: 12px; font-weight: 300;">
                  Project Manager
                </label>
              </div>
            </th>
            <td class="text-gray-500 pt-0 pt-lg-4 p-3" style="font-size: 14px;">Real Homes WP Theme</td>
            <td class="p-3"><button type="button" class="btn bg-blue-700 btn-sm mt-0 mt-lg-1 text-white">Medium</button></td>
            <td class="text-dark fs-6 pt-0 pt-lg-4 p-3">$24.5k</td>
          </tr>
          <tr>
            <th class="d-flex p-3" scope="row">
              <img class="rounded-circle"  src="logo/avatar1.png" alt="avatar" style="height: 36px; width: 36px"/>
              <div class="d-flex flex-column ms-2">
                <label class="text-dark" style="font-size: 14px;">Christopher Jamil</label>
                <label class="text-gray-500" style="font-size: 12px; font-weight: 300;">
                  SEO Manager
                </label>
              </div>
            </th>
            <td class="text-gray-500 pt-0 pt-lg-4 p-3" style="font-size: 14px;">Medical Pro WP Theme</td>
            <td class="p-3"><button type="button" class="btn btn-warning btn-sm mt-0 mt-lg-1 text-white">High</button></td>
            <td class="text-dark fs-6 pt-0 pt-lg-4 p-3">$12.8k</td>
          </tr>
          <tr>
            <th class="d-flex p-3" scope="row">
              <img class="rounded-circle"  src="logo/avatar1.png" alt="avatar" style="height: 36px; width: 36px"/>
              <div class="d-flex flex-column ms-2">
                <label class="text-dark" style="font-size: 14px;">Nirav Joshi</label>
                <label class="text-gray-500" style="font-size: 12px; font-weight: 300;">
                  FrontEnd Engineer
                </label>
              </div>
            </th>
            <td class="text-gray-500 pt-0 pt-lg-4 p-3" style="font-size: 14px;">Hosting Press HTML</td>
            <td class="p-3"><button type="button" class="btn btn-danger btn-sm mt-0 mt-lg-1 text-white">Low</button></td>
            <td class="text-dark fs-6 pt-0 pt-lg-4 p-3">$2.8k</td>
          </tr>
          <tr>
            <th class="d-flex p-3" scope="row">
              <img class="rounded-circle"  src="logo/avatar1.png" alt="avatar" style="height: 36px; width: 36px"/>
              <div class="d-flex flex-column ms-2">
                <label class="text-dark" style="font-size: 14px;">Michel Doe</label>
                <label class="text-gray-500" style="font-size: 12px; font-weight: 300;">
                  Content Writer
                </label>
              </div>
            </th>
            <td class="text-gray-500 pt-0 pt-lg-4 p-3" style="font-size: 14px;">Helping Hands WP Theme</td>
            <td class="p-3"><button type="button" class="btn btn-success btn-sm mt-0 mt-lg-1 text-white">Low</button></td>
            <td class="text-dark fs-6 pt-0 pt-lg-4 p-3">$9.8k</td>
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