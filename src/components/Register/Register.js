import './Register.scss';
import { useHistory } from "react-router-dom";

const Register = (props) => {
    let history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    }

    return (
        <div className="register-container">
            <div className="container">
                <div className='brand col-12 d-block col-sm-0 d-sm-none text-center'>
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
                        <div className='form-group'>
                            <label>Email:</label>
                            <input type="text" className='form-control' placeholder='Email address' />
                        </div>
                        <div className='form-group'>
                            <label>Phone numer:</label>
                            <input type="text" className='form-control' placeholder='Phone numer' />
                        </div>
                        <div className='form-group'>
                            <label>Username:</label>
                            <input type="text" className='form-control' placeholder='Username' />
                        </div>
                        <div className='form-group'>
                            <label>Password:</label>
                            <input type="password" className='form-control' placeholder='Password' />
                        </div>
                        <div className='form-group'>
                            <label>Re-enter password:</label>
                            <input type="password" className='form-control' placeholder='Re-enter password' />
                        </div>
                        <button className='btn btn-primary'>Register</button>
                        <hr/>
                        <div className='text-center'>
                            <button className='btn btn-success' onClick= {() => handleLogin()}>
                                    Already have an account. Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;