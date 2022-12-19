import React from 'react';
import { Link } from 'react-router-dom';

interface Data {
    email: string | undefined;
    userName: string | undefined;
    password: string | undefined;
    cfmPassword: string | undefined
}

interface Errors {
    email: string,
    userName: string,
    password: string,
    cfmPassword: string
}

const SignUpForm: React.FC = () => {
    const emailRef = React.useRef<HTMLInputElement>(null),
        usernameRef = React.useRef<HTMLInputElement>(null),
        passwordRef = React.useRef<HTMLInputElement>(null),
        cfmPasswordRef = React.useRef<HTMLInputElement>(null),
        [errors, setErrors] = React.useState<Errors>({
            email: "",
            userName: "",
            password: "",
            cfmPassword: ""
        }),
        emailRegX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        passwordRegX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/;

    const validateUsername = (userName: string | undefined) => {
        let isValidUsername: boolean = false;

        if (userName === "") {
            setErrors((prevErrors: Errors) => {
                return {
                    ...prevErrors,
                    userName: "Please enter username"
                };
            });
        } else if (userName && userName.length < 6) {
            setErrors((prevErrors: Errors) => {
                return {
                    ...prevErrors,
                    userName: "The username must be atleast 6 characters long"
                };
            });
        } else {
            isValidUsername = true;

            setErrors((prevErrors: Errors) => {
                return {
                    ...prevErrors,
                    userName: ""
                };
            });
        }

        return isValidUsername;
    }

    const validateEmail = (email: string | undefined) => {
        let isValidEmail: boolean = false;

        if (email === "") {
            setErrors((prevErrors: Errors) => {
                return {
                    ...prevErrors,
                    email: "Please enter your email address"
                };
            });
        } else if (email && !emailRegX.test(email)) {
            setErrors((prevErrors: Errors) => {
                return {
                    ...prevErrors,
                    email: "Please enter valid email address"
                };
            });
        } else {
            isValidEmail = true;

            setErrors((prevErrors: Errors) => {
                return {
                    ...prevErrors,
                    email: ""
                };
            });
        }

        return isValidEmail;
    };

    const validatePassword = (password: string | undefined) => {
        let isValidPassword: boolean = false;

        if (password === "") {
            setErrors((prevErrors) => {
                return {
                    ...prevErrors,
                    password: "Please enter password"
                };
            });
        } else if (password && !passwordRegX.test(password)) {
            setErrors((prevErrors) => {
                return {
                    ...prevErrors,
                    password: "Password must be atleast 8 characters long and includes atleast 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character"
                };
            });
        } else {
            setErrors((prevErrors) => {
                isValidPassword = true;

                return {
                    ...prevErrors,
                    password: ""
                };
            });
        }

        return isValidPassword;
    };

    const validateCfmPassword = (password: string | undefined, cfmPassword: string | undefined) => {
        let isValidPassword: boolean = false;

        if (cfmPassword !== password) {
            setErrors((prevErrors: Errors) => {
                return {
                    ...prevErrors,
                    cfmPassword: "Password must be same"
                };
            });
        } else {
            isValidPassword = true;

            setErrors((prevErrors: Errors) => {
                return {
                    ...prevErrors,
                    cfmPassword: ""
                };
            });
        }

        return isValidPassword;
    };

    const signUp = () => {
        const data: Data = {
            email: emailRef.current?.value.trim(),
            userName: usernameRef.current?.value.trim(),
            password: passwordRef.current?.value.trim(),
            cfmPassword: cfmPasswordRef.current?.value.trim()
        },
            isValidEmail: boolean = validateEmail(data.email),
            isValidUsername: boolean = validateUsername(data.userName),
            isValidPassword: boolean = validatePassword(data.password),
            isValidCfmPassword: boolean = validateCfmPassword(data.password, data.cfmPassword),
            isValidData: boolean = isValidEmail && isValidUsername && isValidPassword && isValidCfmPassword;

        if (isValidData) {
            // finally call the REST API here to signup user and handle more errors 
        }
    };

    return (
        <div className="sign-up-form flex flex-col items-center w-full gap-y-7 mt-16">
            <div className="w-[35%]">
                <input type="email" name="email" className="primary-input" placeholder="your email" ref={emailRef} autoComplete='off' autoFocus={true} />
                {errors.email !== "" && <p className="error">{errors.email}</p>}
            </div>

            <div className="w-[35%]">
                <input type="text" name="username" className="primary-input" placeholder="username" ref={usernameRef} autoComplete='off' />
                {errors.userName !== "" && <p className="error">{errors.userName}</p>}
            </div>

            <div className="w-[35%]">
                <input type="password" name="password" className="primary-input" placeholder="password" ref={passwordRef} autoComplete='off' />
                {errors.password !== "" && <p className="error">{errors.password}</p>}
            </div>

            <div className="w-[35%]">
                <input type="password" name="cfmPassword" className="primary-input" placeholder="confirm password" ref={cfmPasswordRef} autoComplete='off' />
                {errors.cfmPassword !== "" && <p className="error">{errors.cfmPassword}</p>}
            </div>

            <button className="btn-secondary w-[220px] h-[50px]" onClick={signUp}>sign up</button>

            <p className="text-white">Already have an account? <Link to='/login' className="text-[#D7BDF2]"> Login.</Link></p>
        </div>
    );
}

export default SignUpForm; 