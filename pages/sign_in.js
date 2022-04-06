import {useState} from "react"
import {useFormik} from "formik"
import * as Yup from 'yup'
import {errorHelper} from 'utils/tools'
import {Button, TextField} from "@material-ui/core";
import axios from "axios";
import {signIn} from "next-auth/react";

const SignIn = () => {
    const [formType, setFormType] = useState(false);
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {email: '', password: ''},
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Sorry the email is required')
                .email('This is an invalid email'),
            password: Yup.string()
                .required('Sorry the password is required')
        }),
        onSubmit: (values) => {
            // console.log(values)
            submitForm(values)
        }
    })

    const submitForm = async (values) => {
        if (formType) {
            //register user
            axios.post('/api/auth', values)
                .then(response => {
                    console.log(response.data)
                }).catch(error => {
                console.log(error.response.data)
            })
        } else {
            const result = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password
            });
            console.log(result);
        }
    }

    const handleFormType = async () => {
        setFormType(!formType);
    }

    return (
        <div>
            <h1>{formType ? 'Register' : 'Sign in'}</h1>

            {loading ?
                'Loading'
                :
                <form className="mt-3" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <TextField
                            style={{width: '100%'}}
                            name="email"
                            label="Enter your email"
                            variant="outlined"
                            {...formik.getFieldProps('email')}
                            {...errorHelper(formik, 'email')}
                        />
                    </div>

                    <div className="form-group">
                        <TextField
                            style={{width: '100%'}}
                            name="password"
                            label="Enter your password"
                            type="password"
                            variant="outlined"
                            {...formik.getFieldProps('password')}
                            {...errorHelper(formik, 'password')}
                        />
                    </div>
                    <div className="mb-3">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            size="small"
                        >
                            {formType ? 'Register' : 'Sign in'}
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            onClick={handleFormType}
                        >
                            {formType ? 'Need to Signed in? click here' : 'Need to register? click here'}
                        </Button>
                    </div>
                </form>

            }
        </div>
    )
}

export default SignIn;