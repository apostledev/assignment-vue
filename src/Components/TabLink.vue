<template>
    <router-link 
        :to="path"
        v-slot="{ href, navigate, isActive }"
        custom>
        <a 
            :href="href" @click="navigate"
            class="w-full text-center bg-[#e9effc] p-4 text-xl hover:bg-[#e0e7f6] cursor-pointer"
            :class="{'font-semibold border-b-2 border-[#057fe9]': isActive}">
            <slot></slot>
        </a>
    </router-link>

    <!-- 
        <div class="w-full text-center bg-[#e9effc] p-4 text-xl hover:bg-[#e0e7f6] cursor-pointer font-semibold border-b-2 border-[#057fe9]">Gebruikers</div>
     -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TabLink',
  props: ['path'],
  setup(){

  }
})
</script>