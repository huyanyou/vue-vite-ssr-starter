import createApp from "./main";
// import App from './App.vue'
import { renderToString } from 'vue/server-renderer'
export async function render(url: string) {
    const { app, router } = createApp();
    // console.log('=================================')
    console.log('appsssd==', url)
    // router.push({
    //     path: ‘,
    // })
    router.push('about').then(() => {
        console.log('router==', router.currentRoute.value.matched[0].components)
    }).catch(() => {
        console.log('err')
    })
    await router.isReady()
    // const ctx = {}
    const html = await renderToString(app);
    return html
}