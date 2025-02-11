import express from 'express'

import {addService  , getService , updateService , deleteService} from '../controllers/services.controller.mjs'

const router = express.Router()

router.get('/services', getService)
router.post('/services', addService)
router.put('/services/:id', updateService)
router.delete('/services/:id', deleteService)

export default router