export interface IRegisterInput {
    name : 'email' | 'password' | 'username';
    placeholder : string;
    type : string;
    validation : {
        required : boolean;
        minLength? : number;
        maxLength? : number;
        pattern? : RegExp
    }
}