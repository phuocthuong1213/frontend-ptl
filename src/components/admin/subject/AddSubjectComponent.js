import React, { useState, useEffect } from 'react';
import Link from 'next/link'
function AddSubjectComponent() {
    return (

        <div className="row">
            <div className="col-md-12 ml-2">
                <form action="/dashboard/subjects/add" method="POST" className="mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <span htmlFor="input-subjectname"><b>Tên bộ đề</b></span>
                                <Link href="/subject"><a className="btn btn-primary fa-pull-right" style={{ color: "white" }}><i className="fas fa-arrow-circle-left mr-2"></i>Quay về</a></Link>
                                <input type="text" className="form-control mt-4" id="input-subjectname" name="input-subjectname" placeholder="Tên bộ đề" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button id="submit-create" name="submit-create" type="submit" className="btn btn-info"><i className="fas fa-book-medical mr-2"></i>Thêm bộ đề</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddSubjectComponent