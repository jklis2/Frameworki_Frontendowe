export interface User {
    id: number,
    name: string,
    username: string,
    email: string, 
    phone: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string
        geo: {
            lat: string,
            lng: string
        }
    },
    company: {
        name: string,
        website: string,
        catchPhrase: string, 
        bs: string
    }
}