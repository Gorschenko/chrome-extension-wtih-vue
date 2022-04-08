<template>
<section class="company">
  <header class="user mb-24">
    <div class="row mb-16">
      <!-- <img :src="companyImageSrc" class="user__photo" /> -->
      <div class="user__photo" />
      <div>
        <p class="text_m text_primary text_bold">{{ user.company_name }}</p>
        <p class="text_xs text_secondary">{{ user.company_domain }}</p>
      </div>
    </div>
  </header>
  <section>
    <span class="row mb-8">
      <IconUsers class="i-secondary mr-8" />
      <span class="text_s text_primary">{{ user.company_employee_count }}</span>
    </span>
    <span class="row mb-8">
      <IconBuldings class="i-secondary mr-8" />
      <span class="text_s text_primary">{{ user.company_industry }}</span>
    </span>
    <span class="row mb-8">
      <IconMoney class="i-secondary mr-8" />
      <span class="text_s text_primary">{{ user.company_revenue }}</span>
    </span>
    <span class="row">
      <IconMap class="i-secondary mr-8" />
      <span class="text_s text_primary">{{ user.company_state }}, {{ user.company_city }}</span>
    </span>
  </section>
</section>
</template>
<script>
import IconUsers from '@/assets/icons/IconUsers'
import IconBuldings from '@/assets/icons/IconBuldings'
import IconMoney from '@/assets/icons/IconMoney'
import IconMap from '@/assets/icons/IconMap'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    IconUsers, IconBuldings, IconMoney, IconMap,
  },
  setup () {
    const store = useStore()
    const user = computed(() => store.getters.user)
    // const companyImageSrc = computed(() => document.querySelector('#ember74').src)
    return {
      image: chrome.runtime.getURL('assets/images/ball.gif'),
      user
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