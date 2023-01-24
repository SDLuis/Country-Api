"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCountryByName = exports.getCountry = void 0;
const countries_json_1 = __importDefault(require("../../data/countries.json"));
const countries = countries_json_1.default;
const getCountry = () => {
    return countries.map(({ id, name, latitude, longitude, cities }) => {
        return {
            id,
            name,
            latitude,
            longitude,
            cities
        };
    });
};
exports.getCountry = getCountry;
const findCountryByName = (Name) => {
    const country = countries.find((c) => c.name === Name);
    if (country != null) {
        const { iso3, iso2, numericCode, phoneCode, capital, currency, currencyName, currencySymbol, tld, native, region, subregion, timezones, translations, emoji, emojiU } = country, countryWithOmitFields = __rest(country, ["iso3", "iso2", "numericCode", "phoneCode", "capital", "currency", "currencyName", "currencySymbol", "tld", "native", "region", "subregion", "timezones", "translations", "emoji", "emojiU"]);
        return countryWithOmitFields;
    }
};
exports.findCountryByName = findCountryByName;
