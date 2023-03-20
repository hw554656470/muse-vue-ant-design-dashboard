<template>
  <a-layout-footer>
    <div class="footer-container">
      <div class="company">©上海斐宸电子科技有限公司</div>
    </div>
  </a-layout-footer>
</template>

<script>
export default {
  data() {
    return {
      // Collapse navigation value.
      // Binded model property for "Collapsible Navigation Menu" collapsed status .
    };
  },
};
</script>

<style lang="scss">
.ant-layout-footer {
  width: 100%;
  position: fixed;
  z-index: 1;
  text-align: center;
  bottom: 0;
}
.footer-container {
  .company {
    width: 150px;
    font-size: 12px;
    font-family: SimSun;
    font-weight: 400;
    color: rgba(153, 153, 153, 0.5);
    margin: 0 auto;
  }
}
</style>