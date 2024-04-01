import { IRegisterInput } from "../interfaces";

export const REGISTER_FORM : IRegisterInput[] = [
    {
        name: 'username',
        placeholder: "Username",
        type: 'text',
        validation: {
            required: true, 
            minLength: 3,
            maxLength : 22
        }
    },
    {
        name: 'email',
        placeholder: "Email",
        type: 'email',
        validation: {
            required: true, 
            pattern : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        }
    },
    {
        name: 'password',
        placeholder: "Password",
        type: 'password',
        validation: {
            required: true, 
            minLength : 6
        }
    },
]