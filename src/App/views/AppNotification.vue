<template>
  <section class="notification">
    <img :src="image" class="notification__image">
    <p class="text_l text_center text_primary text_bold mb-24">Try navigating to a search or profile page</p>
    <p class="text_m text_center text_primary">
      You can find contact info, save to your CRM, and send emails & track when they are read.
    </p>
  </section>
</template>
<script>
export default {
  setup () {
    return {
      image: chrome.runtime.getURL('assets/images/navigation.png')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.notification {
  @include center_column;
  padding: 16px;
  background: $t-simple;
  &__image {
    width: 180px;
    height: 100px;
  }
}
</style>