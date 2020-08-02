<template>
<div>
  工作台，展示最近的动态等
</div>
</template>
<script>
  export default {
    name: "Dashboard",
    data() {
      return {
      };
    },
    mounted() {
      console.log(this.$route.matched)
    }
  };
</script>


