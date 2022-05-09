import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from '../../components';
import { Layout } from '../../components/account';
import { userService, alertService } from '../../services';

export default Login;

function Login() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        return userService.login(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch(alertService.error);
    }

    return (
        <Layout>
            <div className="card grid grid-cols-1 gap-3 lg:gap-6 lg:w-2/4 mx-auto my-10">
                <h4 className="card-header text-center text-2xl text-gray-700 font-semibold">Login</h4>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-5">
                            <label className="text-xl text-gray-600 font-normal">Username:</label>
                            <input name="username" type="text" className="block p-2 w-full border-gray-200 ouline-none border" {...register('username')} id={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group mb-5">
                            <label className="text-xl text-gray-600 font-normal">Password:</label>
                            <input name="password" type="password" className="block p-2 w-full border-gray-200 ouline-none border" {...register('password')} id={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>

                        <div className="flex  ">
                        <button disabled={formState.isSubmitting} className="btn btn-primary mr-2 py-2 px-4 bg-blue-500 text-gray-100">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </button>
                        <Link href="/account/register" className="btn btn-link ml-2">Register</Link>
                        </div>
                        
                    </form>
                </div>
            </div>
        </Layout>
    );
}
