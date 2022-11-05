<template lang="">
  <div class=" headerView">
   
    <el-button :plain="true"  icon="el-icon-s-unfold" v-show="btnShow"@click="changeCollapse " ></el-button>
    <el-button :plain="true" icon="el-icon-s-fold" v-show="!btnShow" @click="changeCollapse "  ></el-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      btnShow: false
    }
  },
  methods: {
    ...mapMutations("navCollapse", ["changeCollapseIsShow"]),
    // 展示
    changeCollapse() {
      this.btnShow = !this.btnShow
      this.changeCollapseIsShow()
    }
  }
}
</script>

<style lang="less" scoped>
.headerView {
  padding: 5px 0 0 10px;
  width: 100%;
  height: 84px;
  background-color: #fff;
  box-shadow: 0px 0 10px #ccc;

  button {
    padding: 12px 10px;
    margin: 0;
    font-size: 22px;
    border: none;

    &:hover {
      color: #606266;
      background-color: #ccc;
    }
  }
}
</style>