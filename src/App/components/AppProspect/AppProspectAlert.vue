<template>
  <div v-if="alert.visible" class="alert">
    <p class="text text_m mb-8">{{ alert.text }}</p>
    <div class="alert__button-wrapper">
      <button class="button button_s button_secondary button_hovered_secondary">
        <span class="text_s text_primary">Next</span>
        <IconArrowRight class="i-primary"/>
      </button>
    </div>
  </div>
</template>
<script>
import IconArrowRight from '@/assets/icons/IconArrowRight'
export default {
props: ['alert'],
components: { IconArrowRight }
}
</script>
<style scoped lang="scss">
@import '@/styles/main.scss';
.alert {
  padding: 16px;
  min-width: 320px;
  border-radius: 16px;
  background: $cl-primary-900;
  &__button-wrapper {
    display: flex;
    justify-content: flex-end;
  }
}
</style>