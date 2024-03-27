<template>
    <div>
        <h1>รายละเอียดสินค้าชิ้นที่ {{ id }}</h1>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
</script>

<style lang="scss" scoped>

</style>