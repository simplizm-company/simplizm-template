<template>
    <article id="index">
        <ul>
            <li>1280 이상 : {{ $store.state.window.isWide }}</li>
            <li>1024 이상 : {{ $store.state.window.isDesktop }}</li>
            <li>1024 이하 : {{ $store.state.window.isDevice }}</li>
            <li>640 ~ 1024 : {{ $store.state.window.isTablet }}</li>
            <li>640 이하 : {{ $store.state.window.isMobile }}</li>
        </ul>
    </article>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
ul {display: flex; flex-wrap: wrap; justify-content: space-between; padding: 2%; margin: 0 0 -2%;
    li {display: flex; width: 49%; height: 100px; margin: 0 0 2%; border: 1px solid #000; align-items: center; justify-content: center;}
}
</style>
