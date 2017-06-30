import {
  LOGIN_REQUESTING,
} from './constants'

// In order to perform an action of type LOGIN_REQUESTING
// we need an email and password
const loginRequest = ({ email, password }) => ({
    type: LOGIN_REQUESTING,
    email,
    password
})

// Since it's the only one here
export default loginRequest
