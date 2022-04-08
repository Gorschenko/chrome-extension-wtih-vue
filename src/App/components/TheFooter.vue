<template>
  <footer class="footer">
    <router-link
      v-for="item in list"
      :key="item"
      :to="item.path"
      class="center_column footer__item"
    >
      <component :is="item.icon" class="mb-8"/>
      <span class="text_block text_s">{{ item.name }}</span>
    </router-link>
  </footer>
</template>
<script>
import IconUser from '@/assets/icons/IconUser'
import IconUsers from '@/assets/icons/IconUsers'
import IconSettings from '@/assets/icons/IconSettings'
export default {
  components: { IconUser, IconUsers, IconSettings },
  setup () {
    const list = [
      { name: 'Prospect', path: '/prospect', icon: 'IconUser' },
      { name: 'Employees', path: '/employees', icon: 'IconUsers' },
      { name: 'Settings', path: '/settings', icon: 'IconSettings' }
    ]
    return {
      list
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.footer {
  @include row_between;
  padding: 16px 32px;
  background: $t-simple;
  &__item {
    color: $t_secondary;
    fill: $t_secondary;
    &:hover > svg {
      fill: $cl-primary-900;
    }
    &:hover > span {
      color: $cl-primary-900;
    }
  }
}
</style>