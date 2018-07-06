<template>
  <footer
    id="header"
  >
    <img src="@/assets/imgs/logo.svg">
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  background: transparent;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  color: white;

  img {
    position: absolute;
    bottom: 20px;
    height: 30px;
  }
}
</style>
