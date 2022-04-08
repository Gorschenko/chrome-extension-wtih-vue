<template>
  <section class="prospect">
    <AppProspectUser class="mb-24" />
    <div class="prospect__body">
      <AppProspectCompany />
    </div>
    <TheFooter />
  </section>
</template>
<script>
import TheFooter from '../components/TheFooter'
import AppProspectUser from '../components/AppProspect/AppProspectUser'
import AppProspectCompany from '../components/AppProspect/AppProspectCompany'
export default {
  components: { TheFooter, AppProspectUser, AppProspectCompany }
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