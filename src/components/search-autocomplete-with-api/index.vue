<template>
  <div class="search-autocomplete-container">
    <input
      type="text"
      name="search-users"
      placeholder="Search Users here"
      v-model="searchParam"
      @input="handleChange"
    />
    <div v-if="showDropdown">
      <Suggesstions :data="filteredUsers" :handleClick="handleClick"/>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Suggesstions from "./suggesstions.vue";

// API链接，用于获取用户数据
const API_URL = "https://dummyjson.com/users";
//存储获取的数据
const users = ref([]);
//加载状态
const loading = ref(false);
//错误状态
const error = ref(null);

const searchParam = ref("");

const showDropdown = ref(false);

const filteredUsers = ref([]);

// 过滤函数
const handleChange = (event) => {
  const query = event.target.value.toLowerCase();
  searchParam.value = query;
  console.log(users.value);
  if (query.length > 0) {
    const filteredData =
      users.value && users.value.length
        ? users.value.filter((item) => item.toLowerCase().indexOf(query) > -1)
        : [];
    console.log(filteredData);
    filteredUsers.value = filteredData;
    showDropdown.value = true;
  } else {
    showDropdown.value = false;
  }
};

const handleClick=(event)=>{
    showDropdown.value=false;
    searchParam.value=event.target.innerText;
    filteredUsers.value=[]
}

const fetchListOfUsers = async () => {
  try {
    loading.value = true;
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    if (data && data.users && data.users.length) {
      users.value = data.users.map((item) => item.firstName);
      loading.value = false;
      console.log(users.value);
    }
  } catch (e) {
    loading.value = false;
    error.value = e;
    console.log(e);
  }
};

onMounted(() => {
  fetchListOfUsers();
});
</script>

<style lang="scss" scoped></style>
