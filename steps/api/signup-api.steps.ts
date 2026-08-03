import { createBdd } from 'playwright-bdd';
import { expect, APIResponse } from '@playwright/test';
import { AuthApiClient } from '../../api-clients/authApiClient';


const { Given, When, Then } = createBdd();

let response: APIResponse;
let responseBody: any;
let username: string;
let email: string;

When('user signs up via API with valid credentials', async ({ request }) => {
  const apiClient = new AuthApiClient(request);
  const uniqueId = Date.now();
  username = `baki${uniqueId}`;
  email = `baki${uniqueId}@gmail.com`;
  response = await apiClient.signUp({ 
    username, 
    email, 
    password: 'Test123!'});
  responseBody =  await response.json();
});

When('user signs up via API with credentials with repeated username', async ({ request }) => {
  const apiClient = new AuthApiClient(request);
  const uniqueId = Date.now();
  response = await apiClient.signUp({ 
    username: username, 
    email:`baki${uniqueId}@gmail.com`, 
    password:'Test123!'});
  responseBody =  await response.json();
});

When('user signs up via API with credentials with repeated email', async ({ request }) => {
  const apiClient = new AuthApiClient(request);
  const uniqueId = Date.now();
  response = await apiClient.signUp({
    username: `baki${uniqueId}`,
    email,
    password: 'Test123!'
  });
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
  response = await apiClient.signUp({
    username: `x`,
    email: `x`,
    password: `x`
  });
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
  response = await apiClient.signUp({
    username: `x`,
    email: `baki${uniqueId}@gmail.com`,
    password: 'Test123!'
  });
  responseBody =  await response.json();
  console.log(response);
});

Then('the response contains error invalid username message', async ({}) => {
  expect(responseBody.errors.username[0]).toBe('is too short (minimum is 3 characters)');
});

When('user try to signs up via API with invalid email', async ({ request }) => {
  const apiClient = new AuthApiClient(request);
  const uniqueId = Date.now();
  response = await apiClient.signUp({
    username: `baki${uniqueId}`,
    email: `x`,
    password: 'Test123!'
  });
  responseBody =  await response.json();
  console.log(response);
});

Then('the response contains error invalid email message', async ({}) => {
  expect(responseBody.errors.email[0]).toBe('is invalid');
});

When('user try to signs up via API with invalid password', async ({ request }) => {
  const apiClient = new AuthApiClient(request);
  const uniqueId = Date.now();
  response = await apiClient.signUp({
    username: `baki${uniqueId}`,
    email: `baki${uniqueId}@gmail.com`,
    password: 'x'
  });
  responseBody =  await response.json();
  console.log(response);
});

Then('the response contains error invalid password', async ({}) => {
  expect(responseBody.errors.password[0]).toBe('is too short (minimum is 8 characters)');
});

Then('the response contains error username taken', async ({}) => {
  expect(responseBody.errors.username[0]).toBe('has already been taken');
});

Then('the response contains error email taken', async ({}) => {
  expect(responseBody.errors.email[0]).toBe('has already been taken');
});