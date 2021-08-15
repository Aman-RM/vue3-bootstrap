<template>
  <div class="row m-auto">
    <div class="timeline px-4 block m-4">
        <div class="tl-item active">
            <div class="tl-dot b-primary"></div>
            <div class="tl-content">
                <label class="text-gray-400 fw-thin" style="font-size: 14px;">
                  Payment recieved from John Doe
                </label>
            </div>
            <span class="text-dark time" >09:30</span>
        </div>
        <div class="tl-item">
            <div class="tl-dot b-warning"></div>
            <div class="tl-content">
                <label class="text-dark fw-thin" style="font-size: 14px;">
                  Project Meeting
                </label>
            </div>
            <span class="text-dark time" >09:30</span>
        </div>
        <div class="tl-item">
            <div class="tl-dot b-success"></div>
            <div class="tl-content">
                <label class="text-dark fw-thin" style="font-size: 14px;">
                  New Sale recorded <span class="text-blut-300">#Mig-21</span>
                </label>
            </div>
            <span class="text-dark time" >09:30</span>
        </div>
        <div class="tl-item">
            <div class="tl-dot b-danger"></div>
            <div class="tl-content">
                <label class="text-gray-400 fw-thin" style="font-size: 14px;">
                  Payment was made of $6k to John Doe
                </label>
            </div>
            <span class="text-dark time" >09:30</span>
        </div>
        <div class="tl-item">
            <div class="tl-dot b-indigo"></div>
            <div class="tl-content">
                <label class="text-gray-400 fw-thin" style="font-size: 14px;">
                  Payment receipt recieved from Alphonso
                </label>
            </div>
            <span class="text-dark time" >09:30</span>
        </div>
        <div class="tl-item">
            <div class="tl-dot b-primary"></div>
            <div class="tl-content">
              <label class="text-dark fw-thin" style="font-size: 14px;">
                  New Sale recorded <span class="text-blut-300">#Mig-21</span>
              </label>
            </div>
            <span class="text-dark time" >09:30</span>
        </div>
        <div class="tl-item">
            <div class="tl-dot b-warning"></div>
            <div class="tl-content">
                <label class="text-dark fw-thin" style="font-size: 14px;">
                  Project Meeting
                </label>
            </div>
            <span class="text-dark time" >09:30</span>
        </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width:992px) {
    .timeline-container {
        margin: 0 auto
    }

    .page-sidenav {
        display: block !important
    }
}

.time {
  position: absolute;
  display: block;
  font-size: 12px;
  left: -55px;
}

.w-32 {
    width: 32px !important;
    height: 32px !important;
    font-size: .85em
}

.tl-item .avatar {
    z-index: 2
}

.circle {
    border-radius: 500px
}

.gd-warning {
    color: #fff;
    border: none;
    background: #f4c414 linear-gradient(45deg, #f4c414, #f45414)
}

.p-4 {
    padding: 1.5rem !important
}

.mb-4,
.my-4 {
    margin-bottom: 1.5rem !important
}

.tl-item {
    border-radius: 3px;
    position: relative;
    display: -ms-flexbox;
    display: flex
}

.tl-item>* {
    padding: 10px
}

.tl-item .avatar {
    z-index: 2
}

.tl-item:last-child .tl-dot:after {
    display: none
}

.tl-item.active .tl-dot:before {
    border-color: #448bff;
    box-shadow: 0 0 0 4px rgba(68, 139, 255, .2)
}

.tl-item:last-child .tl-dot:after {
    display: none
}

.tl-item.active .tl-dot:before {
    border-color: #448bff;
    box-shadow: 0 0 0 4px rgba(68, 139, 255, .2)
}

.tl-dot {
    position: relative;
    border-color: rgba(160, 175, 185, .15)
}

.tl-dot:after,
.tl-dot:before {
    content: '';
    position: absolute;
    border-color: inherit;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    top: 15px;
    left: 50%;
    transform: translateX(-50%)
}

.tl-dot:after {
    width: 0;
    height: auto;
    top: 25px;
    bottom: -15px;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 0;
    border-radius: 0
}

tl-item.active .tl-dot:before {
    border-color: #448bff;
    box-shadow: 0 0 0 4px rgba(68, 139, 255, .2)
}

.tl-dot {
    position: relative;
    border-color: rgba(160, 175, 185, .15)
}

.tl-dot:after,
.tl-dot:before {
    content: '';
    position: absolute;
    border-color: inherit;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    top: 15px;
    left: 50%;
    transform: translateX(-50%)
}

.tl-dot:after {
    width: 0;
    height: auto;
    top: 25px;
    bottom: -15px;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 0;
    border-radius: 0
}

.tl-content p:last-child {
    margin-bottom: 0
}

.tl-date {
    font-size: .85em;
    margin-top: 2px;
    min-width: 100px;
    max-width: 100px
}

.avatar {
    position: relative;
    line-height: 1;
    border-radius: 500px;
    white-space: nowrap;
    font-weight: 700;
    border-radius: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border-radius: 500px;
    box-shadow: 0 5px 10px 0 rgba(50, 50, 50, .15)
}

.b-warning {
    border-color: #f4c414 !important
}

.b-primary {
    border-color: #448bff !important
}

.b-danger {
    border-color: #f54394 !important
}

.b-success {
    border-color: #198754!important
}

.b-indigo {
    border-color: #6610f2 !important
}
</style>