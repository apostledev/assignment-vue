<template>
    <div class="flex flex-col w-full h-full space-y-5">
        <div class="flex-grow flex-shrink h-0 overflow-scroll">

            <div v-if="userPage">
                <div 
                    v-for="(user, i) in userPage.data" 
                    :key="user.id"
                    class="px-3 py-3 "
                    :class="{'border-b border-gray-200' : i < userPage.data.length - 1}">
                    <span>{{user.name}}</span>
                </div>
            </div>
        </div>

        <div class="flex justify-center space-x-1 text-sm" v-if="userPage">
            <div 
                v-for="(link, i) in userPage.links" :key="i"
                class="px-2 py-1 text-center text-gray-600 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                :class="{'bg-blue-200 text-blue-500 cursor-default hover:bg-blue-200' : link.active}"
                @click="paginateTo(link.url)"
                v-html="link.label">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import useJsonFetch from "./../Fragments/useJsonFetch";

export default defineComponent({
  setup(){
        const { jsonFetch } = useJsonFetch();

        let userPage = ref(null);
        let currentPage = ref(1);

        const loadUsers = async () => {
            userPage.value = await jsonFetch(`/user?page=${currentPage.value}`);
        }

        onMounted(loadUsers);
        watch(currentPage, loadUsers);

        const paginateTo = (url: string) => {
            if (url === null) return;
            currentPage.value = parseInt(url.split("page=").pop()!);
        }
      
        return {
            userPage,
            currentPage,
            paginateTo
        }
  }
})
</script>

<style scoped>
input:focus-visible{
    outline-width: 0px;
}
</style>