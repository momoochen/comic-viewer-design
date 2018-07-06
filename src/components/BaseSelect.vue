
<template>
  <div class="btn-group">
    <li 
      v-if="selectedOption.name" 
      class="dropdown-toggle" 
      @click="toggleMenu()"
    >
      {{ selectedOption.name }}
      <span class="caret" />
    </li>

    <li 
      v-if="!selectedOption.name" 
      class="dropdown-toggle" 
      @click="toggleMenu()"
    >
      {{ placeholderText }}
      <span class="caret" />
    </li>

    <ul 
      v-if="showMenu" 
      class="dropdown-menu"
    >
      <!-- v-for一定要配:key 以防萬一有重複的值 為了避免重覆 搭配i-->
      <li 
        v-for="(option, i) in options"
        :key="i" 
      >
        <a 
          href="javascript:void(0)" 
          @click="updateOption(option)"
        >
          {{ option.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      default: () => [], // function(){return[]} function return一個空的array 傳進去時 不會被共用
      type: [Array, Object]
    },
    selected: {
      default: () => ({}), // 簡寫的寫法
      type: Object
    },
    placeholder: {
      type: String, // array 裡面多種型別，可以是字串或是物件的寫法
      // required: true //必填寫required 若選填 則寫default
      default: ''
    }
  },
  data() {
    return {
      selectedOption: {
        name: ''
      },
      showMenu: false,
      placeholderText: 'Please select an item'
    }
  },
  mounted() {
    this.selectedOption = this.selected
    if (this.placeholder) {
      this.placeholderText = this.placeholder
    }
  },
  methods: {
    updateOption(option) {
      this.selectedOption = option
      this.showMenu = false
      this.$emit('updateOption', this.selectedOption)
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style>
.btn-group {
  font-family: 'Khand', sans-serif;
  min-width: 160px;
  height: 40px;
  position: relative;
  margin: 10px 1px;
  display: inline-block;
  vertical-align: middle;
  border: none;
  margin: 0 8px;
  font-size: 16px;
}
.btn-group a:hover {
  text-decoration: none;
}
.dropdown-toggle {
  color: white;
  min-width: 130px;
  padding: 8px;
  margin-bottom: 7px;
  background-color: transparent;
  transition: all 0.3s ease-out;
  border-radius: 4px;
  background-image: none;
}
.dropdown-toggle:hover {
  background: #3c3863;
  cursor: pointer;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 16px;
  text-align: left;
  background: #3c3863;
  border: none;
  border-radius: 4px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}
.dropdown-menu > li > a {
  padding: 10px 30px;
  display: block;
  clear: both;
  font-weight: normal;
  line-height: 1.6;
  color: white;
  white-space: nowrap;
  text-decoration: none;
}
.dropdown-menu > li > a:hover {
  background: #766fb4;
  color: white;
}
.dropdown-menu > li {
  overflow: hidden;
  width: 100%;
  position: relative;
  margin: 0;
}
.caret {
  display: relative;
  width: 0;
  position: relative;
  top: 10px;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  float: right;
}
li {
  list-style: none;
}
</style>
