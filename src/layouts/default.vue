<template>
    <div id="wrap">
        <common-header></common-header>
        <article id="container">
            <nuxt/>
        </article>
    </div>
</template>

<style lang="scss">
#wrap {overflow: hidden; position: relative; min-width: $desktop; min-height: 100vh;
    @include desktop {min-width: auto;}
    #container {width: $desktop; margin: 0 auto; padding: 20px;
        @include desktop {width: 100%; padding: pv(20);}
        @include tablet {padding: tv(30);}
        @include mobile {padding: mv(50) mv(30) mv(100);}
    }
}
</style>

