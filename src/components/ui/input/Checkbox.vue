<template>
    <label class="checkbox">
        <input type="checkbox" :name="options.name" :value="options.value" :checked="options.checked">
        <span><slot></slot></span>
    </label>
    <!-- <checkbox :attr="{ name: 'checkbox', value: 'checkbox1', checked: true }">체크박스 1</checkbox> -->
</template>

<script>
export default {
    props: ['attr'],
    data () {
        return {
            options: {
                name: '',
                value: '',
                checked: false
            }
        }
    },
    created () {
        $.extend(this.options, this.attr)
    }
}
</script>

<style lang="scss" scoped>
.checkbox {display: inline-block; position: relative; padding: 0 0 0 24px;}
.checkbox input {position: absolute; top: 5px; left: 0; width: 1px; height: 1px; opacity: 0; cursor: pointer;}
.checkbox span {display: block;}
.checkbox span:before {display: block; content: ''; position: absolute; top: 50%; left: 0; width: 16px; height: 16px; margin: -8px 0 0; background: url(~/static/images/common/checkbox.png) 0 0 no-repeat;}
.checkbox input:checked + span:before {background-position: 0 -16px;}
.checkbox input:focus + span:before {outline: 1px dotted #000000;}
</style>
