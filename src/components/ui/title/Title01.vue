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
h1.level-1 {font-weight: 700; font-size: 40px; color: #000000;}
h1.level-2 {font-weight: 700; font-size: 36px; color: #000000;}
h1.level-3 {font-weight: 700; font-size: 32px; color: #000000;}
h1.level-4 {font-weight: 700; font-size: 28px; color: #000000;}
</style>
