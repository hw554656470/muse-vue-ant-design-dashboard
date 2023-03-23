<template>
    <div class="main-container">
        <div class="container-left">
            <!-- banner -->
            <div class="main-container-banner">
                <div class="main-container-banner-greetings">
                    上午好，尊敬的朱佳丽老师！
                </div>
                <div class="main-container-banner-announce">
                    <span class="trumpet"
                        ><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAAAAXNSR0IArs4c6QAAAdhJREFUOE/NVDFok0EYfe8Sk/yxBatiTawoRhy0iyDiIrp3cnAQHALaJLbUwUmkQ6RdKtqCgml/3Oqgk4vg6uDg4iooOAj2j5tUlPzV5J5cmpgG2z+xIHjj3b1373v3vo/ocx2/qIQ3BL3x+bMXhL0uAGK2GOZBzEFIQhgLfO9VFC6SdP/42gljbAXA2Q6JHgRL6esbSbOFr3vB+G2Ao8GSd+436eH8l11rXiLnLsdkBi10AWIJQKJLFVEJFr0Jt+csWR2qTYlmGlCcUnnFT99rkmaL4RSgu38QbFZji3RkIjxq63oBIidgOSF786O/s+ogHL4WHolZvXcCe/vrEOtKDxbCXIOaodH9lUr69UYsDxTCMVHP+yJsyuiUvxXm/yLdd/XbcDwWewax6yMF+3jbSl1afiRT8wIH2jYQEsnlbZNGhv+ffFRmsnaIdXz420i1uu0pwIdBJumjzHrHBgCZQu0WiRkApme02uG/srrbxpOP4DoPeGuIyU+L3sv11LWW65BGQ2cgppsHBscg5QHs2apN3f5IqXbeivOATkJ4EvjepciB4gaFsGOWxHi7CokLVT91o+uhskz2c5iXxemq75X6GH1Apvj9FGDuEBiE4eWgknoXZdMvwyTHvgBqT/cAAAAASUVORK5CYII="
                            alt=""
                    /></span>
                    今天下午三点半全体师生一起去操场集合聆听北大张教授的演讲，请各位班主任维持好班级纪律，带领班级准时到场！
                </div>
            </div>
            <div class="split-line"></div>
            <oftenmodule></oftenmodule>
            <functionrecommend></functionrecommend>
        </div>
        <div class="container-right">
            <!-- 日历 -->
            <calendar></calendar>
            <div class="split-line"></div>
            <!-- 待办事项 -->
            <pending></pending>
        </div>
    </div>
</template>
<script>
import oftenmodule from "../../components/Home/oftenModule.vue";
import functionrecommend from "../../components/Home/functionRecommend.vue";
import calendar from "../../components/Home/calendar.vue";
import pending from "../../components/Home/pending.vue";

export default {
    components: {
        oftenmodule,
        functionrecommend,
        calendar,
        pending,
    },
    data() {
        return {
            constants: {},
        };
    },
    methods: {},
};
</script>
<style long="scss" scoped>
.split-line {
    height: 20px;
}
.main-container {
    display: flex;
    justify-content: space-evenly;
}

.container-left {
    flex: 1;
    margin-right: 20px;
    overflow: hidden;
}
.container-right {
    width: 460px;
    overflow: hidden;
}

.main-container-banner {
    width: 100%;
    height: 100px;
    background: #f5f9ff;
    box-shadow: 2px 3px 8px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 25px 0 0 20px;
    line-height: 40px;
    background-image: url("../../assets/img/main-container-banner.png");
}
.main-container-banner-greetings {
    font-size: 18px;
    font-weight: 400;
    color: #010101;
    line-height: 22px;
}
.main-container-banner-announce {
    width: 440px;
    overflow: hidden;
    white-space: nowrap;
    color: #5894f5;
}
.main-container-banner-announce img {
    margin: -5px 7px 0 0;
}
</style>
  