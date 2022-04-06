<template>
  <section class="authorization">
    <img :src="image" class="authorization__image">
    <span class="text_block text_m text_primary text_bold mb-8">Log in</span>
    <button class="button button_s button_primary button_hovered_primary mb-16">
      <span class="text text_s">Log in with email</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.66665 2L10.862 4.19533L6.19531 8.862L7.13798 9.80467L11.8046 5.138L14 7.33333V2H8.66665Z" fill="white"/>
        <path d="M12.6667 12.6667H3.33333V3.33333H8L6.66667 2H3.33333C2.598 2 2 2.598 2 3.33333V12.6667C2 13.402 2.598 14 3.33333 14H12.          6667C13.402 14 14 13.402 14 12.6667V9.33333L12.6667 8V12.6667Z" fill="white"/>
      </svg>
    </button>
    <p class="text_s">
      <span class="text_primary">Don’t have an account? </span>
      <a class="link link_hovered_primary" href="https://divo.ai/auth/sign-up">Sign up</a>
    </p>
  </section>
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
.authorization {
    @include center_column;
    padding: 16px;
    background: $t-simple;
  &__image {
    width: 180px;
    height: 180px;
  }
}
</style>