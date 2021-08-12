<template>
    <div class="d-flex">
        <sidebar />
        <div>
            <router-view />
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/SiteSidebar.vue'

export default {
    components: {
        Sidebar
    }
}

</script>
