<template>
    <div class="input-form">
        <section>
            <h class="title">이름</h>
            <div class="input">
                <input type="text" placeholder="이름">
            </div>
        </section>
        <section>
            <h class="title">체크박스</h>
            <div class="input2">
                <check val="foo" v-model="checkModel">체크박스 1</check>
                <check val="bar1" v-model="checkModel">체크박스 2</check>
                <check val="bar2" v-model="checkModel">체크박스 2</check>
                <check val="bar3" v-model="checkModel">체크박스 2</check>
                <check val="bar4" v-model="checkModel">체크박스 2</check>
                <check val="bar5" v-model="checkModel">체크박스 2</check>
                <check val="bar6" v-model="checkModel">체크박스 2</check>
                <check val="bar7" v-model="checkModel">체크박스 2</check>
                <check val="bar8" v-model="checkModel">체크박스 2</check>
                <check val="bar9" v-model="checkModel">체크박스 2</check>
                <check val="bar0" v-model="checkModel">체크박스 2</check>
                <check val="bar11" v-model="checkModel">체크박스 2</check>
                <check val="bar12" v-model="checkModel">체크박스 2</check>
                <check val="bar13" v-model="checkModel">체크박스 2</check>
                <check val="bar14" v-model="checkModel">체크박스 2</check>
                <check val="bar15" v-model="checkModel">체크박스 2</check>
                <check val="bar16" v-model="checkModel">체크박스 2</check>
                <check val="bar17" v-model="checkModel">체크박스 2</check>
            </div>
        </section>
        <section>
            <h class="title">라디오</h>
            <div class="input2">
                <radio val="foo" v-model="componentRadio">FOO</radio>
                <radio val="bar" v-model="componentRadio">BAR</radio>
            </div>
        </section>
        <section>
            <h class="title">셀렉트</h>
            <div class="input">
                <select>
                    <option>셀렉트1</option>
                    <option>셀렉트2</option>
                    <option>셀렉트3</option>
                </select>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data () {
        return {
            componentRadio: 'bar',
            checkModel: ['bar1', 'bar2'],
        }
    }
}
</script>


<style lang="scss" scoped>
.input-form > section {
    margin: 30px 0 0;
    &:first-child {margin-top: 0;}
    .title {margin: 0 0 10px; font-weight: 400; font-size: 17px;}
    .input {display: flex; min-height: 40px; align-items: center;}
    .input2 {display: flex; flex-wrap: wrap; margin: -10px 0; align-items: center;
        .check, .radio {margin: 10px 20px 10px 0;}
    }
}
</style>
