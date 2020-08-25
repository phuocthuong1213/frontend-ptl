import React, { useState, useEffect } from 'react';
import Link from 'next/link'
function UpdateSubjectComponent() {
    return (
        <div className="row ml-2">
            <div className="col-sm-12">
                <div className="col-md-4">
                    <div className=" mt-4">
                        <span htmlFor="input-subjectname" style={{ fontSize: 25, fontWeight: "bold" }}>Chỉnh sửa bộ đề</span>
                        <Link href="/subject"><a className="btn btn-primary fa-pull-right" style={{ color: "white" }}><i className="fas fa-arrow-circle-left mr-2"></i>Quay về</a></Link>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-12">
                                <form action="/dashboard/quests/add" method="POST" className="mt-3">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="input-subjectname"><b>Tên bộ đề</b></label>
                                                <input type="text" className="form-control" id="input-subjectname" name="input-subjectname" defaultValue="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label><b>Sở hữu</b></label>
                                                <input type="text" className="form-control" defaultValue="Vũ Cường" />
                                            </div>
                                        </div>
                                    </div>
                                    <button id="submit-create" name="submit-create" type="submit" className="btn btn-info mx-auto mt-2"><i className="fas fa-plus-circle mr-2"></i>Thêm câu hỏi</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateSubjectComponent