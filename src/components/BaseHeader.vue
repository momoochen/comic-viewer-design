<template>
  <header 
    id="header"
    :class="{ 'is-top': isTop }"
  >
    <router-link
      to="/" 
    >Comic Books</router-link>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isTop: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll)
  },
  methods: {
    scroll() {
      if (window.pageYOffset > 66) {
        this.isTop = true
      } else {
        this.isTop = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background: transparent;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  color: white;
  font-size: 24px;
  transition: all 0.3s ease-in-out;

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #76f86c;
    }
  }
}
.is-top {
  background-color: #615c99;
}
</style>
