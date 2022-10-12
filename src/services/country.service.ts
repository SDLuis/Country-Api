import countryData from '../../data/countries.json'
import { countryEntry, countryWithOmitFields } from '../types'

const countries: countryEntry[] = countryData as countryEntry[]

export const getCountry = (): countryWithOmitFields[] => {
  return countries.map(({ id, name, latitude, longitude, cities }) => {
    return {
      id,
      name,
      latitude,
      longitude,
      cities
    }
  })
}
export const findCountryByName = (Name: string): countryWithOmitFields | undefined => {
  const country = countries.find((c) => c.name === Name)
  if (country != null) {
    const {
      iso3,
      iso2,
      numericCode,
      phoneCode,
      capital,
      currency,
      currencyName,
      currencySymbol,
      tld,
      native,
      region,
      subregion,
      timezones,
      translations,
      emoji,
      emojiU, ...countryWithOmitFields
    } = country
    return countryWithOmitFields
  }
}
