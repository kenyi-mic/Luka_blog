import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { Link } from '../../components'
import { Layout } from '../../components/account'
import { userService, alertService } from '../../services'

export default Login

function Login() {
  const router = useRouter()

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { errors } = formState

  function onSubmit({ username, password }) {
    return userService
      .login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || '/'
        router.push(returnUrl)
      })
      .catch(alertService.error)
  }

  return (
    <main>
      <Header />
      <Head>
        <title>Sign In Page</title>
      </Head>
        <div className="card mx-auto my-10 grid w-5/6 grid-cols-1 gap-3 sm:w-4/5 md:w-2/3 lg:w-2/4 lg:gap-6">
          <h4 className="card-header text-center text-2xl font-semibold text-gray-700">
            SigIn
          </h4>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-5">
                <label className="text-xl font-normal text-gray-600">
                  Username:
                </label>
                <input
                  name="username"
                  type="text"
                  className="block w-full border border-gray-200 p-2 outline-none"
                  {...register('username')}
                  id={`form-control ${errors.username ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">
                  {errors.username?.message}
                </div>
              </div>
              <div className="form-group mb-5">
                <label className="text-xl font-normal text-gray-600">
                  Password:
                </label>
                <input
                  name="password"
                  type="password"
                  className="block w-full border border-gray-200 p-2 outline-none"
                  {...register('password')}
                  id={`form-control ${errors.password ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>

              <div className="flex  ">
                <button
                  disabled={formState.isSubmitting}
                  className="btn btn-primary mr-2 bg-indigo-700 py-2 px-4 text-gray-100"
                >
                  {formState.isSubmitting && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                  SigIn
                </button>
                <Link
                  href="/account/register"
                  className="btn btn-link ml-2  pt-5 text-gray-700"
                >
                  Don't have account?{' '}
                  <span className="text-indigo-700">Sign up</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </main>
  )
}
