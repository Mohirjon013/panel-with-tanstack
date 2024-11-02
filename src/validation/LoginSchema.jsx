import * as yup from "yup";

export const LoginSchema = () => {
    return yup.object().shape({
        username:yup.string().required("User name is reuired"),
        useremail:yup.string().email().required("the user email"),
        password:yup.string().min(4, "Min password is 4 charecter").max(8, "Max password is 8 charecter").required("Password is reuired"),
    })
}