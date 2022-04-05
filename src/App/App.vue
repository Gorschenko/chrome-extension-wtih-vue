<template>
  <section class="extension">

    <aside
      :class="{
        'extension__sidebar sidebar': true,
        'hidden': showSidebar ? false : true
      }"
    >
      <TheNavigation class="sidebar__navigation" />
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
import { ref } from 'vue'

export default {
  components: { BaseCloseButton, TheStartButton, TheNavigation },
  setup () {
    const showSidebar= ref(false)
    return { showSidebar }
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
  padding: 16px;
  background: $bg-primary;
  box-shadow: $bs;
  &__close-button {
    display: flex;
    justify-content: flex-end;
  }
  &__navigation {
    position: absolute;
    right: 100%;
  }
  &__body {
    flex-grow: 1;
  }
}
.hidden {
  transform: translateX(100%);
}
</style>
