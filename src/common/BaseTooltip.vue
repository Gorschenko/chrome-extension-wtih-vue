<template>
  <div
    ref="tooltip"
    :class="['tooltip-block ', {'tooltip-block_top': isTop}]"
    tabindex="0"
  >
    <div
      v-if="triangle"
      :style="triangleStyle"
      :class="['tooltip-block__triangle', {'tooltip-block__triangle_top': isTop}]"
    />
    <div
      ref="tooltipContent"
      :class="[
        'tooltip-block__content',
        {
          'tooltip-block__content_top': isTop,
          'tooltip-block__content_center': center

        }]"
    >
      <div
        class="tooltip-block__scrollable "
        :style="styles"
      >
        <slot name="beforeItems" />
        <div
          v-for="(item, index) in data"
          :key="item[keyField] || index"
          :class="['tooltip-block__choice', {'tooltip-block__choice_disabled': item.isDisabled}, {'tooltip-block__choice_delete': item.isDelete}]"
          @click.stop="handleClick(item, index)"
        >
          <slot
            name="itemSlot"
            :item="item"
          />
          <span> {{ getText(item) }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Tooltip',
    props: {
      styles: {
        type: Object,
        default: null,
      },
      getText: {
        type: Function,
        default: (item) => {
          return item.name || 'no name';
        },
      },
      data: {
        type: Array,
        default: () => [{}],
      },
      keyField: {
        type: String,
        default: 'keyField',
      },
      getIcon: {
        type: Function,
        default: () => {},
      },
      itemClass: {
        type: Array,
        default: () => [''],
      },
      name: {
        type: String,
        default: 'tooltip',
      },
      show: {
        type: Boolean,
        default: false,
      },
      triangle: {
        type: Boolean,
        default: true,
      },
      triangleStyle: {
        type: Object,
        default: null,
      },
      center: {
        type: Boolean,
        default: false,
      },
      containerId: {
        type: String,
        default: '',
      },
    },
    data () {
      return {
        isTop: false,
      };
    },
    watch: {
      show (show) {
        let container;
        if (this.containerId) {
          const containerElement = document.getElementById(this.containerId).getBoundingClientRect();
          container = containerElement.top + containerElement.height;
        } else {
          container = window.innerHeight;
        }
        const height = this.$refs.tooltipContent.clientHeight || 284;
        this.isTop = show ? height + this.$refs.tooltipContent.getBoundingClientRect().top + 20 > container : false;
      },
      data () {
        let container;
        if (this.containerId) {
          const containerElement = document.getElementById(this.containerId).getBoundingClientRect();
          container = containerElement.top + containerElement.height;
        } else {
          container = window.innerHeight;
        }
        if (this.show) {
          // this.$refs.tooltipContent.querySelector('tooltip-block__choice').clientHeight
          const pagePlace = this.isTop
            ? this.$refs.tooltipContent.getBoundingClientRect().bottom + 20
            : this.$refs.tooltipContent.getBoundingClientRect().top + 20;
          this.isTop = this.$refs.tooltipContent.clientHeight + pagePlace > container;
        }
      },
    },
    methods: {
      handleResize () {
        // console.log('clientHeight', this.$refs.tooltipContent.clientHeight, 'top', this.$refs.tooltipContent.getBoundingClientRect().top, window.innerHeight);
      },
      handleClick (item, index) {
        this.$emit('chooseIndex', index);
        this.$emit('choose', item, this.name);
      },
    },
  };
</script>
<style lang="scss" scoped>
@import '@/styles/tooltip.scss';
@media (max-width: 768px) {
  .tooltip-block__triangle {
  left: calc(75% - 5px) !important;
}
.tooltip-block__content {
  right: 0px;
}
}
.tooltip-block {
  width: 120%;
  position: absolute;
  // top: 10px;
  opacity: 1;
  transition-duration: .3s;

  &_hidden {
    z-index: -10;
    opacity: 0;
  }

  &_top {
    top: auto !important;
    bottom: calc(100% + 8px);
  }

  &__triangle {
    border-width: 0 10px 8px;
    border-color: transparent;
    background-color: var(--background-color);
    transform: rotate(45deg);
    border-bottom-color: #ffffff;
    position: absolute;
    z-index: 10;
    top: 8px;
    left: calc(50% - 5px);
    width: 10px;
    height: 10px;
    box-shadow: -1px -1px 2px 0px var(--tooltip-shadow);

    &_top {
      top: -4px;
    }
  }

  &__content {
    position: absolute;
    padding: 10px 14px;
    width: 100%;
    background-color: var(--background-color);
    color: var(--text-color);
    box-shadow: 0 0 5px 1px var(--tooltip-shadow);
    border-radius: 12px;
    top: 13px;
    z-index: 1;
    font-size:  1.17rem;
    line-height: 16px;
    min-width: fit-content;
    white-space: nowrap;
    &_center{
      transform: translateX(-50%);
      left: 50%;
    }
    &_top {
      top: auto;
      bottom: 0;
    }
  }

  &__scrollable {
    max-height: 220px;
    overflow: auto;
  }

  &__header {
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 700;
    font-size:  0.83rem;
    line-height: 12px;
    color: var(--main-text-cl);
  }

  &__choice {
    display: flex;
    cursor: pointer;
    padding: 10px;
    text-shadow: none;
    align-items: center;
    column-gap: 11px;
    user-select: none;
    &:hover {
      background: var(--active-bg-cl);
    }

    &_delete {
      color: $error-cl;
      
      &:hover {
        color: $error-cl;
        background-color: var(--active-error-cl);
      }
    }

    &_disabled {
      color: #b9b9b9;

      &:hover {
        background: inherit !important;
      }
    }

    &_theme {
      color: #3582ff;
    }

  }

  &__small-icon {
    height: 20px;
    min-width: 20px;
    margin-right: 8px;
    border-radius: 50%;
    background-size: cover;
  }
}
</style>
