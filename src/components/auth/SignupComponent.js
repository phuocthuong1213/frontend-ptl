import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import * as apiUser from '../../api/user';

export default function SignUpComponent() {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirm_password: '',
            firstname: '',
            lastname: '',
            email: '',
            roleType: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(6)
                .max(15)
                .required(),
            password: Yup
                .string()
                .required()
                .min(6).max(15),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("password")], "Password's not match")
                .required("Confirm password is a required field!"),
            firstname: Yup.string().required().min(6).max(12),
            lastname: Yup.string().required().min(6).max(12),
            email: Yup.string().required().email(),
            roleType: Yup.string().required(),
        }),
        onSubmit: (values) => {
            let user = {
                username: values.username,
                password: values.password,
                firstname: values.firstname,
                lastname: values.lastname,
                email: values.email,
                roleType: values.roleType,
            }   
            apiUser.Register(user).then((res) => {
                window.location = '/login'
            })
        }
    });

    return (
        <React.Fragment>
            <div className="page-content">
                <div className="content-wrapper">
                    <div className="content d-flex justify-content-center align-items-center">
                        <form className="login-form" onSubmit={formik.handleSubmit}>
                            <div className="card mb-0">
                                <div className="card-body">
                                    <div className="text-center mb-3">
                                        <i className="icon-plus3 icon-2x text-success border-success border-3 rounded-round p-3 mb-3 mt-1"></i>
                                        <h5 className="mb-0">Create account</h5>
                                    </div>

                                    <div className="form-group text-center text-muted content-divider">
                                        <span className="px-2">Your credentials</span>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-left">
                                        <input type="text" className="form-control" placeholder="Username" name="username" value={formik.values.username}
                                            onChange={formik.handleChange} />
                                        <div className="form-control-feedback">
                                            <i className="icon-user-check text-muted"></i>
                                        </div>
                                        <span className="form-text text-danger">{formik.errors.username && formik.touched.username && (
                                            <p>{formik.errors.username}</p>)}</span>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-left">
                                        <input type="password" className="form-control" placeholder="Password" name="password" value={formik.values.password}
                                            onChange={formik.handleChange} />
                                        <div className="form-control-feedback">
                                            <i className="icon-user-lock text-muted"></i>
                                        </div>
                                        <span className="form-text text-danger"> {formik.errors.password && formik.touched.password && (
                                            <p>{formik.errors.password}</p>)}</span>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-left">
                                        <input type="password" className="form-control" placeholder="Confirm password" name="confirm_password" value={formik.values.confirm_password}
                                            onChange={formik.handleChange} />
                                        <div className="form-control-feedback">
                                            <i className="icon-user-lock text-muted"></i>
                                        </div>
                                        <span className="form-text text-danger"> {formik.errors.confirm_password && formik.touched.confirm_password && (
                                            <p>{formik.errors.confirm_password}</p>)}</span>
                                    </div>

                                    <div className="form-group text-center text-muted content-divider">
                                        <span className="px-2">Your contacts</span>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-left">
                                        <input name="firstname" type="text" className="form-control" placeholder="First Name" value={formik.values.firstname}
                                            onChange={formik.handleChange} />
                                        <div className="form-control-feedback">
                                            <i className="icon-user text-muted"></i>
                                        </div>
                                        <span className="form-text text-danger"> {formik.errors.firstname && formik.touched.firstname && (
                                            <p>{formik.errors.firstname}</p>)}</span>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-left">
                                        <input name="lastname" type="text" className="form-control" placeholder="Last Name" value={formik.values.lastname}
                                            onChange={formik.handleChange} />
                                        <div className="form-control-feedback">
                                            <i className="icon-user text-muted"></i>
                                        </div>
                                        <span className="form-text text-danger"> {formik.errors.lastname && formik.touched.lastname && (
                                            <p>{formik.errors.lastname}</p>)}</span>
                                    </div>

                                    <div className="form-group form-group-feedback form-group-feedback-left">
                                        <input name="email" type="email" className="form-control" placeholder="Your email" value={formik.values.email}
                                            onChange={formik.handleChange} />
                                        <div className="form-control-feedback">
                                            <i className="icon-mention text-muted"></i>
                                        </div>
                                        <span className="form-text text-danger"> {formik.errors.email && formik.touched.email && (
                                            <p>{formik.errors.email}</p>)}</span>
                                    </div>

                                    <div className="form-group mb-3 mb-md-2">
                                        <div className="form-group text-center text-muted content-divider">
                                            <span className="px-2">Your Selection</span>
                                        </div>

                                        <div className="custom-control custom-radio custom-control-inline  pr-5">
                                            <input type="radio" className="custom-control-input" name="roleType" id="custom_radio_inline_unchecked" value={1}
                                                onChange={formik.handleChange} defaultChecked={formik.values.roleType === 1} />
                                            <label className="custom-control-label text-center text-muted content-divider" htmlFor="custom_radio_inline_unchecked">The Guide</label>
                                        </div>

                                        <div className="custom-control custom-radio custom-control-inline pl-5">
                                            <input type="radio" className="custom-control-input" name="roleType" id="custom_radio_inline_checked" value={2}
                                                onChange={formik.handleChange} defaultChecked={formik.values.roleType === 1} />
                                            <label className="custom-control-label text-center text-muted content-divider" htmlFor="custom_radio_inline_checked">Player</label>
                                        </div>
                                        <span className="form-text text-danger"> {formik.errors.roleType && formik.touched.roleType && (
                                            <p>{formik.errors.roleType}</p>)}</span>
                                    </div>

                                    <button type="submit" className="btn bg-teal-400 btn-block" style={{ marginTop: 15 }}>Register <i className="icon-circle-right2 ml-2"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

