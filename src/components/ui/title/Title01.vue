<template>
    <h1 :class="`level-${level}`">
        <slot></slot>
    </h1>
</template>

<script>
export default {
    props: ['level']
}
</script>

<style lang="scss" scoped>
h1.level-1 {font-weight: 700; font-size: 34px; color: #000000;}
h1.level-2 {font-weight: 700; font-size: 26px; color: #000000;}
h1.level-3 {font-weight: 700; font-size: 20px; color: #000000;}
</style>
