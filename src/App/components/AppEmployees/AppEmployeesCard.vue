<template>
  <article class="employee">
    <p class="text_s text_primary text_bold">Vam Thomas</p>
    <p class="text_s text_secondary text_bold mb-8">Head of Talent Acquisition</p>
    <button class="button button_xs button_bordered_secondary employee__button">
      <img :src="image" class="image">
      <span class="text_xs text_primary">Enrich Prospect</span>
    </button>
  </article>
</template>
<script>
export default {
  setup () {
    return {
      image: chrome.runtime.getURL('assets/images/ball.gif')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.employee {
  padding: 16px;
  background: $t-simple;
  border-bottom: 1px solid $bg-secondary;
  &__button {
    border-radius: 100px;
  }
}
.image {
  width: 16px;
  height: 16px;
}
</style>