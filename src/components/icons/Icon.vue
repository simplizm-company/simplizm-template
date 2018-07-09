<template>
    <div class="icon" :style="`width: ${size}px; height: ${size}px;`">
        <svg class="svg-icon" :width="size" :height="size" :style="`fill: ${color}; stroke: ${color};`">
            <use :xlink:href="`#${name}`"></use>
        </svg>
    </div>
</template>

<script>
export default {
    props: ['name', 'size', 'color'],
    computed: {
        options () {
            return $.extend(this.defaults, this.attr);
        }
    }
}
</script>

<style>
.icon {display: inline-block;}
</style>

