import * as yup from "yup"

export const registerSchema = yup.object({
    username: yup.string().min(3 , 'min length of username is 3').max(22 , 'max length of username is 22').required('Username is required'),
    email: yup.string().required('Email is required').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ , 'Not a valid email address'),
    password : yup.string().min(6 , 'min length of password is 6').required('Password is required')
}).required()