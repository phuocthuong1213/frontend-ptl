import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import * as actions from './../../../actions/user'
import { isAuth, getCookie } from '../../../helpers/help';
import Sidebar from '../SidebarComponent';
import { getListUser } from '../../../api/user';
import { connect } from 'react-redux';
const ListUserComponent = (props) => {

    const [data, setData] = useState([]);
    const token = getCookie('token')

    useEffect(() => {
        async function fetchUserList() {
            const response = await getListUser(token)
            setData(response)
        }

        fetchUserList()
    }, [])


    const renderListUser = () => {
        let listItems = data.map((user, index) => {
            return (
                <tbody key={index}>
                    <tr className="text-dark text-center">
                        <td>{index + 1}</td>
                        <td>{user.firstname} {user.lastname}</td>
                        <td>
                            {user.roleType === "0" ? "Admin" : ''}
                            {user.roleType === "1" ? "Người chơi" : ''}
                            {user.roleType === "2" ? "Người dẫn" : ''}
                        </td>
                        <td>
                            <Link href="/admin/updates"><a className="btn btn-warning btn-sm px-1 py-0 mr-2" title="Sửa" onClick={() => adminEditUser(user)}><i className="fas fa-edit"></i></a></Link>
                            <a href="/dashboard/subjects/delete/12" className="btn btn-danger btn-sm px-1 py-0" title="Xóa"><i className="fas fa-trash-alt"></i></a>
                        </td>
                    </tr>
                </tbody>
            )
        })
        return listItems
    }

    const adminEditUser = (user) => {
        props.adminUpdateUser(user)
    }

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
                                            {renderListUser()}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
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
                    </div> */}
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

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        adminUpdateUser: (user) => {
            dispatch(actions.adminEditUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUserComponent);
