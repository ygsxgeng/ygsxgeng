<template>
  <div id="app">

    <router-view>  </router-view>
    <Tab></Tab>

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
  }
}
</script>

<style lang="scss">

</style>
