
import { APIRequestContext } from '@playwright/test';
import { User } from '../fixtures/testData';

export class AuthApiClient {

    private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // async signUp(username: string, email: string, password: string) {
  //   return this.request.post('https://conduit-api.bondaracademy.com/api/users', {
  //     data: { user: { username, email, password } },
  //   });
  // }

  async signUp(user: User) {
  return this.request.post('https://conduit-api.bondaracademy.com/api/users', { 
    data: { user } 
  });
}
}
