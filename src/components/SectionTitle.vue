<template>
    <div class="section-title">
      <p>{{ small }}</p>
      <h2>{{ title }}</h2>
    </div>
    </template>
    
    <script setup>
    defineProps({
      small: String,
      title: String
    })
    </script>