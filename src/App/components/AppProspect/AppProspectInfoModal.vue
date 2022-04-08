<template>
  <div v-if="showInfoModal">
    <div class="overlay" @click="$emit('close')">
      <div class="overlay__inner"/>
    </div>
    <div class="alert" :style="'top:'+ steps[activeStep].position + 'px'">
      <div class="allert__inner">
        <p class="text text_m mb-8">{{ steps[activeStep].text }}</p>
        <div class="alert__button-wrapper">
          <button class="button button_s button_secondary button_hovered_secondary" @click="toNextStep">
            <span class="text_s text_primary">{{ activeStep !== steps.length - 1 ? "Next" : "Close" }}</span>
            <IconArrowRight class="i-primary"/>
          </button>
        </div>
      </div>
      <div class="alert__triangle" />
    </div>
  </div>
</template>
<script>
import IconArrowRight from '@/assets/icons/IconArrowRight'
import { ref, } from 'vue'
import { useRouter } from 'vue-router'
export default {
  props: ['show-info-modal'],
  emits: ['close', 'update:showInfoModal'],
  components: { IconArrowRight },
  setup (_, {emit}) {
    const router = useRouter()
    const activeStep = ref(0)
    const steps = [
      { position: '55', text: 'Information about the user`s profile will be displayed here', route: 'Prospect'},
      { position: '105', text: 'Information about the user`s phone number and mail will be displayed here', route: 'Prospect'},
      { position: '220', text: 'Here will be displayed information about the phone number and mail of the company', route: 'Prospect'},
      { position: '365', text: 'Here will be a button to enrich the user data', route: 'Prospect'},
      { position: '485', text: 'Here will be the company data', route: 'Prospect'},
      { position: '0', text: 'Here will be the data on the company`s employees', route: 'Employees'},
      { position: '0', text: 'There will be a button to enrich the data', route: 'Employees' },
      { position: '0', text: 'There will be an action bar for quick interaction with prospects', route: 'Employees' },
      { position: '0', text: 'If you want the extension to work always, turn on the switcher', route: 'Settings' },
      { position: '0', text: 'If you need help, write to help center', route: 'Settings' },
    ]
    const toNextStep = () => {
      activeStep.value++
      if (steps[activeStep.value].route !== router.currentRoute.value.name) {
        router.push(steps[activeStep.value].route)
        emit('update:showInfoModal', true)
      }

      // if (activeStep.value === steps.length - 1) {
      //   emit('close')
      //   activeStep.value = 0
      //   router.push('/prospect')
      // } else {
      //   activeStep.value++
      // }
    }
    return {
      toNextStep, steps, activeStep
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999998;
  width: 100%;
  height: 100%;
  &__inner {
    width: calc(100% - 320px);
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
}
.alert {
  position: fixed;
  right: calc(320px + 8px);
  z-index: 9999999999;
  padding: 16px;
  max-width: 300px;
  border-radius: 16px;
  background: $cl-primary-900;
  &__button-wrapper {
    display: flex;
    justify-content: flex-end;
  }
  .alert__triangle {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(100%, -50%);
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-left: 16px solid $cl-primary-900;
    border-bottom: 8px solid transparent;
}
}
</style>