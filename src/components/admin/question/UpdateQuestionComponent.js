import React, { useState, useEffect } from 'react';
import Link from 'next/link'
function UpdateQuestionComponent() {
    return (
        <div className="row ml-2">
            <div className="col-sm-12">
                <div className="col-md-4">
                    <div className=" mt-4">
                        <span htmlFor="input-subjectname" style={{ fontSize: 25, fontWeight: "bold" }}>Cập nhật câu hỏi</span>
                        <Link href="/question"><a className="btn btn-primary fa-pull-right" style={{ color: "white" }}><i className="fas fa-arrow-circle-left mr-2"></i>Quay về</a></Link>
                    </div>
                </div>
                {/* <div className="col-sm-4">
                    <div className="form-group">
                        <div className="d-sm-flex align-items-center mt-4">
                            <h1 className="h3 mb-0 text-gray-800">Thêm câu hỏi</h1>
                            <a href="/dashboard/quests" className="btn btn-primary"><i className="fas fa-arrow-circle-left mr-2"></i>Quay về</a>
                        </div>
                    </div>
                </div> */}
                <div className="col-sm-8">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-12">
                                <form action="/dashboard/quests/add" method="POST" className="mt-3">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="input-subjectid"><b>Câu hỏi thuộc bộ đề:</b></label>
                                                <select className="custom-select" name="input-subjectid">
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="input-questcontent"><b>Nội dung câu hỏi:</b></label>
                                                <input type="text" className="form-control" id="input-questcontent" name="input-questcontent" placeholder="Albert Einstein sinh năm bao nhiêu?" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mt-2">
                                                <label htmlFor="input-questans"><b>Câu trả lời:</b></label>
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr className="text-center">
                                                            <th>Câu trả lời</th>
                                                            <th>Đúng</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="text-center">
                                                            <td className="py-1 my-0"><input type="text" className="form-control" name="input-questans[0][content]" placeholder="1879" /></td>
                                                            <td className="py-2 my-0"><input type="checkbox" name="input-questans[0][correct]" value="" /></td>
                                                        </tr>
                                                        <tr className="text-center">
                                                            <td className="py-1 my-0"><input type="text" className="form-control" name="input-questans[1][content]" placeholder="1842" /></td>
                                                            <td className="py-2 my-0"><input type="checkbox" name="input-questans[1][correct]" value="" /></td>
                                                        </tr>
                                                        <tr className="text-center">
                                                            <td className="py-1 my-0"><input type="text" className="form-control" name="input-questans[2][content]" placeholder="1942" /></td>
                                                            <td className="py-2 my-0"><input type="checkbox" name="input-questans[2][correct]" value="" /></td>
                                                        </tr>
                                                        <tr className="text-center">
                                                            <td className="py-1 my-0"><input type="text" className="form-control" name="input-questans[3][content]" placeholder="1802" /></td>
                                                            <td className="py-2 my-0"><input type="checkbox" name="input-questans[3][correct]" value="" /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <button id="submit-create" name="submit-create" type="submit" className="btn btn-info mx-auto mt-2"><i className="fas fa-check-circle mr-2"></i>Cập nhật</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateQuestionComponent