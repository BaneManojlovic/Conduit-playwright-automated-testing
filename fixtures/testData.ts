
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