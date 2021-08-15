<template>
	<div class="d-flex justify-content-between" style="padding: 35px">
		<div class="d-flex align-items-center">
			<ViewListIcon class="text-gray-500" style="height: 30px"/>
			<SearchIcon class="text-gray-500 ms-4" style="height: 25px"/>
		</div>
			<div class="d-flex">
				<div class="d-md-flex align-items-center d-none">
					<ShoppingCartIcon class="text-gray-500" style="height: 25px"/>
					<div class="position-relative">
						<span 
              class="bg-primary rounded-circle position-absolute" 
              style="height: 5px; width: 5px; padding: 1px; right: -7px;"
						>
							&nbsp;
						</span>
						<ChatAltIcon class="text-gray-500 ms-4" style="height: 25px"/>
					</div>
					<div class="position-relative">
            <span 
              class="bg-warning rounded-circle position-absolute" 
              style="height: 5px; width: 5px; padding: 1px; right: -2px;"
						>
							&nbsp;
						</span>
						<BellIcon class="text-gray-500 ms-4" style="height: 25px"/>
					</div>
				</div>
				<div class="d-flex align-items-center ms-4">
					<img src="logo/avatar.png" alt="avatar" style="height: 25px">
					<span class="fs-6 ms-3 d-none d-md-block">Hi, <strong>Johnathan</strong> </span>
					<ChevronDownIcon class="text-gray-500 ms-2 d-none d-md-block" style="height: 15px"/>
				</div>
			</div>
    </div>
</template>

<script>
import {
	ViewListIcon,
	SearchIcon,
	ShoppingCartIcon,
	ChatAltIcon,
	BellIcon,
	ChevronDownIcon 
} from '@heroicons/vue/outline'

export default {
  components: {
		ViewListIcon,
		SearchIcon,
		ShoppingCartIcon,
		ChatAltIcon,
		BellIcon,
		ChevronDownIcon 
  }
}
</script>
