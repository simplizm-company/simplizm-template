<template>
    <button
        class="button-01"
        :class="`size-${defaults.size} ${defaults.type}`"
        :style="`width: ${defaults.width}`"
        @click="$emit('click')">
        <slot>Button</slot>
    </button>
</template>

<script>
export default {
    props: ['options'],
    data () {
        return {
            defaults: {
                size: '',
                type: '',
                width: '100%'
            }
        }
    },
    created () {
        $.extend(this.defaults, this.options)
    }
}
</script>

<style lang="scss" scoped>
%button-base {display: inline-block; border: none; border-radius: 0; text-align: center; -webkit-appearance: none;}

.button-01 {@extend %button-base;}
.button-01.size-90 {height: 90px; font-weight: 400; font-size: 32px;}
.button-01.size-70 {height: 70px; font-weight: 400; font-size: 30px;}

.button-01.color-01 {border: 1px solid #000000; background: #000000; color: #ffffff;}
.button-01.color-02 {border: 1px solid #333333; background: #333333; color: #ffffff;}
.button-01.color-03 {border: 1px solid #666666; background: #666666; color: #ffffff;}
</style>

