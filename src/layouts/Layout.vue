<template>
  <a-layout id="layout-Layout">
    <div class="page flex-col">
      <div class="block_1 flex-col">
        <div class="section_1 flex-col">
          <defaultheader></defaultheader>
          <a-layout>
            <defaultsidebar></defaultsidebar>
            <a-layout-content>
              <!-- <router-view /> -->
              <div style="position: relative">
                <slot></slot>
              </div>
            </a-layout-content>
          </a-layout>
          <defaultfooter></defaultfooter>
        </div>
      </div>
    </div>
  </a-layout>
</template>
  <script>
import defaultheader from "../components/Headers/default.vue";
import defaultsidebar from "../components/Sidebars/default.vue";
import defaultfooter from "../components/Footers/default.vue";
export default {
  components: {
    defaultheader,
    defaultsidebar,
    defaultfooter,
  },
  data() {
    return {
      a: 1,
    };
  },
};
</script>
<style long="scss">
.ant-layout-content {
  height: 86vh;
  padding: 20px 20px 20px 0;
}
</style>
