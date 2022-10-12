import { test, expect } from '@playwright/test'

let context: any

test.beforeAll(async ({ playwright }) => {
  context = await playwright.request.newContext({
    baseURL: 'http://localhost:5000'
  })
})

test.afterAll(async () => {
  await context.dispose()
})

test('Api show corret info', async () => {
  const country = await context.get('/country')
  const ID: number = 1
  const Name: string = 'Afghanistan'

  expect(country.ok()).toBeTruthy()
  expect(await country.json()).toContainEqual(
    expect.objectContaining({
      id: ID,
      name: Name
    })
  )
})
test('api show corret country by name', async () => {
  const ID: number = 1
  const Name: string = 'Afghanistan'
  const country = await context.get(`/country/${Name}`)

  expect(country.ok()).toBeTruthy()
  expect(await country.json()).toHaveProperty('id', ID)
  expect(await country.json()).toHaveProperty('name', Name)
})
