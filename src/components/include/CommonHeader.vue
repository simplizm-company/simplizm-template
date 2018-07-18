<template>
    <header id="header">
        <h1 class="logo"><nuxt-link to="/">Simplizm</nuxt-link></h1>
        <nav class="gnb">
            <ul>
                <li><nuxt-link to="/template">template</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    
}
</script>


<style lang="scss">
#header {display: flex; max-width: $desktop; height: 100px; padding: 0 20px; margin: 0 auto; align-items: center; justify-content: space-between; background: #f7f7f7;
    @include desktop {height: pv(100); padding: 0 pv(20);}
    @include tablet {height: tv(120); padding: 0 tv(20);}
    @include mobile {height: mv(100); padding: 0 mv(20);}
    .logo {font-weight: 700; font-size: 30px; color: #000000;
        @include desktop {font-size: pv(30);}
        @include tablet {font-size: tv(30);}
        @include mobile {font-size: mv(36);}
    }
    .gnb {
        ul {
            li {
                a {display: block; font-size: 24px;
                    @include desktop {font-size: pv(24);}
                    @include tablet {font-size: tv(28);}
                    @include mobile {font-size: mv(34);}
                }
            }
        }
    }
}
</style>
