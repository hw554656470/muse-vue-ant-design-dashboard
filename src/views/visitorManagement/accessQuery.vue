<template>
    <a-card class="main-card">
        <!-- 公用tab组件 -->
        <publictab :tabs="tabs"  :currentKey="1"></publictab>
        
        <!-- 出入查询 -->
        2222
        <confirm :message="confirmmessage" @closeconfirm="closeconfirm" v-if="msgVisible"></confirm>
    </a-card>
</template>
<script>
export default {
    data() {
        return {
            
            tabs: [
                { title: "预约审批", key: "0" ,path:"/appointmentForApproval"},
                { title: "出入查询", key: "1" ,path:"/accessQuery" },
                { title: "邀约申请", key: "2" ,path:"/invitationApplication" },
            ],
        };
    },
    mounted() {
    },
    methods: {
      
    },
};
</script>
<style lang="scss" scoped>
.main-card {
    border: none;
    background: none;
}
.main-container-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .main-container-form-input {
        max-width: 300px;
        margin-bottom: 15px;
    }
    .main-container-form-btn {
        button {
            margin-left: 15px;
        }
    }
}
.main-container-visitorlist {
    margin-top: 20px;
    /deep/ .ant-table {
        background: #fff;
        border-radius: 8px;
    }
}
// 弹窗通用样式
.main-container-modal-title {
    display: flex;
    margin-bottom: 35px;
    justify-content: space-between;
    align-items: center;
    .main-container-modal-title-left {
        display: flex;
        .line {
            width: 4px;
            height: 15px;
            background: #1f6ab7;
            border-radius: 3px;
            margin-right: 15px;
        }
        h3 {
            font-size: 16px;
            font-weight: 400;
            line-height: 14px;
            margin: 0;
        }
    }
    .main-container-modal-title-right {
        width: 36px;
        height: 35px;
        background: #2474f6;
        border-radius: 0 0 20px 20px;
        position: absolute;
        right: 20px;
        top: 0;
        cursor: pointer;
        img {
            width: 14px;
            height: 14px;
            margin: 0 auto;
            display: block;
            margin-top: 10px;
        }
    }
}
/deep/ .ant-modal-close {
    display: none;
}
/deep/ .ant-modal-footer {
    border-top: none;
}
// 访客详情
.main-container-modal-content {
    .userinfo {
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        img {
            border: 2px solid #1f6ab7;
            border-radius: 5px;
        }
        .userinfo-describe {
            line-height: 17px;
            .userinfo-describe-top {
                font-size: 14px;
            }
            .userinfo-describe-status {
                i {
                    border: 1px solid #ff9333;
                    border-radius: 2px 2px 2px 2px;
                    font-size: 12px;
                    color: #ff9333;
                    padding: 2px 10px;
                    margin-right: 25px;
                    font-style: normal;
                }
            }
        }
    }

    .userdatalist {
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        li {
            width: auto;
            min-width: 230px;
            height: 40px;
            border: 1px solid #dddddd;
            border-radius: 5px px;
            display: flex;
            justify-content: space-between;
            padding: 0 15px;
            line-height: 40px;
            margin-top: 10px;
            border-radius: 5px;
            i {
                font-style: normal;
            }
            p {
                font-size: 12px;
            }
        }
    }
}
</style>
