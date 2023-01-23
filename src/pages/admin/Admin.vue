<template>
    <Nav />
    <div class="wrapper flex w-100">
        <div class="left-content w-3/12">
            <Sidebar />
        </div>
        <div class="right-content pt-5 flex items-center justify-center mx-auto">
            <RouterView />
        </div>
    </div>
</template>

<script>
import Nav from '../../components/Nav.vue'
import Sidebar from '../../components/Sidebar.vue'

export default {
    name: 'Admin',
    components: {
        Nav, Sidebar
    }
}
</script>

<style>

</style>