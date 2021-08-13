<template>
    <div class="d-flex">
        <sidebar />
        <div class="w-100">
            <Header />
            <router-view />
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/SiteSidebar.vue'
import Header from '../components/SiteHeader.vue'


export default {
    components: {
        Sidebar,
        Header
    }
}

</script>
