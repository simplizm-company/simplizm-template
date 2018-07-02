<template>
    <div class="icon" :style="`width: ${options.size}px; height: ${options.size}px;`">
        <svg class="svg-icon" :width="options.size" :height="options.size" :style="`fill: ${options.fill}; stroke: ${options.stroke}; stroke-width: ${options.strokeWidth};`">
            <use :xlink:href="`#${options.id}`"></use>
        </svg>
    </div>
</template>

<script>
export default {
    props: ['attr'],
    data () {
        return {
            defaults: {
                size: 50,
                fill: '#000000',
                stroke: '#000000',
                strokeWidth: 0
            }
        }
    },
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

