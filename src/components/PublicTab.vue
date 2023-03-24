<template>
    <a-tabs type="card" @change="chooseTab" v-model="currentKey">
        <a-tab-pane
            v-for="(item, key) in tabs"
            :key="key"
            :tab="item.title"
            :style="{ zIndex: '-'+item.key }"
        ></a-tab-pane>
    </a-tabs>
</template>
<script>
export default {
    props: { tabs: Object, currentKey: String },
    data() {
        return {};
    },
    methods: {
        chooseTab(currentIndex) {
            console.log(this.tabs);
            this.tabs.findIndex((item, index) => {
                if (index === currentIndex) {
                    this.$router
                        .push({
                            path: item.path,
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            });
        },
    },
};
</script>
<style long="scss">
.ant-tabs-nav{
    padding-left: 22px;
}
.ant-tabs-nav .ant-tabs-tab {
    position: relative;
    color: #fff !important;
    width: 100px;
    height: 30px;
    text-align: center;
    background: #93bcf4 !important;
    box-shadow: 4px 0px 8px 0px rgba(8,77,148,0.2);
    border-radius: 0 20px 0 20px !important;
    margin-left: -20px !important;
    border: none !important;
    border-bottom: 2px solid #1f6ab7 !important;
}
.ant-tabs-nav .ant-tabs-tab-active {
    background: #1f6ab7 !important;
    z-index: 2;
    border: none !important;
}
</style>