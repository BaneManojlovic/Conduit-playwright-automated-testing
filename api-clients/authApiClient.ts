
import { APIRequestContext } from '@playwright/test';
import { User } from '../fixtures/testData';

export class AuthApiClient {

  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async signUp(user: User) {
    return this.request.post('/api/users', {
      data: { user }
    });
  }

  async signIn(user: User) {
    return this.request.post('/api/users/login', {
      data: { user }
    });
  }
}
