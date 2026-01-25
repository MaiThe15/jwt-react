import './Login.scss';

const Login = (props) => {
    return (
        <div className="login-container">
            <div className="container">
                <div className='brand col-12 d-block col-sm-0 d-sm-none'>
                    JWT & REACT
                </div>
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <div className='brand'>
                            JWT & REACT
                        </div>
                        <div className='detail'>
                            Just learning how to make a web with jwt and react
                        </div>
                    </div>
                    <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
                        <input type="text" className='form-control' placeholder='Email address or phone number' />
                        <input type="password" className='form-control' placeholder='Password' />
                        <button className='btn btn-primary'>Login</button>
                        <span className='text-center'>
                            <a className="forgot-password" href="#">
                                Forgot your password?
                            </a>
                        </span>
                        <hr/>
                        <div className='text-center'>
                            <button className='btn btn-success'>Create new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;