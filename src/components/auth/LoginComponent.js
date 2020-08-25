import { useState } from 'react';
import { Login, authenticate } from '../../api/user';
import Router from 'next/router';
import Link from 'next/link';
import { connect } from 'react-redux';
const LoginComponent = (props) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        error: '',
    });

    const { username, password, error, loading, message, showForm } = values;

    // useEffect(() => {
    //     isAuth() && Router.push(`/`);
    // }, []);

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, error: false });
        const user = { username, password };
        Login(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                props.dispatch({
                    type: 'SET_USER_INFO',
                    user: {
                        token: data.token,
                        email: data.email,
                        firstname: data.user.firstname,
                        lastname: data.user.lastname,
                        username: data.user.username,
                        userId: data.user._id,
                        loggedIn: true
                    }
                })
                // save user token to cookie
                // save user info to localstorage
                // authenticate user
                authenticate(data, () => {
                    Router.push(`/`);
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showError = () => (error ? 
    <div className="alert alert-warning bg-white alert-styled-left alert-arrow-left alert-dismissible">
        <button type="button" className="close" data-dismiss="alert"></button>
        <p>{error}</p>
    </div> : '');


    return (
        <div className="page-content">
            <div className="content-wrapper">
                <div className="content d-flex justify-content-center align-items-center">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="card mb-0">
                            <div className="card-body">
                                <div className="text-center mb-3">
                                    <i className="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
                                    <h5 className="mb-0">Login to your account</h5>
                                </div>
                                {showError()}
                                {/* {formik.errors.length > 0 &&
                                    <div className="alert alert-warning bg-white alert-styled-left alert-arrow-left alert-dismissible">
                                        <button type="button" className="close" data-dismiss="alert"><span>×</span></button>
                                        <p>{formik.errors.username}</p>
                                        <p>{formik.errors.password}</p>
                                    </div>
                                } */}

                                <div className="form-group form-group-feedback form-group-feedback-left">
                                    <input type="text" className="form-control" placeholder="Username" name="username" value={username}
                                        onChange={handleChange('username')} />
                                    <div className="form-control-feedback">
                                        <i className="icon-user text-muted"></i>
                                    </div>
                                </div>

                                <div className="form-group form-group-feedback form-group-feedback-left">
                                    <input type="password" className="form-control" placeholder="Password" name="password" value={password}
                                        onChange={handleChange('password')} />
                                    <div className="form-control-feedback">
                                        <i className="icon-lock2 text-muted"></i>
                                    </div>
                                </div>
                                <div className="form-group d-flex align-items-center">
                                    <div className="form-check mb-0">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="uniform-checker" style={{ left: 10, width: 15 }} />
										        Remember
									        </label>

                                    </div>

                                    <a href="login_password_recover.html" className="ml-auto">Forgot password?</a>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Sign in <i className="icon-circle-right2 ml-2"></i></button>
                                </div>

                                <div className="form-group text-center text-muted content-divider">
                                    <span className="px-2">or sign in with</span>
                                </div>

                                <div className="form-group text-center">
                                    <button type="button" className="btn btn-outline bg-indigo border-indigo text-indigo btn-icon rounded-round border-2"><i className="icon-facebook"></i></button>
                                    <button type="button" className="btn btn-outline bg-pink-300 border-pink-300 text-pink-300 btn-icon rounded-round border-2 ml-2"><i className="icon-dribbble3"></i></button>
                                    <button type="button" className="btn btn-outline bg-slate-600 border-slate-600 text-slate-600 btn-icon rounded-round border-2 ml-2"><i className="icon-github"></i></button>
                                    <button type="button" className="btn btn-outline bg-info border-info text-info btn-icon rounded-round border-2 ml-2"><i className="icon-twitter"></i></button>
                                </div>

                                <div className="form-group text-center text-muted content-divider">
                                    <span className="px-2">Don't have an account?</span>
                                </div>

                                <div className="form-group">
                                    <Link href="/signup"><a className="btn btn-light btn-block" >Sign up</a></Link>
                                </div>
                                <span className="form-text text-center text-muted">By continuing, you're confirming that you've read our <a href="#">Terms &amp; Conditions</a> and <a href="#">Cookie Policy</a></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};


const mapStateToProps = (reduxState) => {
    return {

    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
