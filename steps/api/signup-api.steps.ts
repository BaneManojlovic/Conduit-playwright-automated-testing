import { createBdd } from 'playwright-bdd';
import { expect, APIResponse } from '@playwright/test';
import { AuthApiClient } from '../../api-clients/authApiClient';

const { Given, When, Then } = createBdd();

let response: APIResponse;
let responseBody: any;

When('user signs up via API with valid credentials', async ({ request }) => {
  const apiClient = new AuthApiClient(request);
  const uniqueId = Date.now();
  response = await apiClient.signUp(
    `baki${uniqueId}`, 
    `baki${uniqueId}@gmail.com`, 
    'Test123!');
  responseBody =  await response.json();
});

When('the response status is 201', async ({ }) => {
  expect(response.status()).toBe(201);
});

Then('the response contains a new user token', async ({}) => {
  expect(responseBody.user.token).toBeTruthy();
});
