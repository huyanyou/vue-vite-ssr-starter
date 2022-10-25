import createApp from "./main";

const { app, router } = createApp();
// app.mount("#app");

router.beforeResolve(async (to, from, next) => {
    console.log('to', to)
    console.log('from', from)
    next()
})
router.isReady().then(() => {
    app.mount("#app");
});