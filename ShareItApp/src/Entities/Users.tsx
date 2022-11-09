import Address from './Address'

interface User {
    id: number,
    name: string,
    username: string, 
    email: string, 
    phone: string,
    website: string,
    address: []
}

export default User