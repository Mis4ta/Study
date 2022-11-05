<template lang="">
  <div class="nav" :class="{isColl:collapseIsShow}">
  
    <h1 >
       <img src="../../assets/images/logo.png" alt="logo" width="32">
       <span v-show="!collapseIsShow">V2通用后台管理</span>
      </h1>
    <el-menu
    :router="true"
    :collapse="collapseIsShow"
    :unique-opened = "true"
    :collapse-transition = "false"
      class="el-menu-vertical-demo"
      background-color="#2F4158"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div v-for="item,index in menuData" :key="index">
      <el-submenu :index="item.path" v-if="item.children" >
        <template slot="title" >
          <svg-icon :iconFileName="item.icon" class="svgSize"></svg-icon>
          <span v-show="!collapseIsShow">{{item.title}}</span>
        </template>
          <el-menu-item :index="i2.path" v-for="i2,inx in item.children">{{i2.title}}</el-menu-item>
      </el-submenu>

      <el-menu-item :index="item.path" v-else >
        <svg-icon :iconFileName="item.icon" class="svgSize"></svg-icon>
        <span slot="title" >{{item.title}}</span>
      </el-menu-item>
    </div>
    </el-menu>
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  data() {
    return {
      // menuData: [
      //   {
      //     title: "首页",
      //     path: "/",
      //   },
      //   {
      //     title: "客户管理",
      //     path: "/customer",
      //     children: [
      //       { title: "客户档案", path: "/customer/customer" },
      //       { title: "拜访记录", path: "/customer/visit" },
      //     ],
      //   },
      //   {
      //     title: "修养预约",
      //     path: "/business",
      //     children: [
      //       { title: "预约信息", path: "/business/appointment" },
      //       { title: "服务项", path: "/business/service" },
      //       { title: "结算单", path: "/business/statement" },
      //     ],
      //   },
      //   {
      //     title: "流程管理",
      //     path: "/flow",
      //     children: [{ title: "审核流程定义", path: "/flow/definition" }],
      //   },
      // ],
    }
  },
  computed: {
    ...mapState('navCollapse', ['collapseIsShow']),
    ...mapState("menuData", ["menuData"])
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
.nav {
  height: 100%;
  width: 222px;
  background-color: #2F4158;
  box-shadow: 6px 0 5px #ccc;
  position: relative;
  transition: 0.5s;

  &.isColl {
    width: 64px;
  }

  .el-menu {
    border: none;
  }

  h1 {
    padding: 13px 20px 0 20px;

    position: relative;

    span {
      position: absolute;
      top: 0;
      left: 0;
      top: 21px;
      left: 60px;
      color: #fff;
      font-weight: 700;
      min-width: 130px;
    }
  }

  /* 解决加了div之后的样式显示效果 */
  .isColl .el-submenu__title span,
  ::v-deep .el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
    display: none;
  }
}

#app>div>div.nav>ul>div>li>ul>li {
  background-color: #1f2d3d !important;
}

#app>div>div.nav>ul>div>li>ul>li:hover {
  background-color: rgb(38, 52, 69) !important;
}

.svgSize {
  margin-right: 5px;
}
</style>