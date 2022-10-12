export interface countryEntry {
  'id': 1
  'name': string
  'iso3': string
  'iso2': string
  'numericCode': string
  'phoneCode': string
  'capital': string
  'currency': string
  'currencyName': string
  'currencySymbol': string
  'tld': string
  'native': string
  'region': string
  'subregion': string
  'timezones': object
  'translations': object
  'latitude': string
  'longitude': string
  'emoji': string
  'emojiU': string
  'cities': object
}

export type countryWithOmitFields = Pick<countryEntry, 'id' | 'name' | 'latitude' | 'longitude' | 'cities'>
