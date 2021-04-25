<template>
    <router-link 
        :to="path"
        v-slot="{ href, navigate, isActive }"
        custom>
        <a 
            :href="href" @click="navigate"
            class="w-full p-4 text-xl text-center bg-blue-100 cursor-pointer hover:bg-blue-200"
            :class="{'font-semibold border-b-2 border-[#057fe9]': isActive}">
            <slot></slot>
        </a>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    path: {
      type: String,
      required: true
    }
  }
})
</script>