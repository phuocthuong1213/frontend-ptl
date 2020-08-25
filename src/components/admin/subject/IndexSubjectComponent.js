import React, { useState, useEffect } from 'react';
import Link from 'next/link'
function IndexSubjectComponent() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <div className="page-header-content header-elements-md-inline">
                    <div className="page-title d-flex">
                        <h4><i className="fa fa-book mr-2"></i> <span className="font-weight-semibold">Quản lý bộ đề</span></h4>
                        <a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card text-dark">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <span><i className="fas fa-book i-space mr-2"></i>Danh sách bộ đề</span>
                            <Link href="/subject/add"><a className="btn btn-primary btn-sm"><i className="fas fa-book-medical mr-2"></i>Thêm bộ đề</a></Link>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr className="text-center">
                                            <th>ID</th>
                                            <th>Tên bộ đề</th>
                                            <th>Số câu hỏi</th>
                                            <th>Sở hữu</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-dark text-center">
                                            <td>1</td>
                                            <td>Javascript</td>
                                            <td>10</td>
                                            <td>Nguyễn Phước Thượng</td>
                                            <td>
                                                <Link href="/subject/update"><a className="btn btn-warning btn-sm px-1 py-0 mr-2" title="Sửa"><i className="fas fa-edit"></i></a></Link>
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
                        <ul className="pagination mt-3 "><li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1">First</a></li><li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1">Previous</a></li><li className="page-item active"><a className="page-link" href="/dashboard/subjects?page=1">1</a></li><li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1">Next</a></li><li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1">Last</a></li></ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexSubjectComponent