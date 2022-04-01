<template>
<div class="wrapper">
  <header></header>
  <main>
    <h1>URL: {{ url }}</h1>
    <div v-if="onUserPage">
      <h1 class="title_xs mb-1">Загрузите информацию</h1>
      <button class="button button_success" @click="loadUserInfo">Загрузить</button>
      {{ user }}
      {{ userData }}
    </div>
    <div v-else>
      <h1>Откройте любого пользователя на LinkedIn.com</h1>
    </div>
  </main>
  <footer></footer>
</div>
</template>
<script>
export default {
  data () {
    return {
      url: null,
      userData: null,
    }
  },
  created () {
    chrome.storage.sync.get('tabUrl', r => this.url = r.tabUrl);
  },
  computed: {
    onUserPage () {
      return this.url.includes('www.linkedin.com/in/') ? true : false;
    },
    user () {
      if (this.onUserPage) {
        const array = this.url.split('/');
        return array[4];
      }
    }
  },
  methods: {
    async loadUserInfo () {
      try {
        const response = await fetch(`https://looch.io/enrich?linkedin_url=linkedin.com/in/${this.user}`);
        this.userData = await response.json();
      } catch (e) {
        console.log(e);
      };
    },
  },
}
</script>