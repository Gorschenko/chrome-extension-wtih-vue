<template>
	<nav class="navigation">
    <router-link
      v-for="route in routes"
      :to="route.path"
      :key="route"
      class="text_m text_block"
    >{{ route.name }}</router-link>
  </nav>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  emits: ['close'],
  setup () {
    const router = useRouter()
    const routes = router.options.routes
    return {
      routes
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.navigation {
  display: flex;
  gap: 8px;
  padding: 10px;
  background: lightseagreen;
}
</style>