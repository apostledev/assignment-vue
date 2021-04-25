<template>
  <div class="flex flex-col w-full overflow-hidden bg-white rounded-2xl">
    <div class="flex w-full text-blue-600">
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