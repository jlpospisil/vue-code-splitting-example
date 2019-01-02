<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Error msg="This will never show"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from '@/components/ui/Loading.vue';
import Error from '@/components/ExampleComponent.vue';

const error = {
  template: `
    <div style="font-style: italic;">
      <div>This is an example of a timeout loading a component asynchronously.</div>
      <div>The loading component is displayed until the timeout is reached, at which point the error component is displayed.</div>
    </div>
  `,
};

// component would typically use import(), but timeout allows for simulating slow loading component
const AsyncError = () => ({
  // The component to load (should be a Promise)
  component: new Promise(resolve => setTimeout(() => resolve(Error), 5000)),
  // A component to use while the async component is loading
  loading: Loading,
  // A component to use if the load fails
  error,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,
  // The error component will be displayed if a timeout is provided and exceeded. Default: Infinity.
  timeout: 3000,
});

export default {
  name: 'home',
  components: {
    Error: AsyncError,
  },
};
</script>
