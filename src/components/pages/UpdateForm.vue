<template>
    <div style="padding: 70px;">
        <h3>Update Product</h3>
        <div style="margin-top: 15px;" v-if="detailProduct">
            <form class="form-create">
                <label>Nama Product:</label>
                <input style="height: 20px;" type="text" v-model="detailProduct.name" />
                <label>Link URL Picture:</label>
                <input style="height: 20px;" type="text" />
                <label>Price:</label>
                <input style="height: 20px;" type="number" v-model="detailProduct.price" />
                <label>Qty:</label>
                <input style="height: 20px;" type="number" v-model="detailProduct.qty" />
                <label>Choice Category:</label>
                <select v-model="detailProduct.category_id" style="height: 27px;">
                    <option :selected="category.id == detailProduct.id"  v-for="category in dataCategory" :value="category.id">{{ category.category_name }}</option>
                    
                </select>
            </form>
            <button @click="updateProduct()" type="button" class="btn-save-change">Save Change</button>
        </div>
    </div>
</template>

<script setup>
import api from '@/lib/api';
import router from '@/router';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// const router = useRouter()
const route = useRoute();
const dataCategory = ref([]);
let detailProduct = ref({});
const id = route.params.id;
const getDetail = (async () => {
    const result = await api.get(`/product/${id}`);
    detailProduct = result.data.product
    console.log(detailProduct)
})
onMounted(() => {
    getDetail()
    getCategory()
})
const getCategory = (async () => {
    var result = await api.get('/category');
    dataCategory.value = result.data.category.data
    console.log(dataCategory.value)
})

const updateProduct =(async()=>{
    await api.put(`/update-product/${id}`, detailProduct);
    alert('product berhasil di update');
    router.push('/')
})
</script>