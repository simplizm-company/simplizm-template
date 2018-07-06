<template>
    <div class="txt">
        <div>
            <slot>Text</slot>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.txt {display: flex;}
.txt div {display: flex; align-items: baseline; margin: -0.5ex 0;}

.txt.s1 {font-size: 30px;}
</style>

