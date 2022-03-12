<template>
  <div class="counter">
    <button @click="subtract()">-</button>
    <pre>{{ count }}</pre>
    <button @click="add()">+</button>
  </div>
  <div class="flex-col">
    <h2>Neste vue component</h2>
    <atom-spinner :animation-duration="1000" :size="60" :color="'#ff1d5e'" />
  </div>
  <div class="counter-message">
    <slot />
  </div>
</template>

<script>
import { AtomSpinner } from "epic-spinners";
import { ref } from "vue";
export default {
  components: {
    AtomSpinner,
  },
  setup() {
    const count = ref(0);
    const add = () => (count.value = count.value + 1);
    const subtract = () => (count.value = count.value - 1);

    return {
      count,
      add,
      subtract,
    };
  },
};
</script>

<style>
.flex-col {
  padding-block: 5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.counter {
  display: grid;
  font-size: 2em;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2em;
  place-items: center;
}
.counter-message {
  text-align: center;
}
</style>
