<template>
    <div 
        class="flex items-center w-full px-3 py-3 cursor-pointer select-none hover:bg-gray-100"
        :class="{ 'text-blue-500' : isActive }">
        <div 
            class="flex items-center justify-center w-4 h-4 mr-4 text-white bg-gray-200 rounded-sm"
            :class="{ 'bg-blue-500' : isActive }">
            <svg v-if="isActive" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
        </div>
        {{ user.name }}
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        user: {
            type: Object,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true
        }
    },
})
</script>