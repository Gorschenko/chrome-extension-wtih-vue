<template>
  <section class="settings">
    <header class="settings__header">
      <p class="text_m text_primary text_bold">Settings</p>
    </header>
    <section class="settings__body">
      <div
        v-for="item in list"
        :key="item"
        :class="{
          'settings__item': true,
          'settings__item_bordered': item.isBordered
        }"
      >
        <component :is="item.icon" class="i-tetriary mr-8" />
        <span class="text_m text_primary">{{ item.name }}</span>
      </div>
    </section>
    <TheFooter/>
  </section>
</template>
<script>
import TheFooter from '../components/TheFooter'
import IconDashboard from '@/assets/icons/IconDashboard'
import IconCase from '@/assets/icons/IconCase'
import IconPapper from '@/assets/icons/IconPapper'
import IconMessage from '@/assets/icons/IconMessage'
import IconExpland from '@/assets/icons/IconExpland'

export default {
  components: { TheFooter, IconDashboard, IconCase, IconPapper, IconMessage, IconExpland},
  setup () {
    const list = [
      { name: 'Dashboard', icon: 'IconDashboard', isBordered: false },
      { name: 'View Campaigns', icon: 'IconCase', isBordered: false },
      { name: 'View Prospects', icon: 'IconPapper', isBordered: true },
      { name: 'View Integrations', icon: 'IconCase', isBordered: false },
      { name: 'Help Centers', icon: 'IconMessage', isBordered: true },
      { name: 'Auto Expand Plugin', icon: 'IconExpland', isBordered: false },
    ]
    return {
      list
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.settings {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  background: $cl-primary-25;
  &__header {
    padding: 40px 16px 16px;
    background: $t-simple;
    border-bottom: 1px solid $bg-secondary;
  }
  &__body {
    flex-grow: 1;
  }
  &__item {
    display: flex;
    padding: 16px;
    background: $t-simple;
    cursor: pointer;
    &_bordered {
      border-bottom: 1px solid $bg-secondary;
    }
  }
}

</style>