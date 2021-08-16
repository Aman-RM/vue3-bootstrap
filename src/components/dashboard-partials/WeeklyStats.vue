<template>
  <div class="row my-5 container-fluid">
    <div class="col-lg mt-lg-0 mt-3">
      <img src="assets/blog.png" class="w-100" alt="blog">
      <div class="border p-4" style="border-bottom-right-radius: 15px; border-bottom-left-radius: 15px;">
        <div>
          <ClockIcon class="text-gray-500" style="height: 16px"/>
          <label class="text-gray-500 fs-6 mt-3">22 March 2021</label>
        </div>
        <h3 class="text-dark fs-5 mt-4">Super awesome, Angular 12 is coming soon!</h3>
        <div class="d-flex mt-3 pb-4 border-bottom">
          <button type="button" class="rounded-3 btn bg-blue-700 btn-sm mt-1 px-2 text-white">Medium</button>
          <button type="button" class="btn btn-danger rounded-3 btn-sm mt-1 px-2 text-white ms-2">Low</button>
        </div>
        <div class="d-flex justify-content-between align-items-center pt-4">
          <div class="d-flex">
            <img class="rounded-circle"  src="logo/avatar1.png" alt="avatar" style="height: 36px; width: 36px"/>
            <img class="rounded-circle ms-3"  src="logo/avatar1.png" alt="avatar" style="height: 36px; width: 36px"/>
            <img class="rounded-circle ms-3"  src="assets/plus.png" alt="avatar" style="height: 36px; width: 36px"/>
          </div>
          <ChatIcon class="text-gray-500" style="height: 36px; width: 36px"/>
        </div>
      </div>
    </div>
    <div class="col-lg p-4 position-relative border mt-lg-0 mt-3" style="border-radius: 15px; margin-right: 12px">
      <div class="d-flex justify-content-between pb-3">
        <div>
          <h3 class="text-dark fs-5 m-0 fw-thin">Weekly Stats</h3>
          <label class="text-gray-500" style="font-size:12px;">Avarage Sales</label>
        </div>
        <div class="dropdown">
          <button class="btn bg-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div class="d-flex align-items-center">
              <DotsHorizontalIcon class="text-gray-500" style="height: 24px"  />
            </div>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-4">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <span class="rounded-circle p-3 bg-blue-700">
              <ShoppingCartIcon class="text-white" style="height: 24px"/> 
            </span>
            <div class="d-flex flex-column ms-2">
              <label class="fs-6 text-dark fw-bold">Top Sales</label>
              <label class="text-gray-500" style="font-size: 12px">Johnathan Doe</label>
            </div>
          </div>
          <button class="btn bg-gray-200 btn-sm" type="button" style="font-size: 12px">
            <span class="text-gray-600">+68%</span>
          </button>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-4">
          <div class="d-flex align-items-center">
            <span class="rounded-circle p-3 bg-warning">
              <StarIcon class="text-white" style="height: 24px"/> 
            </span>
            <div class="d-flex flex-column ms-2">
              <label class="fs-6 text-dark fw-bold">Best Seller</label>
              <label class="text-gray-500" style="font-size: 12px">MaterialPro Admin</label>
            </div>
          </div>
          <button class="btn bg-gray-200 btn-sm" type="button" style="font-size: 12px">
            <span class="text-gray-600">+68%</span>
          </button>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-4">
          <div class="d-flex align-items-center">
            <span class="rounded-circle p-3 bg-success">
              <ChatIcon class="text-white" style="height: 24px"/> 
            </span>
            <div class="d-flex flex-column ms-2">
              <label class="fs-6 text-dark fw-bold">Most Commented</label>
              <label class="text-gray-500" style="font-size: 12px">Ample Admin</label>
            </div>
          </div>
          <button class="btn bg-gray-200 btn-sm" type="button" style="font-size: 12px">
            <span class="text-gray-600">+68%</span>
          </button>
          <img class="bottom-0 position-absolute w-100 start-0 h-25 d-none d-lg-block" src="assets/wave.png" alt="wave">
        </div>
      </div>
    </div>
    <div class="col-lg p-4 border mt-lg-0 mt-3" style="border-radius: 15px;">
      <div class="d-flex justify-content-between pb-3">
        <div>
          <h3 class="text-dark fs-5 m-0 fw-thin">Daily Activities</h3>
          <label class="text-gray-500" style="font-size:12px;">Overview of Years</label>
        </div>
        <div class="dropdown">
          <button class="btn bg-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div class="d-flex align-items-center">
              <DotsHorizontalIcon class="text-gray-500" style="height: 24px"  />
            </div>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
      <Timeline />
    </div>
  </div>
</template>

<script>
import Timeline from './Timeline.vue'
import { 
  ClockIcon, 
  ChatIcon, 
  DotsHorizontalIcon, 
  ShoppingCartIcon, 
  StarIcon,
} from "@heroicons/vue/outline"

export default {
  components: {
    ClockIcon,
    ChatIcon,
    DotsHorizontalIcon,
    ShoppingCartIcon,
    StarIcon,
    Timeline
  },
  setup() {
    
  },
}
</script>
