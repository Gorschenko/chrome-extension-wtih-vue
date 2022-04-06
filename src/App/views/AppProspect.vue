<template>
  <section class="prospect">
    <AppProspectUser />
    <AppProspectCompany />
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
  justify-content: space-between;
  background: $cl-primary-25;
}
</style>