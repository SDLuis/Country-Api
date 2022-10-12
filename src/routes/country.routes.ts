import express from 'express'
import * as countryControllers from '../controllers/country.controller'

const router = express.Router()

router.get('/', countryControllers.getCountry)

router.get('/:name', countryControllers.findCountry)

export default router
