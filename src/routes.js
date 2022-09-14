export const useSimpleRoutes = (apiPath = '') => ({
  [`/${apiPath}`]: {
    get: (request, response) => {
      response.status(200).send({
        message: 'Simple GET request/response mock'
      })
    },
    put: (request, response) => {
      response.status(201).send({
        message: 'Simple PUT request/response mock'
      })
    },
    post: (request, response) => {
      response.status(201).send({
        message: 'Simple POST request/response mock'
      })
    },
    delete: (request, response) => {
      response.status(204).send({
        message: 'Simple DELETE request/response mock'
      })
    }
  },
  '/health': {
    get: (request, response) => {
      response.send('Healthy').status(200)
    }
  }
})
