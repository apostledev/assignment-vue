<template>
    <data-table indexUrl="/user">

    </data-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DataTable from "./../Components/Table/Table.vue";

export default defineComponent({
    components: {DataTable}
})
</script>