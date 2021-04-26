<template>
    <div class="flex flex-col items-end h-full p-4 overflow-scroll">
        <router-link class="px-4 py-2 mb-3 ml-auto text-white bg-green-500 rounded hover:bg-green-600" to="/teams/create">
            Add new team
        </router-link>
        <data-table indexUrl="/team">
            <template v-slot="{ row, deleteRow }">
                <div class="flex items-center justify-between px-3 py-3 cursor-pointer group hover:bg-gray-50">
                    <span>{{ row.name }}</span>

                    <div class="hidden group-hover:flex">
                        <router-link :to="`/teams/${row.id}`" class="flex items-center justify-center w-6 h-6 mr-3 text-pink-400 bg-pink-100 rounded-full cursor-pointer hover:text-pink-500 hover:bg-pink-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </router-link>
                        <div @click="deleteRow(row.id)" class="flex items-center justify-center w-6 h-6 text-red-400 bg-red-100 rounded-full cursor-pointer hover:text-red-500 hover:bg-red-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                    </div>
                    
                </div>
            </template>
        </data-table>   
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DataTable from "../../Components/Table.vue";

export default defineComponent({
    components: { DataTable }
})
</script>