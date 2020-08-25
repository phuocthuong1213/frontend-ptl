import React, { useState } from 'react';
import { getCookie } from '../../../helpers/help';
import Sidebar from '../SidebarComponent';
const UpdateUserComponent = () => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        password: '',
        error: false,
        success: false,
        avatar: '',
        userData: ''
    });

    const token = getCookie('token');
    const { firstname, lastname, password, error, success, avatar, userData } = values;

    const init = () => {

    };

   
    const handleChange = name => e => {

    };

    const handleSubmit = e => {

    };
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
                            <form data-select2-id="45">
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label">Họ</label>
                                    <div className="col-lg-9">
                                        <input type="text" className="form-control" placeholder="Họ của bạn" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label">Tên</label>
                                    <div className="col-lg-9">
                                        <input type="text" className="form-control" placeholder="Tên của bạn" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label">Mật khẩu </label>
                                    <div className="col-lg-9">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label">Nhập lại mật khẩu </label>
                                    <div className="col-lg-9">
                                        <input type="password" className="form-control" placeholder="Confirm password" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label">Hình ảnh </label>
                                    <div className="col-lg-9">
                                        <label className="file">
                                            <input type="file" id="file" aria-label="File browser example" />
                                            <span className="file-custom"></span>
                                        </label>
                                    </div>
                                </div>
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

export default UpdateUserComponent;