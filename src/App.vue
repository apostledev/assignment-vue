<template>
  <div class="flex flex-col w-full h-full p-4 overflow-hidden bg-white rounded-2xl">
    <div class="flex pb-8 -m-4 text-blue-600">
      <tab-link path="/">Home</tab-link>
      <tab-link path="/users">Gebruikers</tab-link>
      <tab-link path="/teams">Teams</tab-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TabLink from "./Components/TabLink.vue";

export default defineComponent({
  components: { TabLink }
})
</script>