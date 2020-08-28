import React, { useRef, useState, useEffect } from 'react';
import { getCookie } from '../../../helpers/help';
import { useForm } from 'react-hook-form'
import Sidebar from '../SidebarComponent';
import { connect } from 'react-redux';
import { updateUser } from '../../../api/user';
import  Router  from 'next/router';
const UpdateUserComponent = (props) => {
    const { register, errors, handleSubmit, watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => {
        const _id = props.adminUpdateUser._id
        const username = props.adminUpdateUser.username
        const datas = {
            _id: _id,
            username: username,
            firstname: data.firstname,
            lastname: data.lastname,
            password: data.password
        }
        updateUser(datas).then((res) => {
            alert(res.message);
            Router.push('/admin/listuser')
        })
    }
    const profileUpdateForm = () => (
        <div className="body">
            <div className="page-content">
                <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md">
                    <div className="sidebar-mobile-toggler text-center">
                        <a href="#" className="sidebar-mobile-main-toggle">
                            <i className="icon-arrow-left8"></i>
                        </a>
				                Navigation
				        <a href="#" className="sidebar-mobile-expand">
                            <i className="icon-screen-full"></i>
                            <i className="icon-screen-normal"></i>
                        </a>
                    </div>
                    <div className="sidebar-content">
                        {/* User menu */}
                        <Sidebar />
                    </div>

                </div>

                {/* Main content  */}

                <div className="content-wrapper">
                    <div className="card">
                        <div className="card-header bg-transparent">
                            <h5 className="card-title">Cập nhật thông tin</h5>
                        </div>
                        <div className="card-body">
                            <form data-select2-id="45" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label">Họ</label>
                                    <div className="col-lg-9">
                                        <input type="text" className="form-control" placeholder="Họ của bạn" name="firstname"
                                            ref={register({ required: true })} defaultValue={props.adminUpdateUser.firstname}
                                        />
                                        <span className="form-text text-danger">
                                            <p> {errors.firstname && "Họ không được để trống !!!"}</p></span>

                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label">Tên</label>
                                    <div className="col-lg-9">
                                        <input type="text" className="form-control" placeholder="Tên của bạn" name="lastname" defaultValue={props.adminUpdateUser.lastname}
                                            ref={register({ required: true })}
                                        />

                                        <span className="form-text text-danger">
                                            <p>{errors.lastname && "Tên không được để trống !!!"}</p></span>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label">Mật khẩu </label>
                                    <div className="col-lg-9">
                                        <input type="password" className="form-control" placeholder="Password" name="password"
                                            ref={register({
                                                required: true, minLength: 6, maxLength: 15
                                            })}
                                        />
                                        <span className="form-text text-danger">
                                            {errors.password?.type === "required" &&
                                                "Mật khẩu không được để trống !!!"}
                                            <p> {errors.password?.type === "minLength" &&
                                                "Mật khẩu không được nhỏ hơn 6 ký tự"}</p>
                                            <p> {errors.password?.type === "maxLength" &&
                                                "Mật khẩu không được vượt quá 15 ký tự"}</p>
                                        </span>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label">Nhập lại mật khẩu </label>
                                    <div className="col-lg-9">
                                        <input type="password" className="form-control" placeholder="Confirm password" name="confirm_password"
                                            ref={register({
                                                required: true, minLength: 6, maxLength: 15,
                                                validate: value =>
                                                    value === password.current || "Mật khẩu và nhập lại mật khẩu không trùng nhau!!!"
                                            })}
                                        />
                                        <span className="form-text text-danger">
                                            {errors.confirm_password?.type === "required" &&
                                                "Nhập lại mật khẩu không được để trống !!!"}
                                            <p> {errors.confirm_password?.type === "minLength" &&
                                                "Nhập lại mật khẩu không được nhỏ hơn 6 ký tự"}</p>
                                            <p> {errors.confirm_password?.type === "maxLength" &&
                                                "Nhập lại mật khẩu không được vượt quá 15 ký tự"}</p>
                                            {errors.confirm_password && <p> {errors.confirm_password.message}</p>}
                                        </span>

                                    </div>
                                </div>

                                {/* <div className="form-group row">
                                    <label className="col-lg-3 col-form-label">Hình ảnh </label>
                                    <div className="col-lg-9">
                                        <label className="file">
                                            <input type="file" id="file" aria-label="File browser example" />
                                            <span className="file-custom"></span>
                                        </label>
                                    </div>
                                </div> */}
                                <div className="text-right">
                                    <button type="submit" className="btn btn-primary">Submit form <i className="icon-paperplane ml-2"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );

    return (
        <React.Fragment>
            {profileUpdateForm()}
        </React.Fragment>
    );
};


const mapStateToProps = (state) => {
    return {
        adminUpdateUser: state.AdminUserEditing
    }
}



export default connect(mapStateToProps, null)(UpdateUserComponent);
