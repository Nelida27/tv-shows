<template>
  <div class="form-group d-flex align-items-center">
    <label for="selectMenu" style="width: -webkit-fill-available">{{ labelTitle }}</label>
    <select
      :value="title"
      class="form-select form-select-sm"
      id="selectMenu"
      @input="$emit('update:title', $event.target.value)"
    >
      <option v-for="(option, index) in options" :key="index">{{ option }}</option>
    </select>
  </div>
</template>
<script setup>
import { defineEmits } from 'vue'
defineProps(['options','title','labelTitle'])
defineEmits(['update:title'])

</script>

