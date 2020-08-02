<template>
<div>
  分析页，比如下载次数，访问次数，用户注册等等
</div>
</template>
<script>
  export default {
    name: "Analysis",
    data() {
      return {
      };
    },
    mounted() {
      console.log(this.$route.matched)
    }
  };
</script>


