<template>
  <section class="settings">
    <header class="settings__header">
      <p class="text_m text_primary text_bold">Settings</p>
    </header>
    <section class="settings__body">
      <div class="settings__item">
        <IconDashboard class="i-secondary mr-8" />
        <span class="text_m text_primary">Dashboard</span>
      </div>
      <div class="settings__item">
        <IconCase class="i-secondary mr-8" />
        <span class="text_m text_primary">View Campaigns</span>
      </div>
      <div class="settings__item settings__item_bordered">
        <IconPapper class="i-secondary mr-8" />
        <span class="text_m text_primary">View Prospects</span>
      </div>
      <div class="settings__item">
        <IconCase class="i-secondary mr-8" />
        <span class="text_m text_primary">View Integrations</span>
      </div>
      <div class="settings__item settings__item_bordered">
        <IconMessage class="i-secondary mr-8" />
        <span class="text_m text_primary">Help Centers</span>
      </div>
      <div class="settings__item settings__item_bordered">
        <IconExpland class="i-secondary mr-8" />
        <span class="text_m text_primary">Auto Expand Plugin</span>
      </div>
    </section>
    <AppFooter class="employyes__footer"/>
  </section>
</template>
<script>
import AppFooter from '../components/AppFooter'
import IconDashboard from '@/assets/icons/IconDashboard'
import IconCase from '@/assets/icons/IconCase'
import IconPapper from '@/assets/icons/IconPapper'
import IconMessage from '@/assets/icons/IconMessage'
import IconExpland from '@/assets/icons/IconExpland'

export default {
  components: { AppFooter, IconDashboard, IconCase, IconPapper, IconMessage, IconExpland}
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
  &__footer {
    align-self: flex-end;
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