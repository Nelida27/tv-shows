<template>
<img v-if="image" :src="image"/>
<img v-else src="../../assets/images/no-image.png"/>
</template>
<script setup>

defineProps(['image'])
</script>
