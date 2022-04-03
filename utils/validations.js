import * as Yup from 'yup'

export const authSchema = Yup.object({
    email: Yup.string()
        .required('Sorry you need an email')
        .email('this is not a valid email'),
    password: Yup.string()
        .required('Sorry you need a password')
        .max(10, '10 char max')
})