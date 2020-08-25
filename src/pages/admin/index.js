import Layout from '../../components/Layout'
import Sidebar from '../../components/admin/SidebarComponent'
import React, { useState, useEffect } from 'react';
const AdminIndex = () => {

    return (
        <Layout>
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
                        <div className="page-header page-header-light">
                            <div className="page-header-content header-elements-md-inline">
                                <div className="page-title d-flex">
                                </div>
                            </div>
                        </div>

                        <div className="alert alert-info bg-white alert-styled-left alert-arrow-left alert-dismissible">
                            <button type="button" className="close" data-dismiss="alert"><span>×</span></button>
                            <h6 className="alert-heading font-weight-semibold mb-1">Chào mừng đến trung tâm quản lý Play2Learn, đây là nơi bạn có thể: </h6>
                            <p className="pl-2">- Quản lý người dùng: Xem, sửa, xóa và cấp quyền cho người dùng (Chỉ áp dụng cho quản trị viên)</p>
                            <p className="pl-2">- Quản lý bộ đề: Tạo và sửa bộ đề</p>
                            <p className="pl-2">- Quản lý câu hỏi: Thêm và sửa câu hỏi cho mỗi bộ đề</p>
                            <p className="pl-2">- Tạo trò chơi: Tạo và trình chiếu trò chơi</p>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-xl-3">
                                <div className="card card-body bg-blue-400 has-bg-image">
                                    <div className="media">
                                        <div className="media-body">
                                            <h3 className="mb-0">54,390</h3>
                                            <span className="text-uppercase font-size-xs">Tổng số người dùng</span>
                                        </div>

                                        <div className="ml-3 align-self-center">
                                            <i className="icon-user icon-3x opacity-75"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-xl-3">
                                <div className="card card-body bg-danger-400 has-bg-image">
                                    <div className="media">
                                        <div className="media-body">
                                            <h3 className="mb-0">389,438</h3>
                                            <span className="text-uppercase font-size-xs">Tổng số bộ đề</span>
                                        </div>

                                        <div className="ml-3 align-self-center">
                                            <i className="icon-book icon-3x opacity-75"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-xl-3">
                                <div className="card card-body bg-success-400 has-bg-image">
                                    <div className="media">
                                        <div className="mr-3 align-self-center">
                                            <i className="icon-question3 icon-3x opacity-75"></i>
                                        </div>

                                        <div className="media-body text-right">
                                            <h3 className="mb-0">652,549</h3>
                                            <span className="text-uppercase font-size-xs">Tổng số câu hỏi</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-xl-3">
                                <div className="card card-body bg-indigo-400 has-bg-image">
                                    <div className="media">
                                        <div className="mr-3 align-self-center">
                                            <i className="icon-play icon-3x opacity-75"></i>
                                        </div>

                                        <div className="media-body text-right">
                                            <h3 className="mb-0">245,382</h3>
                                            <span className="text-uppercase font-size-xs">Tổng số trò chơi</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
export default AdminIndex;