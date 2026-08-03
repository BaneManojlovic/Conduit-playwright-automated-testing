
export interface User {
    username: string;
    email: string;
    password: string;
}

export function uniqueUser(): User {
    const timestamp = Date.now();

    return {
        username: `baki${timestamp}`,
        email: `baki${timestamp}@gmail.com`,
        password:  'Test123!'
    };
}

export const existingUser: User = {
    username: 'BaneTest',
    email: 'banetest@gmail.com',
    password: 'Test123!'
};