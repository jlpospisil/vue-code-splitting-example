<template>
  <div style="height: 100vh; width: 100vw">
    <split-pane horizontal>
        <google-map class="map">

        </google-map>
      <div class="bottom-data">
        Bottom slide pane for data
      </div>
    </split-pane>
  </div>
</template>

<style lang="scss" scoped>
  .map {
    height: 100%;
    width: 100%;
  }
  .bottom-data {
    padding: 25px;
  }
</style>
<script>
import { SplitPane, GoogleMap } from '@cdpjs/vue-components';

export default {
  name: 'marketData',
  components: {
    SplitPane,
    GoogleMap,
  },
};
</script>
