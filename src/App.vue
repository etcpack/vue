<template>
  <div>
    {{ tips }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      tips: "基于EtcPack对Vue项目进行打包！",
    };
  },
};
</script>
<style>
div {
  color: red;
}
</style>
