<template>
    <div class="custom-head-tag">
        <h1>
            <slot>Title</slot>
        </h1>
    </div>
</template>

<style lang="scss" scoped>
.custom-head-tag {display: flex;}
.custom-head-tag h1 {margin: -0.5ex 0;}
</style>
