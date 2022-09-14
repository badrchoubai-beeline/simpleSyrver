export const useSimpleRoutes = (apiPath='') => ({
  [`/${apiPath}`]: {
    get: (request, response) => {
      response
          .send({
            "message": "Simple GET request/response mock",
          })
          .status(200)
    },
    put: (request, response) => {
      response
          .send({
            "message": "Simple PUT request/response mock",
          })
          .status(201)
    },
    post: (request, response) => {
      response
          .send({
            "message": "Simple POST request/response mock",
          })
          .status(201)
    },
    delete: (request, response) => {
      response
          .send({
            "message": "Simple DELETE request/response mock",
          })
          .status(204)
    },
  },
  '/health': {
    get: (request, response) => {
      response.send('Healthy').status(200)
    }
  }
})