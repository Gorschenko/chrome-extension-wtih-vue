<template>
  <section class="employees">
    <header class="employees__header">
      <p class="text_m text_primary text_bold">All Employees</p>
    </header>
    <section class="employees__body">
      <AppEmployeesCard v-for="i in 5"/>
    </section>
    <AppFooter class="employyes__footer"/>
  </section>
</template>
<script>
import AppFooter from '../components/AppFooter'
import AppEmployeesCard from '../components/AppEmployees/AppEmployeesCard'
export default {
  components: { AppEmployeesCard, AppFooter }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.employees {
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
}
</style>