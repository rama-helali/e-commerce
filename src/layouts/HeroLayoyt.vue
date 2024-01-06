<template>
  <div class="q-pa-md">
    <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
      transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true">
      <q-carousel-slide :name="1"
        img-src="https://media.istockphoto.com/id/1295801745/photo/cute-little-girl-with-hands-by-mouth-shouting-on-pink-background.jpg?s=612x612&w=0&k=20&c=L-M5aufB4Q2pRpk7CABNaoVlMzZmBUatbXfgsrS1BNk=">
        <div class="absolute-center custom-caption">
          <div class="text-h2">Babys</div>
          <div class="text-subtitle1">Discover More</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2"
        img-src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600">
        <div class="absolute-center custom-caption">
          <div class="text-h2">Womens</div>
          <div class="text-subtitle1">>Discover More</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3"
        img-src="https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=600">
        <div class="absolute-center custom-caption">
          <div class="text-h2">Mens</div>
          <div class="text-subtitle1">Discover More</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>

<style scoped>
.custom-caption {
  text-align: center;
  color: white;
}
</style>
