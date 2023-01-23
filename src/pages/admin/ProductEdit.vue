<template>
    <form @submit.prevent="submit">
        <div class="flex flex-col items-center justify-center">
            <label class="mb-5">Title</label>
            <input class=" border-2 border-current" type="text" name="title" v-model="title" />
            <label class="mb-5">Image</label>
            <input class="border-2 border-current" type="text" name="image" v-model="image" />
            <button class="my-5 ml-5 bg-blue-600 text-white px-3 py-2 rounded-full hover:bg-blue-900">Save</button>
        </div>
    </form>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
    name: "ProductCreate",
    props: ['id'],
    setup() {
        const title = ref('');
        const image = ref('');
        const router = useRouter();
        const route = useRoute();

        onMounted(async () => {
            const res = await fetch(`http://localhost:3000/products/${route.params.id}`);
            const product = await res.json();
            title.value = product.title;
            image.value = product.image;
        });

        const submit = async () => {
            await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    title: title.value,
                    image: image.value
                })
            });

            await router.push('/admin/products');
        }

        return { title, image, submit }
    }

}
</script>

<style>

</style>