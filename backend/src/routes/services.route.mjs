import express from 'express'

import {addService  , getService , updateService , deleteService} from '../controllers/services.controller.mjs'

const services_router = express.Router()

services_router.get('/services', getService)
services_router.post('/services', addService)
services_router.put('/services', updateService)
services_router.delete('/services/:id', deleteService)

export default services_router