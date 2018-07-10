<template>
    <button
        class="button-01"
        :class="`height-${height} type-${type}`"
        :style="`width: ${width}`"
        :disabled="disabled"
        @click="$emit('click')">
        <slot>Button</slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            default: '1'
        },
        width: {
            default: '100%'
        },
        height: {
            default: '40'
        },
        disabled: {
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
%button-base {display: inline-block; border: none; border-radius: 0; text-align: center; -webkit-appearance: none;}

.button-01 {@extend %button-base;}
.button-01.height-90 {height: 90px; font-weight: 400; font-size: 32px;}
.button-01.height-70 {height: 70px; font-weight: 400; font-size: 28px;}
.button-01.height-50 {height: 50px; font-weight: 400; font-size: 24px;}
.button-01.height-40 {height: 40px; font-weight: 400; font-size: 17px;}

.button-01.type-1 {border: 1px solid #000000; background: #000000; color: #ffffff;}
.button-01.type-2 {border: 1px solid #333333; background: #333333; color: #ffffff;}
.button-01.type-3 {border: 1px solid #000000; background: #ffffff; color: #000000;}

.button-01:disabled {border: 1px solid #f7f7f7; background: #f7f7f7; color: #cccccc; cursor: default;}
</style>

