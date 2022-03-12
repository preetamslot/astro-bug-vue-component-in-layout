<template>
  <nav>
    <ul>
      <li>
        <a href="/"> Home</a>
      </li>
      <li>
        <a href="/other-page"> Other Page</a>
      </li>
    </ul>
  </nav>
</template>
<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      console.log("Nav Mounted");
    });
    return {};
  },
};
</script>

<style lang="postcss"></style>
