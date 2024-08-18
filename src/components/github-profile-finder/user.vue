<template>
  <div class="user">
    <div class="avatar-container">
      <img :src="avatar_url" class="avatar" alt="User" />
    </div>
    <div class="name-container">
      <a :href="`https://github.com/${login}`">{{ name || login }}</a>
      <p>
        User joined on
        {{ createdDate.getDate() }}
        {{ createdDate.toLocaleString("en-us", { month: "short" }) }}
        {{ createdDate.getFullYear() }}
      </p>
    </div>
    <div class="profile-info">
      <div>
        <p>Public Repos</p>
        <p>{{ public_repos }}</p>
      </div>
      <div>
        <p>Followers</p>
        <p>{{ followers }}</p>
      </div>
      <div>
        <p>Following</p>
        <p>{{ following }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  avatar_url: String,
  followers: Number,
  following: Number,
  public_repos: Number,
  name: String,
  login: String,
  created_at: String,
});

const createdDate = new Date(props.created_at);
</script>

<style lang="scss" scoped>
.user {
  padding: 15px;
  border-radius: 10px;
  border: 1px solid;
}

.avatar-container {
  display: flex;
  justify-content: center;
}

.avatar {
  height: 150px;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

.name-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.name-container p {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

.profile-info div {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>
