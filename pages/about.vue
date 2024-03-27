<template>
    <div class="container">
        <h1>About us</h1>
        <img src="/image/about.svg">
    </div>
</template>

<script setup>
useHead({
    title: "Codashop | About",
    meta: [
        { name: "description", content: "Codashop, computer devices, clothes" }
    ]
})
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img{
    width: 400px;
    height: 400px;
}
</style>