<template>
    <div class="sidebar bg-gray-200">
        <ul class="side-menu flex flex-col items-center">
            <li class="py-3 px-3 text-base border-4 border-b-red-300"><router-link
                    :to="{ name: 'Products' }">Products</router-link></li>
            <li class="py-3 px-3 text-base border-4 border-b-red-300"><router-link :to="{ name: 'ProductCreate' }">Add
                    Product</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style>

</style>