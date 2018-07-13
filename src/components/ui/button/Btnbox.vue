<template>
    <div class="btnbox">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.btnbox {display: flex; position: relative; align-items: center; justify-content: center;
    &.sbw {justify-content: space-between;
        > div {display: flex;}
    }
    &.jcs {justify-content: flex-start;}
    &.jce {justify-content: flex-end;}
    &.bw10 {
        button {margin: 0 0 0 10px;
            &:first-child {margin-left: 0;}
        }
    }
    &.bw20 {
        button {margin: 0 0 0 20px;
            &:first-child {margin-left: 0;}
        }
    }
}
</style>
