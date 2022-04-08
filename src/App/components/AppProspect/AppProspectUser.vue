<template>
  <header class="header">
    <header class="user mb-24">
      <div class="row mb-16">
        <img class="user__photo" />
        <div>
          <p class="text_m text_primary text_bold">{{ user.first_name }} {{ user.last_name }}</p>
          <p class="text_xs text_secondary">{{ user.job_title }}</p>
        </div>
      </div>
      <button class="button button_s button_primary button_hovered_primary">
        <span class="text text_s">Add to Campaign</span>
        <IconArrowBottom class="i-white"/>
      </button>
    </header>
    <section class="mb-24">
      <div class="mb-24">
        <p class="text_m text_primary mb-16">Direct</p>
        <p class="row_between mb-16">
          <span class="row_between">
            <IconMessage class="i-secondary mr-8" />
            <span class="text_s cl-primary">{{ user.email }}</span>
          </span>
          <IconCheckMark class="i-success" />
        </p>
        <p class="row_between">
          <span class="row_between">
            <IconPhone class="i-secondary mr-8" />
            <span class="text_s cl-primary">{{ user.phone }}</span>
          </span>
          <IconCheckMark class="i-success" />
        </p>
      </div>
      <div>
        <p class="text_m text_primary mb-16">Work</p>
        <p class="row_between mb-16">
          <span class="row_between">
            <IconMessage class="i-secondary mr-8" />
            <span class="text_s cl-primary">{{ user.work_email }}</span>
          </span>
          <IconCheckMark class="i-success" />
        </p>
        <p class="row_between">
          <span class="row_between">
            <IconPhone class="i-secondary mr-8" />
            <span class="text_s cl-primary">{{ user.company_phone }}</span>
          </span>
          <IconCross class="i-notify" />
        </p>
      </div>
    </section>
    <footer>
      <div class="row_between mb-24">
        <button class="header__button mr-8">
          <span class="text text_s">Enrich with Buzz</span>
        </button>
        <img :src="image" class="header__image">
      </div>
      <div class="center">
        <button class="button">
          <span class="text text_xs text_secondary">How does enrichment work?</span>
        </button>
      </div>
    </footer>
    <!-- <AppProspectInfoModal :show-info-modal="showInfoModal" @close="showInfoModal = false" /> -->
  </header>
</template>
<script>
import IconArrowBottom from '@/assets/icons/IconArrowBottom'
import IconCheckMark from '@/assets/icons/IconCheckMark'
import IconCross from '@/assets/icons/IconCross'
import IconMessage from '@/assets/icons/IconMessage'
import IconPhone from '@/assets/icons/IconPhone'
// import AppProspectInfoModal from './AppProspectInfoModal'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    IconArrowBottom,
    IconCheckMark,
    IconCross,
    IconMessage,
    IconPhone,
    // AppProspectInfoModal
  },
  setup () {
    const store = useStore()
    const user = computed(() => store.getters.user)
    // const userImageSrc = computed(() => document.querySelector('#ember41').src)
    return {
      image: chrome.runtime.getURL('assets/images/ball.gif'),
      // showInfoModal
      user
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.header {
  padding: 40px 16px 8px;
  background: $t-simple;
  &__button {
      @include center;
      padding: 6px 73px;
      border-radius: 100px;
      color: $t-simple;
      background: $cl-primary-900;
      cursor: pointer;
    &:hover {
      background: $cl-primary-hover;
    }
  }
  &__image {
    width: 32px;
    height: 32px;
  }
}
.user {
  &__photo {
    width: 40px;
    height: 40px;
    margin-right: 8px;
    border-radius: 50%;
    background: green;
  }
}
.alert-wrapper {
  position: fixed;
  z-index: 9999999999;
  top: 0;
  right: 320px;
}
</style>