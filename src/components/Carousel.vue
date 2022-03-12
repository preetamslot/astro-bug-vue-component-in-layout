<template>
  <section :aria-labelledby="id" class="fit">
    <div class=" ">
      <h2 class="h2 full-width" :id="id">Fancy Carousel</h2>
    </div>
    <div class="" ref="slider">
      <div class="carousel__slide" v-for="index in 5" :key="index">
        <img
          :src="`https://picsum.photos/id/5${index}/500/350`"
          alt="The best image ever"
        />
      </div>
    </div>
  </section>
</template>
<script type="module">
import { ref, onMounted } from "vue";
import "@fancyapps/ui/dist/carousel.css";
import pkg from "@fancyapps/ui/dist/carousel.umd.js";
const { Carousel } = pkg;
//import { Carousel } from "@fancyapps/ui";

export default {
  props: {
    content: Object,
    items: Array,
    id: String,
  },
  setup(props) {
    const slider = ref(null);
    const myCarousel = ref(null);
    onMounted(() => {
      myCarousel.value = new Carousel(slider.value, {
        center: false,
        Dots: false,
        slidesPerPage: 1,
      });
    });

    return {
      slider,
    };
  },
};
</script>

<style>
.carousel {
  --carousel-button-color: #170724;
  --carousel-button-bg: #fff;
  --carousel-button-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%),
    0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

  --carousel-button-svg-width: 20px;
  --carousel-button-svg-height: 20px;
  --carousel-button-svg-stroke-width: 2.5;
}

.carousel .carousel__button.is-prev {
  display: none;
}

.carousel .carousel__button.is-next {
  display: none;
}

.carousel .carousel__button:focus {
  outline: none;
  box-shadow: 0 0 0 4px #a78bfa;
}
</style>
