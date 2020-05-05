'use strict'

// ------------------------------------------------------------------
// | [requirements]
// ------------------------------------------------------------------

require('dotenv').config()

const fastify = require('fastify')({
    logger: true,
    pluginTimeout: 30000,
})

const cors = require('fastify-cors', {
    origin: true,
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
})
fastify.register(cors)

const dev = false // /(dev)/i.test(process.env.PRODUCTION)

const NextJS = require('next')({
    dev,
    quiet: !dev,
})

// ------------------------------------------------------------------
// | [register]
// ------------------------------------------------------------------

fastify.register((fastify, opts, next) => {
    NextJS.prepare()
        .then(() => {
            if (dev) {
                fastify.get('/_next/*', (req, reply) => {
                    return NextJS.handleRequest(req.req, reply.res).then(() => {
                        reply.sent = true
                    })
                })
            }

            fastify.all('/*', (req, reply) => {
                return NextJS.handleRequest(req.req, reply.res).then(() => {
                    reply.sent = true
                })
            })

            fastify.setNotFoundHandler((request, reply) => {
                return NextJS.render404(request.req, reply.res).then(() => {
                    reply.sent = true
                })
            })

            next()
        })
        .catch((err) => next(err))
})

// ------------------------------------------------------------------
// | [run]
// | run out the serve
// ------------------------------------------------------------------

const start = async () => {
    // handle with errors
    try {
        //await fastify.listen(8080)
        await fastify.listen({
            port: process.env.PORT || 8080,
            host: process.env.HOST || '127.0.0.1',
        })
        fastify.log.info(`server listening on ${process.env.DOMAIN_LOCAL_HOST}`)
    } catch (error) {
        console.log({
            error,
        })
        fastify.log.error(error)
        process.exit(1)
    }
}

start()
