<template>
    <div>
        <div style="display: flex; justify-content: space-around;">
            <div>
                <RouterLink to="/create"><button class="btn-create" type="button">Create Product</button></RouterLink>
                <input class="search" type="text" value="" placeholder="find product..." v-model="searchData">
                <button @click="clearSearch()" class="btn-clear" type="button">Clear</button>
            </div>
            <div style="display: flex; margin-right: -165px;">
                <i style="margin-top: 30px;" class="fa-solid fa-arrow-up" @click="sort('asc')"></i>
                <i style="margin-top: 30px;" class="fa-solid fa-arrow-down" @click="sort('desc')"></i>
            </div>
            <select v-model="sortData" name="category" class="option">
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="qty">Qty</option>
            </select>
        </div>
        <div class="list-product" style="margin-left: 65px;">
            <div v-for="product in products">
                <div class="box-product">
                    <img style="padding: 40px;" src="" alt="gambar">
                    <p>Rp.{{ product.price }}</p>
                    <p> {{ product.name }}</p>
                    <p>Qty:{{ product.qty }}</p>
                </div>
                <div style="display: flex;">
                    <button @click="showAlert(product.id)" type="button" style="height: 30px; width: 76px;"><i
                            class="fa-solid fa-trash-can box-trash"></i></button>
                    <RouterLink :to="'/update/' + product.id"><button type="button" style="height: 30px; width: 76px;"><i
                                class="fa-solid fa-pen box-pen"></i></button></RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import api from '@/lib/api';
import { onMounted, ref, watch } from 'vue';

let timeOut = null; 
const searchData = ref()
const sortData = ref('')
const products = ref([])
const getProduct = (async (sort = "", key = "", orderBy = "") => {
    var dataProduct = await api.get(`/product?sort=${sort}&key=${key}&orderBy=${orderBy}`);
    products.value = dataProduct.data.product.data

})
const search = (async () => {
    getProduct("", searchData.value);
})
const sort = (async (direction) => {
    getProduct(direction, "", sortData.value);
})

watch(searchData, () => {

    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
        search()
    }, 1000);
})

onMounted(() => {
    getProduct()
})
const deleteProduct = (async (id) => {
    await api.delete(`/delete-product/${id}`)
    alert('Product berhasil dihapus')


})
const showAlert = (id) => {
  const result = confirm('Are you sure want to delete this product?')
  if (result) {
    deleteProduct(id)
  }
}
const clearSearch = (async()=>{
    clearTimeout(timeOut)
    searchData.value = ''
    getProduct()
})
</script>
