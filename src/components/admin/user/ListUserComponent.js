import React, { useState, useEffect } from 'react';
import { isAuth } from '../../../helpers/help';
import Sidebar from '../SidebarComponent';
const ListUserComponent = () => {

    const listUserForm = () => (
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
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card text-dark">
                                <div className="page-header page-header-light">
                                    <div className="page-header-content header-elements-md-inline">
                                        <div className="page-title d-flex">
                                            <h4><i className="fas fa-chalkboard-teacher i-space mr-2"></i> <span className="font-weight-semibold">Quản lý thành viên</span></h4>
                                            <a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr className="text-center">
                                                    <th>ID</th>
                                                    <th>Tên người chơi</th>
                                                    <th>Chức vụ</th>
                                                    <th>Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="text-dark text-center">
                                                    <td>1</td>
                                                    <td>Nguyễn Phước Thượng</td>
                                                    <td>Admin</td>
                                                    <td>
                                                        <a href="/dashboard/subjects/edit/12" className="btn btn-warning btn-sm px-1 py-0 mr-2" title="Sửa" ><i className="fas fa-edit"></i></a>
                                                        <a href="/dashboard/subjects/delete/12" className="btn btn-danger btn-sm px-1 py-0" title="Xóa"><i className="fas fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-4 col-sm-6 offset-sm-3">
                            <div className="text-xs-center">
                                <ul className="pagination mt-3 ">
                                    <li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1">First</a></li>
                                    <li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1">Previous</a></li>
                                    <li className="page-item active"><a className="page-link" href="/dashboard/subjects?page=1">1</a></li>
                                    <li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1">Next</a></li>
                                    <li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1">Last</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );

    return (
        <React.Fragment>
            {listUserForm()}
        </React.Fragment>
    );
};

export default ListUserComponent;