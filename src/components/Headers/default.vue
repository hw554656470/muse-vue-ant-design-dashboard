<template>
  <a-layout-header>
    <div class="hearder-container">
      <div class="hearder-left">
        <div class="hearder-logo">
          <img
            class="logo-img"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psfpxdjpw4yxkr19k9tb6ygjgk3mjcerk9y5j2une1nn4s4ib659882c-0ad7-4a13-87f2-7505c77bb7a4"
          />
          <span class="logo-text">斐宸校园</span>
        </div>
        <div class="header-nav">
          <ul>
            <li
              v-for="(item, key) in data"
              :key="key"
              :class="isSeleted ? 'header-nav-seleted' : ''"
            >
              <a :href="item.href">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="hearder-right">
        <!-- 搜索框 -->
        <div class="search-box">
          <a-input
            v-model="userName"
            placeholder="搜索"
            class="search-btn"
            :bordered="false"
          >
            <template #suffix>
              <a-tooltip title="搜一搜">
                <img
                  class="thumbnail_1"
                  referrerpolicy="no-referrer"
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/psox7eozpbf6nfusorpchhgv076dovquxr4364k5oxgr1thuxrcf57ffac-9433-4431-83b5-90b886f3819e"
                />
              </a-tooltip>
            </template>
          </a-input>
        </div>
        <!-- 用户数据 -->
        <div class="user-box">
          <div class="photo">
            <img src="" alt="" />
          </div>
          <div class="name">
            <div>猪之助 <br />工号：5182385</div>
          </div>
        </div>
        <!-- 关闭按钮 -->
        <div class="close-btn">
          <a-button type="text" danger
            ><img
              class="thumbnail_2"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps8y3dhub0odfmkj4iqkhu4es7p5h4cxrobw6d5gj62rwl8fr884bf1e3-dac1-44dd-b71f-b54579a9f238"
            />注销</a-button
          >
        </div>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          href: "http://baidu.com",
          name: "首页",
          isSeleted: true,
        },
        {
          href: "http://baidu.com",
          name: "宿舍管理",
        },
        {
          href: "http://localhost:8081/#/appointmentForApproval",
          name: "访客管理",
        },
        {
          href: "http://baidu.com",
          name: "作业管理",
        },
        {
          href: "http://baidu.com",
          name: "充值管理",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.ant-layout-header {
  padding: 0 0px;
  background: none;
}
.hearder-container {
  width: 100%;
  height: 64px;
  background-color: #1f6ab7;
  border-radius: 0 0px 20px 20px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;

  .hearder-left {
    display: flex;

    .header-nav {
      ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        .header-nav-seleted {
          border-bottom: 2px solid #fff;
        }
        li {
          width: auto;
          padding: 8px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          line-height: 22px;
          margin-left: 50px;
          a {
            color: #ffffff;
          }
        }
      }
    }
  }
  .user-box {
    display: flex;
    color: rgba(147, 188, 244, 1);
    .name {
      line-height: 16px;
      margin: 15px 0 0 10px;
    }
    .photo {
      border-radius: 100%;
      background-color: #fff;
      width: 32px;
      height: 32px;
      margin: 15px 0 0 3px;
      border: 2px solid #93bcf4;
    }
  }

  .hearder-logo {
    display: flex;
    .logo-img {
      width: 38px;
      height: 27px;
      margin-top: 15px;
    }
    .logo-text {
      width: 70px;
      height: 15px;
      overflow-wrap: break-word;
      color: rgba(255, 255, 255, 1);
      font-size: 18px;
      font-family: zihun143hao-zhengkuchaojihei-Bold;
      font-weight: 700;
      text-align: left;
      white-space: nowrap;
      line-height: 24px;
      margin: 15px 0 0 3px;
    }
  }

  .hearder-right {
    display: flex;
    width: 500px;
    justify-content: space-between;

    .search-btn {
      background: none;
      color: #fff;
    }

    .close-btn {
      color: rgba(147, 188, 244, 1);

      img {
        margin-right: 10px;
      }
      button {
        background: none;
        border: none;
        color: rgba(147, 188, 244, 1);
        margin-left: 10px;
      }
    }
  }
}

/deep/ .ant-input-affix-wrapper input {
  height: 30px;
  background: #93bcf4;
  border: none;
  border-radius: 40px;
  color: #fff;
}
/deep/ .ant-input-affix-wrapper input::placeholder {
  color: #fff;
}
</style>