<template>
<router-link :to="{ name: 'ProductCreate'}" class="my-5 ml-5 bg-blue-600 text-white px-3 py-2 rounded-full hover:bg-blue-900">Add Product</router-link>

    <table class="mt-5">
        <thead class="">
            <tr class="">
                <th class="border-2 px-3 py-2">#id</th>
                <th class="border-2 px-3 py-2">Title</th>
                <th class="border-2 px-3 py-2">Image</th>
                <th class="border-2 px-3 py-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id" class="">
                <td class="border-2 px-3 py-2">{{ product.id }}</td>
                <td class="border-2 px-3">{{ product.title }}</td>
                <td class="border-2 px-3 py-2"><img :src="product.image" :alt="product.title" width="90" /></td>
                <td class="border-2 w-2/12 pl-5">
                    <router-link :to="{ name: 'ProductEdit', params: { id: product.id } }" class="bg-pink-600 text-white px-3 py-2 mr-3 rounded-full hover:bg-pink-900">Edit</router-link>
                    <button @click="del(product.id)"
                        class="bg-pink-600 text-white px-3 py-2 rounded-full hover:bg-pink-900">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
    name: 'Products',
    setup() {
        const products = ref([]);

        onMounted(async () => {
            const res = await fetch('http://localhost:3000/products');
            products.value = await res.json();
        });

        const del = async (id) => {
            await fetch(`http://localhost:3000/products/${id}`, {
                method: 'DELETE'
            })

            products.value = products.value.filter(p => p.id != id)
         };

        return { products, del }
    }
}
</script>

<style>

</style>