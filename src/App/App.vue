<template>
  <section class="extension">
    <TheSidebar 
      :class="{
        'extension__sidebar': true,
        'hidden': showSidebar ? false : true
      }"
      @close="showSidebar = !showSidebar"
    />
    <TheStartButton
      :class="{
        'extension__start-button start-button': true,
        'hidden': !showSidebar ? false : true
      }"
      @click="showSidebar = !showSidebar" />
  </section>
</template>
<script>
import TheStartButton from './TheStartButton'
import TheSidebar from './TheSidebar'
import { ref } from 'vue'

export default {
  components: { TheStartButton, TheSidebar },
  setup () {
    const showSidebar= ref(false)
    return {
      showSidebar
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
.hidden {
  transform: translateX(100%);
}
</style>
