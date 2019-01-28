<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <About msg="About Us"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { Loading } from '@cdpjs/vue-components';

const AsyncAbout = () => ({
  // The component to load (should be a Promise)
  component: import(/* webpackChunkName: "example-component" */ '@/components/ExampleComponent.vue'),
  // A component to use while the async component is loading
  loading: Loading,
  // A component to use if the load fails
  // error: ErrorComponent,
  // Delay before showing the loading component. Default: 200ms.
  // delay: 200,
  // The error component will be displayed if a timeout is provided and exceeded. Default: Infinity.
  // timeout: 4000,
});

export default {
  name: 'about',
  components: {
    About: AsyncAbout,
  },
};
</script>
