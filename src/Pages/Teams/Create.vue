<template>
    <div class="flex flex-col items-start h-full p-4 space-y-5 overflow-scroll">
        <div class="flex flex-col w-1/3 mb-4">
            <label class="text-xs tracking-wide text-gray-500 uppercase">Name:</label>
            <input v-model="name" type="text" class="w-full px-2 py-2 bg-gray-100 border border-gray-300 rounded">
        </div>

        <div class="flex w-full h-full overflow-scroll">
            <div class="flex flex-col w-1/2 mr-2 overflow-scroll">
                <label class="text-xs tracking-wide text-gray-500 uppercase">Users:</label>
                <data-table :minimalPagination="true" indexUrl="/user">
                    <template v-slot="{ row }">
                        <user-row 
                            @click="toggle(row)" 
                            :isActive="isUserSelected(row)" 
                            :user="row">
                        </user-row>
                    </template>
                </data-table>
            </div>
            <div class="flex flex-col w-1/2 w-full ml-2 overflow-scroll">
                <label class="text-xs tracking-wide text-gray-500 uppercase">Selected Users ({{selectedUsers.length}}):</label>
                <div v-for="user in selectedUsers" :key="user.id">
                    <user-row
                        class="border-b border-gray-200"
                        @click="toggle(user)" 
                        :isActive="isUserSelected(user)" 
                        :user="user">
                    </user-row>
                </div>
            </div>
        </div>
        
        <div @click="save" class="px-4 py-2 ml-auto text-white bg-green-500 rounded cursor-pointer hover:bg-green-600" to="/teams/create">
            Save
        </div> 
    </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import DataTable from "../../Components/Table.vue";
import UserRow from './UserRow.vue';
import useJsonFetch from "./../../Fragments/useJsonFetch";
import { useRouter } from 'vue-router'

export default defineComponent({
    components: {DataTable, UserRow},
    setup(){
        const router = useRouter()
        const { jsonPost } = useJsonFetch();

        const name: Ref<string> = ref("");
        const selectedUsers: Ref<any[]> = ref([]);

        const isUserSelected = (user: any) => {
            return selectedUsers.value.find(u => u.id === user.id) !== undefined;
        }

        const toggle = (user: any) => {
            if (isUserSelected(user)){
                selectedUsers.value = selectedUsers.value.filter(u => u.id !== user.id);
            }else{
                selectedUsers.value.push(user);
            }
        }

        const save = async () => {

            if (name.value.trim() === ""){
                // TODO: show error to user
                return;
            }

            let team = await jsonPost("/team", {
                "name" : name.value
            });

            for(const user of selectedUsers.value){
                await jsonPost("/membership", {
                    "team_id" : team.id,
                    "user_id" : user.id,
                });
            }

            router.replace("/teams");

        }

        return { name, toggle, selectedUsers, isUserSelected, save }
    }
})
</script>