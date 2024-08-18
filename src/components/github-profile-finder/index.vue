<template>
  <div v-if="loading">
    <h1>Loading data ! Please wait...</h1>
  </div>
  <div v-else class="github-profile-container">
    <div class="input-wrapper">
      <input
        type="text"
        name="search-by-username"
        placeholder="Search-by-username"
        v-model="userName"
      />
      <button @click="handleSubmit">Search</button>
    </div>
    <div v-if="userData !== null">
      <User
        :avatar_url="userData.avatar_url"
        :followers="userData.followers"
        :following="userData.following"
        :public_repos="userData.public_repos"
        :name="userData.name"
        :login="userData.login"
        :created_at="userData.created_at"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import User from "./user.vue";

//初始用户
const userName = ref("mmzhhhh");
const userData = ref(null);
const loading = ref(false);

const fetchGithubUserData = async () => {
  loading.value = true;
  const res = await fetch(`https://api.github.com/users/${userName.value}`);
  const data = await res.json();
  if (data) {
    userData.value = data;
    console.log(userData.value.avatar_url);
    loading.value = false;
  }
};

const handleSubmit=()=>{
    fetchGithubUserData();
}

onMounted(() => {
  fetchGithubUserData();
});
</script>

<style lang="scss" scoped>
.github-profile-container{
    margin: 50px auto;
    width: 90%;
    max-width: 1000px;
    padding: 20px;
    border-radius: 8px;
    background-color: #c8c8c8;
}

.input-wrapper{
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 20px;
}

.input-wrapper input{
    border-radius: 8px;                                                                                                         
    padding: 12px;
    font-size: 16px;
    border: none;
}

.input-wrapper button{
    padding: 5px 12px;
    border: none;
    border-radius: 8px;
    background-color: #b316c7;
    color: #fff;
}


</style>
