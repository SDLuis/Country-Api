import { Request, Response } from 'express'
import * as countryEntry from '../services/country.service'

export const findCountry = (req: Request, res: Response): object => {
  const post = countryEntry.findCountryByName(req.params.name)

  return (post != null)
    ? res.send(post)
    : res.sendStatus(404)
}

export const getCountry = (_req: Request, res: Response): void => {
  res.send(countryEntry.getCountry())
}
