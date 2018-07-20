<template>
    <header id="header">
        <div class="inner">
            <h1 class="logo"><nuxt-link to="/">Simplizm</nuxt-link></h1>
            <nav class="gnb">
                <button class="toggle"></button>
                <ul>
                    <li><nuxt-link to="/template">template</nuxt-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
#header {padding: 0 calc((100% - 1280px) / 2); margin: 0 auto; background: #f7f7f7;
    .inner {display: flex; width: 100%; height: 100px; padding: 0 20px; align-items: center; justify-content: space-between;
        @include tablet {height: 80px;}
        @include mobile {height: 60px;}
        .logo {font-family: NanumSquare; font-weight: 700; font-size: 30px; color: #000000;}
        .gnb {
            .toggle {display: none;
                @include tablet {display: block; position: relative; width: 40px; height: 20px; text-indent: -9999em;
                    &:before {display: block; content: ''; position: absolute; top: 0; width: 100%; height: 25%; background: #000000;}
                    &:after {display: block; content: ''; position: absolute; top: 75%; width: 100%; height: 25%; background: #000000;}
                }
                @include mobile {width: 24px; height: 12px;}
            }
            ul {
                @include tablet {display: none; position: absolute; top: tv(120);}
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
}
</style>
