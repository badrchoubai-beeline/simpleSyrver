import cors from "cors"
import dotenv from 'dotenv'

dotenv.config({})

export const createSimpleServer = async (express, routes) => {
    const app = express()

    // Setup middleware
    app.use(cors())
    
    // Setup routes
    for (const path in routes) {
        const appRoute = app.route(path)
        for (const method in routes[path]) {
            const handler = routes[path][method]
            appRoute[method](handler)
        }
    }
    
    return app
}