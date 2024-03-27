<template>
    <div class="container">
        <h1>เกี่ยวกับผู้พัฒนาเว็บไซต์</h1>
        <img src="/image/about.svg">
    </div>
</template>

<script setup>
useHead({
    title: "เกี่ยวกับเรา",
    meta: [
        { name: "description", content: "ร้านค้า, อุปกรณ์คอมพิวเตอร์, เสื้อผ้า" }
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