<template>
  <section class="extension">

    <aside
      :class="{
        'extension__sidebar sidebar': true,
        'hidden': showSidebar ? false : true
      }"
    >
      <div class="sidebar__test-info">
        <span class="text text_block text_l text_bold">Test info:</span>
        <TheNavigation />
        <span class="text text_block text_l text_bold">Info about user: </span>
        <span class="text text_block text_primary text_m text_bold">{{ userInfo }}</span>
      </div>
      <div class="sidebar__close-button">
        <BaseCloseButton @close="showSidebar = !showSidebar" />
      </div>
      <router-view class="sidebar__body"/>
    </aside>

    <TheStartButton
      :class="{
        'extension__start-button': true,
        'hidden': !showSidebar ? false : true
      }"
      @click="showSidebar = !showSidebar"
    />

  </section>
</template>
<script>
import TheNavigation from './components/single/TheNavigation'
import BaseCloseButton from '@/common/BaseCloseButton'
import TheStartButton from './components/single/TheStartButton'
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  components: { BaseCloseButton, TheStartButton, TheNavigation },
  setup () {
    const store = useStore()
    const showSidebar = ref(false)
    const url = ref('')
    chrome.runtime.onMessage.addListener(msg => url.value = msg.url) 
    watch(url, url => {
      if (url.includes('linkedin.com/in/')) {
        const user = url.split('/')[4]
        store.dispatch('getUserInfo', user)
      }
    })
    const userInfo = computed(() => store.getters.user)
    return { 
      showSidebar, url, userInfo
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.extension {
  position: absolute;
  z-index: 999999999;
  &__sidebar {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 100vh;
    transition: 0.5s;
  }
  &__start-button {
    position: fixed;
    top: 50%;
    right: 0;
    width: 32px;
    height: 74px;
    transition: 0.5s;
  }
}

.sidebar {
  box-shadow: $bs;
  &__close-button {
    position: absolute;
    right: 8px;
    top: 8px;
  }
  &__test-info {
    position: absolute;
    right: 100%;
    padding: 10px;
    max-height: 100%;
    width: 300px;
    overflow-y: scroll;
    background: lightseagreen;
  }
  &__body {
    flex-grow: 1;
  }
}
.hidden {
  transform: translateX(100%);
}
</style>
