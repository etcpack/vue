<template>
  <div class="app-view">
    {{ tips }}
    <span v-show="flag">内容是否可见</span>
    <button @click="doit1">点击我</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tips: "基于EtcPack对Vue项目进行打包！",
      flag: false,
    };
  },
  methods: {
    doit1() {
      console.log(this.tips, this.flag);
      this.flag = !this.flag;
    },
  },
};
</script>
<style>
div {
  color: red;
}
</style>
