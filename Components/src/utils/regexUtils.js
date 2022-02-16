const EMAIL_REGEX = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'

const isValidEmail = (email) => {
    return new RegExp(EMAIL_REGEX).test(email)
}

export {
    isValidEmail
}