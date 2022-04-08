<template>
  <section class="popup">
    <header class="popup__header">
      <IconBuzzLogoLong />
      <BaseCloseButton @close="closePopup" />
    </header>
    <section class="popup__body">
      <div v-if="onLinkedin">
        <h6 class="text title_xs text_primary mb-8">Welcome to Buzz</h6>
        <p class="text_s mb-16">
          <span class="text_primary">Don’t have an account? </span>
          <a class="link link_hovered_primary" href="https://divo.ai/auth/sign-up">Sign up for free</a>
        </p>
        <button class="button button_s button_primary button_hovered_primary">
          <span class="text text_s">Log in with email</span>
          <IconLink class="i-white" />
        </button>
      </div>
      <ul v-else class="popup__body-list">
        <li class="" v-for="item in list" :key="item">
          <a href="" class="row_between">
            <span class="row_between">
              <component :is="item.icon" class="mr-16 i-tetriary" />
              <span class="text_m text_primary">{{ item.name }}</span>
            </span>
            <IconLink class="i-tetriary" />
          </a>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import BaseCloseButton from '@/common/BaseCloseButton'
import IconLoop from '@/assets/icons/IconLoop'
import IconLink from '@/assets/icons/IconLink'
import IconLinkedin from '@/assets/icons/IconLinkedin'
import IconBuzzLogoLong from '@/assets/icons/IconBuzzLogoLong'
import { ref, computed } from 'vue'
export default {
  components: { BaseCloseButton, IconLoop, IconLink, IconLinkedin, IconBuzzLogoLong },
  setup () {
    const closePopup = () => window.close()
    const url = ref('')
    const onLinkedin = computed(() => new URL(url.value).hostname === 'www.linkedin.com')
    const list = [
      { name: 'Search on Buzz', icon: 'IconLoop' },
      { name: 'Go to LinkedIn', icon: 'IconLinkedin' }
    ]
    chrome.tabs.query({active: true, currentWindow: true}, tabs => url.value = tabs[0].url)
    return {
      closePopup, onLinkedin,
      list
    }
  }
}
</script>
// export default {
//   data () {
//     return {
//       url: null,
//       userData: null,
//     }
//   },
//   created () {
//     chrome.storage.sync.get('tabUrl', r => this.url = r.tabUrl);
//   },
//   computed: {
//     onUserPage () {
//       return this.url.includes('www.linkedin.com/in/') ? true : false;
//     },
//     user () {
//       if (this.onUserPage) {
//         const array = this.url.split('/');
//         return array[4];
//       }
//     }
//   },
//   methods: {
//     async loadUserInfo () {
//       try {
//         const response = await fetch(`https://looch.io/enrich?linkedin_url=linkedin.com/in/${this.user}`);
//         this.userData = await response.json();
//       } catch (e) {
//         console.log(e);
//       };
//     },
//   },
// }

<style lang="scss" scoped>
@import '@/styles/main.scss';
.popup {
  width: 320px;
  &__header {
    display: flex;
    justify-content: space-between;
    padding: 24px 24px 16px;
    border-bottom: 1px solid $bg-secondary;
  }
  &__body {
    padding: 16px 24px 24px;
    &-list {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  }
}
</style>