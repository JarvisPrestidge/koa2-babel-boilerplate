import koa from 'koa'

const app = new koa()
    .use(ctx => {
        ctx.body = 'Hello world!'
    })

export default app