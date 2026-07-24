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

When('user try to signs up via API with all invalid credentials', async ({ request }) => {
  const apiClient = new AuthApiClient(request);
  const uniqueId = Date.now();
  response = await apiClient.signUp(
    `x`, 
    `x`, 
    'x');
  responseBody =  await response.json();
  console.log(response);
});

When('the response status is 422', async ({ }) => {
  expect(response.status()).toBe(422);
});

Then('the response contains error messages', async ({}) => {
  expect(Object.keys(responseBody.errors).length > 0).toBeTruthy();
});

When('user try to signs up via API with invalid username', async ({ request }) => {
  const apiClient = new AuthApiClient(request);
  const uniqueId = Date.now();
  response = await apiClient.signUp(
    `x`, 
    `baki${uniqueId}@gmail.com`, 
    'Test123!');
  responseBody =  await response.json();
  console.log(response);
});

Then('the response contains error invalid username message', async ({}) => {
  expect(responseBody.errors.username[0]).toBe('is too short (minimum is 3 characters)');
});

When('user try to signs up via API with invalid email', async ({ request }) => {
  const apiClient = new AuthApiClient(request);
  const uniqueId = Date.now();
  response = await apiClient.signUp(
    `baki${uniqueId}`, 
    `x`, 
    'Test123!');
  responseBody =  await response.json();
  console.log(response);
});

Then('the response contains error invalid email message', async ({}) => {
  expect(responseBody.errors.email[0]).toBe('is invalid');
});

When('user try to signs up via API with invalid password', async ({ request }) => {
  const apiClient = new AuthApiClient(request);
  const uniqueId = Date.now();
  response = await apiClient.signUp(
    `baki${uniqueId}`, 
    `baki${uniqueId}@gmail.com`, 
    'x');
  responseBody =  await response.json();
  console.log(response);
});

Then('the response contains error invalid password', async ({}) => {
  console.log('Baki ====== ', responseBody.errors);
  expect(responseBody.errors.password[0]).toBe('is too short (minimum is 8 characters)');
});