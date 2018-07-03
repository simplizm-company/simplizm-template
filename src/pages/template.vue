<template>
    <div id="template">
        <nav id="tnb">
            <ul>
                <li><nuxt-link to="/template/button">button</nuxt-link></li>
                <li><nuxt-link to="/template/input">input</nuxt-link></li>
                <li><nuxt-link to="/template/icons">icons</nuxt-link></li>
                <li><nuxt-link to="/template/title">title</nuxt-link></li>
            </ul>
        </nav>

        <div id="viewer">
            <nuxt-child/>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'template',
    computed: {
        windowScrollTop () {
            return this.$store.state.window.scrollTop;
        },
        windowWidth () {
            return this.$store.state.window.width;
        }
    },
    watch: {
        windowScrollTop () {
            console.log('scroll watch', this.windowScrollTop);
        },
        windowWidth () {
            console.log('resize window');
        }
    },
    mounted () {
        console.log(this.windowScrollTop)
    }
}
</script>

<style>
#template {padding: 50px 50px 50px 350px;}

#tnb {overflow-y: scroll; position: fixed; top: 0; bottom: 0; left: 0; width: 300px; padding: 30px;}
#tnb ul li {margin: 15px 0 0;}
#tnb ul li:first-child {margin-top: 0;}
#tnb ul li a {display: block; font-weight: 700; font-size: 17px;}
</style>
