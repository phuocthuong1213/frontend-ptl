import Layout from '../../components/Layout'
import Sidebar from '../../components/admin/SidebarComponent'
import React, { useState, useEffect } from 'react';
import IndexSubjectComponent from '../../components/admin/subject/IndexSubjectComponent'
const SubjectIndex = () => {

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

                        <IndexSubjectComponent/>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
export default SubjectIndex;