<template>
    <div class="tit">
        <h1>
            <slot>Title</slot>
        </h1>
    </div>
</template>

<style lang="scss" scoped>
.tit {display: flex;}
.tit h1 {margin: -0.5ex 0; font-weight: 700;}
</style>
