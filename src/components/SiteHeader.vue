<template>
	<div class="d-flex justify-content-between" style="padding: 35px">
		<div class="d-flex align-items-center">
			<ViewListIcon class="text-secondary" style="height: 30px"/>
			<SearchIcon class="text-secondary ms-4" style="height: 25px"/>
		</div>
			<div class="d-flex">
				<div class="d-flex align-items-center">
					<ShoppingCartIcon class="text-secondary" style="height: 25px"/>
					<ChatAltIcon class="text-secondary ms-4" style="height: 25px"/>
					<BellIcon class="text-secondary ms-4" style="height: 25px"/>
				</div>
				<div class="d-flex align-items-center ms-4">
					<img src="logo/avatar.png" alt="avatar" style="height: 25px">
					<span class="fs-6 ms-3">Hi, <strong>Johnathan</strong> </span>
					<ChevronDownIcon class="text-secondary ms-2" style="height: 15px"/>
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
