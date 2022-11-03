<template lang="">
  <div class="layoutMain">
    <navView></navView>
    <div class="layoutRight">
      <headerView></headerView> 
      <contentView></contentView>
    </div>
  </div>
</template>

<script>
import navView from "@/views/layout/nav.vue"
import headerView from "@/views/layout/headerView.vue"
import contentView from "@/views/layout/contentView.vue"
export default {
  name: "layout",
  data() {
    return {

    }
  },
  components: {
    navView,
    headerView,
    contentView
  }
}
</script>

<style lang="less" scoped>
.layoutMain {
  display: flex;
  width: 100%;
  height: 100%;

  .layoutRight {
    flex: 1;
  }
}
</style>