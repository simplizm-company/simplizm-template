<script>
export default {
    props: {
        tag: {
            default: 'div'
        }
    },
    render (createElement) {
        return createElement(
            this.tag,
            {
                class: 'cut-text-tag'
            },
            [
                createElement('div', this.$slots.default)
            ]
        );
    }
}
</script>

<style lang="scss" scoped>
.cut-text-tag {display: flex;
    > div {display: flex; align-items: baseline; margin: -0.5ex 0;}
}
</style>

