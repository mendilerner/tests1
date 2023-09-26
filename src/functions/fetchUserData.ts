export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export async function fetchUserData(userId: number): Promise<User | Error> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await response.json();
    if (Object.keys(user).length === 0) return Promise.reject(new Error('the id is not valid'))
    return user;
  } catch (err) {
    return new Error("something get wrong");
  }
}
