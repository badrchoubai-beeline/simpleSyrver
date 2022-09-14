import express from "express";
import {createSimpleServer} from "./src/createSimpleServer.js";
import {useSimpleRoutes} from "./src/routes.js";

await createSimpleServer(
    express,
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

