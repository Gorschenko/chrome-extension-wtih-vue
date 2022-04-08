<template>
  <button class="close-button" @click="$emit('close')">
    <IconMinus />
  </button>
</template>

<script>
import IconMinus from '@/assets/icons/IconMinus'
export default {
  components: { IconMinus },
  emits: ['close']
}
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';
.close-button {
  @include center;
  cursor: pointer;
  padding: 11px 5px;
  border-radius: 50%;
  &:hover {
    background: $bg-tetriary;
  }
}
</style>