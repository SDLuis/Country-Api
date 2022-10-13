import express from 'express'
import countryRouter from './routes/country.routes'
const app = express()
app.use(express.json())
/* eslint-disable */
const PORT = process.env.PORT || 5000;

app.use('/country', countryRouter);

app.get("/", (_req, res) => {
  res.status(200).send("WELCOME!!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})