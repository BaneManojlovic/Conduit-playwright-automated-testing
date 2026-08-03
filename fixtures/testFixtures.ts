import { test as base } from 'playwright-bdd';
import { User, uniqueUser } from './testData';

export const test = base.extend<{ newUser: User}>({
    newUser: async ({}, use) => {
        await use(uniqueUser());
    },
});