<template>
  <div class="home">
    Open your console!
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$config);
  },
};
</script>
