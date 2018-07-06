<template>
  <div id="home">
    <carousel-3d 
      :autoplay="false"
      :autoplay-timeout="2400"
      :height="450"
      :width="800"
      :border="0"
      :loop="true"
      :controls-width="20"
      :controls-height="20"
      :controls-visible="true"
    >
      <slide :index="0">
        <BaseSwiper
          title="The Rings's Flames"
          stars="★★★★★★"
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis sapiente mollitia explicabo officia et similique quos sunt ex, ipsa accusantium ut ea maiores?"
          image="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=147e2e8cf170205b7621bbfed83f65bb&auto=format&fit=crop&w=800&q=60"
        />
      </slide>
      <slide :index="1">
        <BaseSwiper 
          title="Emerald in the Time"
          stars="★★★★"
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis sapiente mollitia explicabo officia et similique quos sunt ex, ipsa accusantium ut ea maiores?"
          image="https://images.unsplash.com/photo-1483706571191-85c0c76b1947?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79d169c2bf199ce6912f72c20ec301e4&auto=format&fit=crop&w=800&q=60"
        />
      </slide>
      <slide :index="2">
        <BaseSwiper 
          title="The Missing Healer"
          stars="★★"
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis sapiente mollitia explicabo officia et similique quos sunt ex, ipsa accusantium ut ea maiores?"
          image="https://images.unsplash.com/photo-1491403938640-b57372002c94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9956f19f7c3ccf648aa0d5f5169c9cd0&auto=format&fit=crop&w=800&q=60"
        />
      </slide>
      <slide :index="3">
        <BaseSwiper 
          title="The Star's Wizards"
          stars="★★★★★★"
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis sapiente mollitia explicabo officia et similique quos sunt ex, ipsa accusantium ut ea maiores?"
          image="https://images.unsplash.com/photo-1512315342380-81f12a02bd7e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c2d7b436b564480e13857d5e35cb9b51&auto=format&fit=crop&w=800&q=60"
        />
      </slide>
      <slide :index="4">
        <BaseSwiper 
          title="Next Flight"
          stars="★★★★★★"
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis sapiente mollitia explicabo officia et similique quos sunt ex, ipsa accusantium ut ea maiores?"
          image="https://images.unsplash.com/photo-1504582437221-cf3aade39746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9406d1ff1a4088e069428fa42e4b5c67&auto=format&fit=crop&w=800&q=60"
        />
      </slide>
    </carousel-3d>
    <div class="chapters" />
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import BaseSwiper from '@/components/BaseSwiper'
export default {
  components: {
    BaseSwiper,
    Carousel3d,
    Slide
  }
}
</script>

<style lang="scss" scoped>
#home {
  min-width: 1024px;
  padding: 80px 0 20px 0;
  overflow: auto;

  /deep/ .carousel-3d-slide.current {
    width: 1000px;
    height: 600px;
    border: none;
    background-color: #211f41;
    border-radius: 4px;
  }
  /deep/ .carousel-3d-slide {
    border: none;
    background-color: #443f7e;
    border-radius: 4px;
    overflow: hidden;
  }
  /deep/ .next {
    font-family: 'Khand', sans-serif;
    color: white;
    font-size: 55px;
  }
  /deep/ .prev {
    font-family: 'Khand', sans-serif;
    color: white;
    font-size: 55px;
  }
}
</style>
