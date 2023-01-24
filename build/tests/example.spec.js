"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
let context;
test_1.test.beforeAll(({ playwright }) => __awaiter(void 0, void 0, void 0, function* () {
    context = yield playwright.request.newContext({
        baseURL: 'http://localhost:5000'
    });
}));
test_1.test.afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield context.dispose();
}));
(0, test_1.test)('Api show corret info', () => __awaiter(void 0, void 0, void 0, function* () {
    const country = yield context.get('/country');
    const ID = 1;
    const Name = 'Afghanistan';
    (0, test_1.expect)(country.ok()).toBeTruthy();
    (0, test_1.expect)(yield country.json()).toContainEqual(test_1.expect.objectContaining({
        id: ID,
        name: Name
    }));
}));
(0, test_1.test)('api show corret country by name', () => __awaiter(void 0, void 0, void 0, function* () {
    const ID = 1;
    const Name = 'Afghanistan';
    const country = yield context.get(`/country/${Name}`);
    (0, test_1.expect)(country.ok()).toBeTruthy();
    (0, test_1.expect)(yield country.json()).toHaveProperty('id', ID);
    (0, test_1.expect)(yield country.json()).toHaveProperty('name', Name);
}));
