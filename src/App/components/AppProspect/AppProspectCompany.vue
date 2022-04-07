<template>
<section class="company">
  <header class="user mb-24">
    <div class="row mb-16">
      <div class="user__photo" />
      <div>
        <p class="text_m text_primary text_bold">Flo Health Inc.</p>
        <p class="text_xs text_secondary">About company</p>
      </div>
    </div>
  </header>
  <section>
    <span class="row mb-8">
      <IconUsers class="i-secondary mr-8" />
      <span class="text_s text_primary">440 employees</span>
    </span>
    <span class="row mb-8">
      <IconBuldings class="i-secondary mr-8" />
      <span class="text_s text_primary">Information Technology & Services</span>
    </span>
    <span class="row mb-8">
      <IconMoney class="i-secondary mr-8" />
      <span class="text_s text_primary">$100M Annual Revenue</span>
    </span>
    <span class="row">
      <IconMap class="i-secondary mr-8" />
      <span class="text_s text_primary">London, United Kingdom</span>
    </span>
  </section>
</section>
</template>
<script>
import IconUsers from '@/assets/icons/IconUsers'
import IconBuldings from '@/assets/icons/IconBuldings'
import IconMoney from '@/assets/icons/IconMoney'
import IconMap from '@/assets/icons/IconMap'
export default {
  components: {
    IconUsers, IconBuldings, IconMoney, IconMap,
  },
  setup () {
    return {
      image: chrome.runtime.getURL('assets/images/ball.gif')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.company {
  padding: 24px 16px;
  background: $t-simple;
}
.user {
  &__photo {
    width: 40px;
    height: 40px;
    margin-right: 8px;
    border-radius: 50%;
    background: coral;
  }
}
</style>