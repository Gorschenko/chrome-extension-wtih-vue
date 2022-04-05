<template>
  <button class="close-button" @click="$emit('close')">
    <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H14V2H0V0Z" fill="#0A2033"/>
    </svg>
  </button>
</template>

<script>
export default {
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