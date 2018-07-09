<template>
    <div class="custom-text-tag">
        <div>
            <slot>Text</slot>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.custom-text-tag {display: flex;}
.custom-text-tag div {display: flex; align-items: baseline; margin: -0.5ex 0;}
</style>

