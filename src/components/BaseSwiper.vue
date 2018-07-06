<template>
  <div class="comic-wrapper">
    <div class="comic-cover">
      <img 
        :src="image"
      >
    </div>
    <div class="comic-info">
      <div class="title">{{ title }}</div>
      <div class="description-wrapper">
        <div class="description">
          <div class="subtitle">GENRES</div>
          <div class="name">Fusce/vehicula/do</div>
        </div>
        <div class="description">
          <div class="subtitle">AUTHOR</div>
          <div class="name">Namae Shiranai</div>
        </div>
        <div class="description">
          <div class="subtitle">STATUS</div>
          <div class="name">Ongoing</div>
        </div>
        <div class="description">
          <div class="subtitle">RATE</div>
          <div class="stars">{{ stars }}</div>
        </div>
        <div class="subtitle">SUMMARY</div>
        <div class="summary">{{ summary }}</div>
        <div class="buttons">
          <router-link to="/">
            <button>
              Chapters
            </button>
          </router-link>
          <router-link to="/detail">
            <button>
              Start
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    stars: {
      type: String,
      default: ''
    },
    summary: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.comic-wrapper {
  margin: 0 auto;
  display: grid;
  grid-gap: 0;
  grid-template-columns: auto auto;
  width: 800px;
  height: 450px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px #211f41;
  position: relative;
  &:hover {
    img {
      transform: scale(1.03);
    }
  }
  .buttons {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  .comic-cover {
    img {
      transition: all 1.5s ease-in-out;
      width: 400px;
      height: 450px;
      object-fit: cover;
    }
  }
  .comic-info {
    background: rgba(0, 0, 0, 0.35);
    .description-wrapper {
      padding: 0 20px 20px 20px;
      .description {
        display: flex;
        margin-bottom: 12px;
        .name {
          color: white;
        }
        .stars {
          color: #76f86c;
        }
      }
      .subtitle {
        font-family: 'Khand', sans-serif;
        margin-right: 20px;
        color: #615c99;
      }
      .summary {
        color: white;
      }
    }
  }
}
</style>
