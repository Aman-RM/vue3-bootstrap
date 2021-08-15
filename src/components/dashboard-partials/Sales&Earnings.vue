<template>
    <div class="row w-100 mt-5 container">
      <div class="col-lg">
        <div class="report">
            <p class="pt-4 fs-5 text-primary fw-thin ps-4">Hey, John <br> download latest report</p>
            <div class="ps-4">
              <button type="button" class="text-white btn btn-primary">Download</button>
            </div>
        </div>
        <div class="container mt-4 p-0">
          <div class="row g-2">          
            <div class="p-4 card bg-primary col me-4" style="border-radius: 15px;">
              <div class="mb-3 d-flex justify-content-between">  
                <label class="text-white" style="font-size: 18px;">Earnings</label>
                <img src="assets/dollar.png" alt="dollar" style="height: 50px">
              </div>
              <label class="text-white fw-bold fs-4">$ 45620</label>
              <span class="text-gray-500 fw-thin fs-6">Monthly Revenue</span>
            </div>
            <div class="p-4 bg-white card col position-relative" style="border-radius: 15px;">
              <div class="d-flex justify-content-between mb-3">
                <div class="d-flex flex-column">
                  <label class="text-secondary" style="font-size: 18px;">Monthly Sales</label>
                  <label class="text-dark fw-bold fs-4">45620</label>
                </div> 
                <img src="assets/sales.png" alt="dollar" style="height: 50px">
              </div>
              <img class="bottom-0 position-absolute w-100 start-0 h-50" src="assets/wave.png" alt="wave">
            </div>
          </div>
        </div>
      </div>
      <div class="card p-4 col-lg mt-lg-0 mt-4" style="border-radius: 15px;">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <p class="fs-5 text-black fw-thin mb-0">Sales Overview</p>
            <label class="text-gray-500" style="font-size: 12px">Ample Admin vs Pixel Admin</label>
          </div>
          <ul class="d-flex">
            <li class="text-primary me-5">Ample</li>
            <li class="text-blue-100">Pixel Admin</li>
          </ul>
        </div>
        <img class="mt-4" src="assets/chart.png" alt="chart" style="height: 280px;">
      </div>
    </div>
</template>

<style scoped>
.report {
  background-image: url('/assets/rounded-rect.png');
  height: 210px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>