<template>
  <div class="row mt-5 g-5">
    <div class="col-4">
      <div class="card p-4" style="border-radius: 15px;">
        <div class="d-flex justify-content-between border-bottom pb-3">
          <div>
            <h3 class="text-dark fs-5 m-0">Total Sales</h3>
            <label class="text-gray-500" style="font-size:12px;">Overview of years</label>
          </div>
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
        </div>
        <div class="d-flex justify-content-between mt-3">
          <label class="text-gray-500">Sales Yearly</label>
          <label class="text-dark fs-5">8,00,000</label>
        </div>
        <div class="d-block mx-auto mt-4">
          <img class="w-auto" src="assets/piechart.png" alt="pie">
        </div>
        <ul class="d-flex w-100 justify-content-between mt-5">
          <li>2021</li>
          <li>2020</li>
          <li>2019</li>
        </ul>
      </div>
    </div>
    <div class="col-8">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
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