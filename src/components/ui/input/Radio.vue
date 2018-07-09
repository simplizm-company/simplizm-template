<template>
    <label class="radio">
        <input type="radio"
            :value="val"
            v-model="checked"
            @change="onChange"
        ><span><slot></slot></span>
    </label>
</template>

<script>
export default {
    props: ['value', 'val'],
    data () {
        return {
            checkedProxy: false
        }
    },
    computed: {
        checked: {
            get () {
                return this.value;
            },
            set (val) {
                this.checkedProxy = val;
            }
        }
    },
    methods: {
        onChange: function(e) {
            this.$emit('input', this.checkedProxy)
        }
    }
}
</script>

<style lang="scss" scoped>
.radio {display: flex; position: relative; padding: 0 0 0 24px;}
.radio input {position: absolute; top: 5px; left: 0; width: 1px; height: 1px; opacity: 0; cursor: pointer;}
.radio span {display: block; margin: -0.5ex 0;}
.radio span:before {display: block; content: ''; position: absolute; top: 0; left: 0; width: 16px; height: 16px; background: url(~/static/images/common/radio.png) 0 0 no-repeat;}
.radio input:checked + span:before {background-position: 0 -16px;}
</style>
