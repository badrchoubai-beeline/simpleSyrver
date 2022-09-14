import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
dotenv.config({})

import {createSimpleServer} from "./createSimpleServer.js";
import {useSimpleRoutes} from "./routes.js";

await createSimpleServer(
    express,
    [
        cors
    ],
    useSimpleRoutes()
).then(app => {
    const PORT = process.env.PORT ?? 8090
    app.listen(PORT, () => {
        console.log(`Simply listening on http://localhost:${PORT}`)
    })
}).catch(error => {
    const errorType = error.message.split(":")[0]
    switch (errorType) {
        default:
            console.error(`
            There was an error in simple server
            ${error.message}
            `)
    }
})

