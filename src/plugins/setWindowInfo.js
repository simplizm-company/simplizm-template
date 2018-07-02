export default function (context) {
    $(window).on({
        'load': () => {
            context.store.state.window.scrollTop = $(window).scrollTop();
            context.store.state.window.scrollLeft = $(window).scrollLeft();
            context.store.state.window.width = $(window).width();
            context.store.state.window.height = $(window).height();
        },
        'resize': () => {
            context.store.state.window.width = $(window).width();
            context.store.state.window.height = $(window).height();
        },
        'scroll': () => {
            context.store.state.window.scrollTop = $(window).scrollTop();
            context.store.state.window.scrollLeft = $(window).scrollLeft();
        }
    });
}