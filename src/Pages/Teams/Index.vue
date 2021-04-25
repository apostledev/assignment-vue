<template>
    <div class="flex flex-col items-end h-full p-4 overflow-scroll">
        <router-link class="px-4 py-2 ml-auto text-white bg-green-500 rounded hover:bg-green-600" to="/teams/create">
            Add new team
        </router-link>
        <data-table indexUrl="/team">
            <template v-slot:default="slotProps">
                <div class="px-3 py-3">{{ slotProps.item.name }}</div>
            </template>
        </data-table>   
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DataTable from "../../Components/Table.vue";

export default defineComponent({
    components: { DataTable },
})
</script>