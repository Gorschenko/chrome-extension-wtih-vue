<template>
  <section class="prospect">
    <AppProspectUser class="mb-24" />
    <div class="prospect__body">
      <AppProspectCompany />
    </div>
    <AppFooter />
  </section>
</template>
<script>
import AppFooter from '../components/AppFooter'
import AppProspectUser from '../components/AppProspect/AppProspectUser'
import AppProspectCompany from '../components/AppProspect/AppProspectCompany'
export default {
  components: { AppFooter, AppProspectUser, AppProspectCompany }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.prospect {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  background: $cl-primary-25;
  &__body {
    flex-grow: 1;
  }
}
</style>