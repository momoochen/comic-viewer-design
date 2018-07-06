<template>
  <div id="products">
    <div class="top">
      <div class="title thistitle">
        Comic Vol.01
      </div>
      <BaseSelect 
        :options="arrayOfObjects" 
        :selected="object" 
        placeholder="Select an Item" 
        @updateOption="methodToRunOnSelect"
      /> 
      <BaseSelect 
        :options="pages" 
        :selected="object1" 
        placeholder="Select an Item" 
        @updateOption="methodToRunOnSelect"
      /> 
    </div>
    <div class="carousel">
      <carousel 
        :per-page="1"
        :pagination-size="8"
        :pagination-padding="4"
        :navigation-enabled="true"
        pagination-active-color="#76f86c"
      >
        <slide>
          <img src="https://images.unsplash.com/photo-1491403938640-b57372002c94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9956f19f7c3ccf648aa0d5f5169c9cd0&auto=format&fit=crop&w=1350&q=80">
        </slide>
        <slide>
          <img src="https://images.unsplash.com/photo-1490535004195-099bc723fa1f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53d16e51c95625168dde435dbd0aaa45&auto=format&fit=crop&w=1480&q=80">
        </slide>
        <slide>
          <img src="https://images.unsplash.com/photo-1491403938640-b57372002c94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9956f19f7c3ccf648aa0d5f5169c9cd0&auto=format&fit=crop&w=1350&q=80">
        </slide>
        <slide>
          <img src="https://images.unsplash.com/photo-1491403938640-b57372002c94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9956f19f7c3ccf648aa0d5f5169c9cd0&auto=format&fit=crop&w=1350&q=80">
        </slide>
        <slide>
          <img src="https://images.unsplash.com/photo-1491403938640-b57372002c94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9956f19f7c3ccf648aa0d5f5169c9cd0&auto=format&fit=crop&w=1350&q=80">
        </slide>
        <slide>
          <div class="border">
            <img src="https://images.unsplash.com/photo-1491403938640-b57372002c94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9956f19f7c3ccf648aa0d5f5169c9cd0&auto=format&fit=crop&w=1350&q=80">
          </div>
        </slide>
        <slide>
          <img src="https://images.unsplash.com/photo-1491403938640-b57372002c94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9956f19f7c3ccf648aa0d5f5169c9cd0&auto=format&fit=crop&w=1350&q=80">
        </slide>
        <slide>
          <img src="https://images.unsplash.com/photo-1491403938640-b57372002c94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9956f19f7c3ccf648aa0d5f5169c9cd0&auto=format&fit=crop&w=1350&q=80">
        </slide>
        <slide>
          <img src="https://images.unsplash.com/photo-1491403938640-b57372002c94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9956f19f7c3ccf648aa0d5f5169c9cd0&auto=format&fit=crop&w=1350&q=80">
        </slide>
        <slide>
          <img src="https://images.unsplash.com/photo-1491403938640-b57372002c94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9956f19f7c3ccf648aa0d5f5169c9cd0&auto=format&fit=crop&w=1350&q=80">
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide,
    BaseSelect
  },
  data() {
    return {
      pages: [
        { id: 1, name: 'Page 1' },
        { id: 2, name: 'Page 2' },
        { id: 3, name: 'Page 3' },
        { id: 4, name: 'Page 4' }
      ],
      arrayOfObjects: [
        { id: 1, name: 'Chapter 1' },
        { id: 2, name: 'Chapter 2' },
        { id: 3, name: 'Chapter 3' },
        { id: 4, name: 'Chapter 4' },
        { id: 5, name: 'Chapter 5' }
      ],
      object: {
        name: 'Select Chapter'
      },
      object1: {
        name: 'Select Page'
      }
    }
  },
  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload
    }
  }
}
</script>

<style lang="scss" scoped>
#products {
  padding: 66px 0px;
  min-width: 1024px;
  overflow: auto;

  /deep/ .VueCarousel-navigation-button {
    color: white;
  }
  .slider-prev {
    width: 20px;
    height: 20px;
  }
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #615c99;
    position: fixed;
    top: 66px;
    width: 100%;
    z-index: 999;
  }
  .thistitle {
    margin-bottom: 0;
    font-size: 16px;
  }
  .carousel {
    margin-top: 80px;
    padding: 0 50px;
    text-align: center;
  }
  img {
    width: 80%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
