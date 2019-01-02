<template>
  <div id="app-loading-overlay" v-show="loading">
    <loading-spinner></loading-spinner>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../scss/variables';

  #app-loading-overlay {
    z-index: 1100;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $loading-overlay-bg-color;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<script>
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue';

export default {
  components: {
    LoadingSpinner,
  },
  props: {
    loading: { type: Boolean, default: true },
  },
};
</script>
