import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
// import { render } from './src/entry-server'


export async function createSSRServer() {
    // const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
    const app = express();
    const vite = await createServer({
        root: process.cwd(),
        server: {
            middlewareMode: true
        },
        appType: 'custom',
    });
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    app.use(vite.middlewares);
    app.use(express.static(path.resolve('./'), { index: false }));
    app.use('*', async (req, res) => {
        console.log('进入了')
        const url = req.originalUrl
        // const html = await render(url);
        // res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template)
        // const appHtml = await render(url);
        let render = (await vite.ssrLoadModule('/src/entry-server.ts')).render;
        console.log('222', url)
        const appHtml = await render(url);
        const html = template.replace(`<!--ssr-outlet-->`, appHtml);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    });

    app.listen(3001, () => {
        console.log('http://localhost:3001');
    });
}

createSSRServer()