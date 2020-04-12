<template>
  <div id="app">

    <router-view>  </router-view>
    <Tab v-show="isTabbarShow"></Tab>

  </div>
</template>

<script>
import {mapState} from "vuex"
import  Tab from "@/components/Tab"
export default {
  components:{
    Tab,
  },
  computed:{
    ...mapState("tab",["isTabbarShow"])
  }
}
</script>

<style lang="scss">

</style>
