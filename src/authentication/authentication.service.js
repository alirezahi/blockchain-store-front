const fakeToken = '1234'
const authenticationService = {
    login: async (email, password) => fakeToken,
    signup: async (firstName, lastName, email, password) => fakeToken
}

export default authenticationService