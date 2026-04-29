<template>
  <SiteHeader />
  <router-view />
  <SiteFooter />
  <FloatingWhatsapp />
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import FloatingWhatsapp from './components/FloatingWhatsapp.vue'
</script>