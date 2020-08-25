import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { isAuth } from '../../helpers/help';
function Sidebar() {
    const [logged, setLogged] = useState(false);
    useEffect(() => {
        if (isAuth()) setLogged(true);
    }, []);

    useEffect(() => {
        if (isAuth()) setLogged(true);
    }, []);

    return (
        <div>
            <div className="sidebar-user">
                <div className="card-body">
                    <div className="media">
                        <div className="mr-3">
                            {/* <a href="#"><img src={`${API_CONFIG}/user/avatar/${firstname}${lastname}`} width="38" height="38" className="rounded-circle" alt="" /></a> */}
                        </div>
                        {logged && (
                            <div className="media-body">
                                <div className="media-title font-weight-semibold">{logged.firstname} {logged.lastname}</div>
                                <div className="font-size-xs opacity-50">
                                    {logged.roleType === "0" && (
                                        <div>Vai trò: Admin</div>
                                    )}
                                    {logged.roleType === "1" && (
                                        <div>Vai trò: Người dẫn</div>
                                    )}
                                    {logged.roleType === "2" && (
                                        <div>Vai trò: Người chơi</div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="card card-sidebar-mobile">
                <ul className="nav nav-sidebar" data-nav-type="accordion">
                    <li className="nav-item-header"><div className="text-uppercase font-size-xs line-height-xs">Main</div> <i className="icon-menu" title="Main"></i></li>
                    <li className="nav-item">
                        <Link href="/subject">
                            <a className="nav-link">
                                <i className="icon-book"></i> <span>Bộ đề</span>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">
                            <i className="icon-question3"></i> <span>Câu hỏi</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">
                            <i className="icon-play3"></i> <span>Trò chơi</span>
                        </a>
                    </li>

                </ul>
                <ul className="nav nav-sidebar" data-nav-type="accordion">
                    <li className="nav-item-header"><div className="text-uppercase font-size-xs line-height-xs">User</div> <i className="icon-menu" title="Main"></i></li>
                    <li className="nav-item nav-link">
                        <i className="fa fa-users"></i><Link href="/admin/listuser"><a style={{ color: "white" }}>Thành Viên</a></Link>
                    </li>
                    <li className="nav-item nav-link">
                        <i className="fa fa-pencil-square-o"></i><Link href="/admin/updates"><a style={{ color: "white" }}>Chỉnh sửa thông tin</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar