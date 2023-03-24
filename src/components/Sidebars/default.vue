<template>
  <a-layout-sider class="sidebar-container">
    <a-list item-layout="horizontal" :data-source="data">
      <a-list-item
        slot="renderItem"
        slot-scope="item"
        :class="item.selected ? 'selected' : ''"
      >
        <a href="#" class="sidebar-avatar"
          ><img :src="item.avatar" :alt="item.name"
        /></a>
      </a-list-item>
    </a-list>
  </a-layout-sider>
  <!-- </a-layout-sider> -->
  <!-- / Main Sidebar -->
</template>

<script>
export default {
  props: {
    // Sidebar collapsed status.
    sidebarCollapsed: {
      type: Boolean,
      default: false,
    },

    // Main sidebar color.
    sidebarColor: {
      type: String,
      default: "primary",
    },

    sidebarTheme: {
      type: String,
      default: "light",
    },
  },
  data() {
    return {
      // 左侧导航
      data: [
        {
          selected: true,
          name: "首页",
          avatar:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAcRJREFUOE/t1DFoE1EYB/D//+XMXWJBkjTaKYh0EouDkwS6FulQFxcHaSlcry2CoqNDNwdxEWybG9ouipTSQrWdnLS418EOpUMpVNBLEULTOzDvk4s00DTJNTajb7z7f7/3+B7fI86wbtlyYVf5ea1k52A6uRdVwqhAygluUPRbAn0AAkKeeYXES4DSrLYFKsw4wSREXgCwTgDER2r9wHMvfm8EN0S7RkrZeNyYJzDY4jQeFEe9GWu1PnMKTTv+gBJZEKAnqjXV/8SMqa2n+y7Lx/ka2vtQzIMgeE7Ko2q0vfUthtj9H4X45t99AFwa96/FtF4meLM960Q6gPBJ0bVeE1NiZPb9LRC95wBrpVQcYnqsfJvgl06AoSHAIrttf1AoHzqIrv1HI3taIfCuIvxkKMlqgQ0g1+wOBIjuqYLc+1lILh0jufFfqUNtbgC43giORAl89gqJ/vrijH14F1Qr/4SGc12cTUzUF4cTaGjZ6Siaso9yithtil6xg77f1F8bNr7JSVuhEMxVH5Ru52hdBHdOwe2jZaUr+Sp6dViskuk/FiBPwqzhmu+LrvWqfrMup3TZhPGm9l3CkZftGAw3fP7+AORhy+ETNsKmAAAAAElFTkSuQmCC",
        },
        {
          name: "宿舍",
          avatar:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAAXNSR0IArs4c6QAAAbxJREFUOE/tlDFIW1EUhv//PjXJs2KTVyxqKQiCgtChe2lxalqc3AoiBZNUaCdB7NZJFMdSqRm6SSmIg1M7FUQodKhbFkUwpYiNGqTge1HuPeUpCRrjy9NN8I7n/P93zj33cogaJ57ykkqZJMFIrXw5Zsh/FvR84WPz6mkdq01Oxp0E8DYIVpXThAztzNmfy/EzUCdd6gVNDsC5YsFFWIw3RdrX37Pk686YExn3JYFPJwAWAbMsUIe1gArSIsATAFE/r2gelsdQ1ak3CsoswF9s1AP6SPVDaNeG6r8UKyeU7yA6jOBRMRtbOdepkz6B+gISEwSeB16bmITwDyAfLoTeTrmPGxRe0IqOGe1OE2wInqWsWWJ90zSvaXGmMBtdr3SaSJX6FPVTIepA6v0JdQCaRXa/kcjeobdNoLWeJWT+B+Np974iNkMawsjyN9DrMtPEyME9Wvwd5llDavLEO1HOludvpp6QpkCZgAvHC+XukDSL7Q1qYJzKDF8WboGNR4ZfYeTZXmfsZ2VLORlvimJ2d7L2zGWhvv7OK3eeIkuFOftLBdo2WnpwSzdtbmS5fxVo64jbpRR0MRvL/weQlqa1HBWOJAAAAABJRU5ErkJggg==",
        },
        {
          name: "访客",
          avatar:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAYAAAB7u5a2AAAAAXNSR0IArs4c6QAAAnRJREFUOE+dlE1oE1EUhc+Zyc9LbSnmp0VxoVRxoYgUfxAqBUFxIWjdKAqiUjNkIaIIohQqdiGI6ErttKILQYtdCC6KC90oCl3UgmjdSBeiRXGSgE0yk9qZKykNmHRS08527v3Ouee9+4hlfGtPisqFnF2ujtmIq8amBljww3Cp7FjSSYHSByA235shecXqV2Y1a0nwhFE44oFDvi41HrTuqef//vOFx1PORteT7fRkMjPY8K7cEDPsjwA2+U/L8bSp2heFRw3nHCG3AGilQhEMZQbUsTXnoeyC45vtPFBaM0pNDHOmLFDhvPHUdCIUCnwnEKxwIDxgZcMvolGnQCBU45xyaTPSVNP5yqTdoRFvFjRTLqX7G27EDOcZIIdqwB+mzcjpmvCm5O94kMGS80p3HvemB9XL5m57XTCAUREkqgS+Oq67I3+/8eeimceNwgUBbwIoR1bhqCSg67iuEXtEUCQwYutub/5u44+6rmJLqrhlVrydApnI9je8Xeou+B4orooWn3I6Adkm1GIUyUPjuIqEX327TXv9WQlnneJu6F47RVvlAR5FfhEYtbLqNYbp+saSOJPb6mn6IwCbK51y3A1IV8CVw+LxIojVvpMIpkj2WWbYBCilmrlcW5JO2yxljEBzlfIkxOsAtQcC7K8nHhKPrbQ6UZpiDh5N2k9IHK1uFnAfKV0QpOoBl2sEuJYxI70EhDHDyQOIVMXxHsLjoPepvK31CggwI4INXNGda1W6vuAaaUSPK1AEeuqFVtQJLrP0Nk8Hix3VgKL+54NC4KkIOpcDF2Bk0Sc3ZthfALQtBw7B5//AC3cEWvWq16VFivUXYfjn++I6VdMAAAAASUVORK5CYII=",
        },
        {
          name: "教务",
          avatar:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAAAXNSR0IArs4c6QAAAq1JREFUSEuVlM9LFGEYx7/PjLrzQw/urCkkHSI6FIQReAgx0DyUHbrYQYggYmfdIBDU+g/sl0FUtqMdqqMSEUhBVAc794swOqQG0Q/cncXCZmZt531ithVs29nd5jbv83w/z/d53+d9CRU/ppiZO8LEh5gRJWBJEv5MerrxdSUZhQWb4j9iEaq/x0B3SQ4zaCJrRcYA4nL6UKhhuo8B9IUVJeaRzJQ2UTPUSLg9YDyt1CKDVhWObP0yRU5pXlmnRsIdB+Nc5f0GfODAqqXO1wh1roLpTDWoBOpPW8rD2qCmlwT4RjVo3sf277fU5Zqg+qm1VkWWFwHoFcDPbEvtrfmggsRY3B1kwh0AdWWEXyWZutOTyof/ggbJzXG3SyaMM9AV/DOwLgGzruyP/Jxs/BY6btX2LYhvG1pt9nwlqq1HPn+8TV41TWGkdg1wQzqaO5hntEuSSNsp7X41YRBvSXJjPp8bJLCQZPEqc1N/EaxT7CQ3ifrcPIE7iiDBQtqTnY4sbIBbj7MudLc/ndJmNhczTOcsQOeLa8Xrq4xSzHRGGHRpczKDZrOWcixY05NrbWq+bo6J9wF8zc6qw5glP3DJwltiRstm7S8hOslIuJNgDJW0yzLkvStWw5uY6T7fOKhCa+DRjKVdNhLOGJgu/DOjRIkwaHDWD2xLO2r8fRHyeR87lZyy4uvecqnLQgGmZAUomCA6FU1b8BxviYE2AHdtSz0R5rIWKIjwKJNSDxch42Bpd53b8MnXCkW2lJ2QKk7/FAbvl2X1LfvelYylxmNxZ5SJLoaNnGAyyYh7p0F8PXQuCU/slNqHAZZbFSgVXRZNUPswq67jzQHoCQNvvJvlxq9Ek7Itdaj4SDO1JJwOCNpRDszgxcyU/tIw3V6JOVqaIwg+Q36ftSLvgthvHgsxqflreD4AAAAASUVORK5CYII=",
        },
        {
          name: "考勤",
          avatar:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAf5JREFUOE+tlE9Ik2Ecx7+/vevdu3dhuinT8hB0iaRzKBpBh0ihQ+BBRMiKbXhLOnboYNfoZO41GniNCiIlOughqO4Db3nyorBXJWnv5vZ+5VmbjJftfZX5nh6e5/v7/P6/AgBXH+11H0b1a+rc/LluuGhnI5ve+9jcYX+UcsV7H6pq+7uW8UdqgqqWJ9DrFQEgyXnbMt803hKp0nWIuw5goKVekJa+tDPugqstBCdXJJ8psAKKuBsE+tvqyS/Sm3ImKPzqB/3/xkWBPPQFKhWwegZosNua606hBNZCQBeB0YbLTqG5Qjb6+OLs376IHt49D+h60jbub36QsrfRAZHKZxEWSDwBIE2R5LtpjG1ZcpBMlW4eiftDgEuBkRIo2wNGDC+l0pMpTgvxXgAdwDarHLbfmdvxp/8GRZNfAAabW+gbqUu82rOiL5RBIl28CyAXZmhix4rk63XcADDknYnARhHy2s5GngPCG5PUVQ0vp2iWxFEbdavVkAVC60ZLhawxp8CYpJboKX6CyIN2U3taqLJfKYeP5vXKhQUAGd+V7nT4O0n/dPtZV9XSj2ece0J+O5Olb/7yUZIzjFVizncQI+cALhAydbIprYDKYdV01gjcbtqYA7gct5fNn+2C8IUqo/pcqp/4HQKBQGUTCG2Ay3CWNI2LO2/N30FlOgYXpgfCJEaFhwAAAABJRU5ErkJggg==",
        },
      ],
    };
  },
  mounted() {},
};
</script>
<style long="scss">
.selected {
  width: 40px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 8px 0px rgba(6, 57, 129, 0.2);
  border-radius: 5px;
}

.ant-layout-sider {
  background: none;
  flex: 0 0 200px;
  max-width: 200px;
  min-width: 200px;
}
.ant-list-split .ant-list-item {
  border-bottom: none;
}
.sidebar-container {
  width: 40px !important;
  flex: 0 0 80px !important;
  max-width: 80px !important;
  min-width: 80px !important;
  padding: 0 20px;
}
.sidebar-container .ant-list-item .sidebar-avatar {
  margin: 0 auto;
}
.ant-layout-sider-children {
  margin-top: 200px;
  position: fixed;
}
</style>
