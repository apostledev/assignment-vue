<template>
    <div class="p-4 overflow-scroll">
        <data-table indexUrl="/user">
            <template v-slot:default="slotProps">
                <div class="px-3 py-3">{{ slotProps.item.name }}</div>
            </template>
        </data-table>   
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DataTable from "./../Components/Table.vue";

export default defineComponent({
    components: {DataTable}
})
</script>