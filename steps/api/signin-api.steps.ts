import { createBdd } from 'playwright-bdd';
import { expect, APIResponse } from '@playwright/test';
import { AuthApiClient } from '../../api-clients/authApiClient';


const { Given, When, Then } = createBdd();

let response: APIResponse;
let responseBody: any;

When('user sign in via API with valid credentials', async ({ request}) => {
    const apiClient = new AuthApiClient(request);
    response = await apiClient.signIn({
        username: '',
        email: 'banetest@gmail.com',
        password: 'Test123!'
    });
    responseBody = await response.json();
});

When('the response status is 200', async ({ }) => {
  expect(response.status()).toBe(200);
});

Then('the user contains valid user token', async ({}) => {
  expect(responseBody.user.token).toBeTruthy();
});

When('user try to signs in via API with all invalid credentials', async ({ request }) => {
  const apiClient = new AuthApiClient(request);
  response = await apiClient.signIn({
    username: ``,
    email: `x`,
    password: `x`
  });
  responseBody =  await response.json();
  console.log(response);
});

When('the response status is 403', async ({ }) => {
  expect(response.status()).toBe(403);
});

Then('the response contains error message', async ({}) => {
  expect(Object.keys(responseBody.errors).length > 0).toBeTruthy();
});

When('user try to signs in via API with invalid email', async ({ request }) => {
  const apiClient = new AuthApiClient(request);
  response = await apiClient.signIn({
    username: ``,
    email: `x`,
    password: `x`
  });
  responseBody =  await response.json();
  console.log(response);
});

When('user try to signs in via API with invalid password', async ({ request }) => {
  const apiClient = new AuthApiClient(request);
  response = await apiClient.signIn({
    username: ``,
    email: `x`,
    password: `x`
  });
  responseBody =  await response.json();
  console.log(response);
});