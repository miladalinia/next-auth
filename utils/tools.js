import {compare, hash} from 'bcryptjs';

export const passwordCheck = async (password, hashedPassword) => {
    const valid = await compare(password, hashedPassword);
    return valid;
}

export const passwordHash = async (password) => {
    const hashPassword = await hash(password, 10);
    return hashPassword;
}


export const errorHelper = (formik, value) => ({
    error: formik.errors[value] && formik.touched[value] ? true : false,
    helperText: formik.errors[value] && formik.touched[value] ? formik.errors[value] : null
});