
export const createSimpleServer = async (express, middlewares, routes) => {
    console.log(express)
    const app = express()
    
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