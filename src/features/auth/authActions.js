import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants";

export function SignInUser(payload){
    return {
        type:SIGN_IN_USER,
        payload
    }
}

export function SignOutUser(){
    return {
        type:SIGN_OUT_USER
    }
}