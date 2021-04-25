<template>
    <div class="p-4 overflow-scroll">
        <data-table indexUrl="/user">
            <template v-slot="{ row }">
                <div class="px-3 py-3">{{ row.name }}</div>
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