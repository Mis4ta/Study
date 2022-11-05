
<template lang="">
  <div class="contentView">
    
    <!-- 动画 -->
    <transition
 name="animate__animated animate__bounce"
 enter-active-class="animate__fadeInUp"
 mode="out-in"
>
  <router-view ></router-view>
</transition>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.contentView {
  padding: 20px
}
</style>