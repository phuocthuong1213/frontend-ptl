import Layout from './../components/Layout'
import { checkLoginUser } from '../api/user';
import React, { useEffect } from 'react';
import * as helpers from '../helpers/help'
import { connect } from 'react-redux';
const Index = (props) => {
    const checkLogin = () => {
        const token = helpers.getCookie('token') || ""
        const user = JSON.parse(window.localStorage.getItem('user'))
        if (token.length > 0) {
            if (token && user._id) {
                const data = {
                    token: token,
                    _id: user._id
                }
                checkLoginUser(data).then(res => {
                    props.dispatch({
                        type: 'SET_USER_INFO',
                        user: {
                            token: res.user.token,
                            email: res.user.email,
                            firstname: res.user.firstname,
                            lastname: res.user.lastname,
                            username: res.user.username,
                            userId: res.user._id,
                            loggedIn: true
                        }
                    })
                }).catch(err => {
                })
            }   
        }
    }
    useEffect(() => {
        checkLogin()
    }, [])
    return (
        <Layout>
            <div id="hero">
                <div id="nigger-app" className="container-fluid">
                    <section>
                        <div id="bigger-container" className="fade-in">
                            <div className="hero-container">
                                <img className="mb-4 img-fluid slide-up" src="pl2/img/game_symbol.png" />
                                <div className="row slide-up">
                                    <div className="col-md-8 offset-md-2 homepage-searchgroup">
                                        <div className="input-group">
                                            <input id="mainInputPIN" v-model="gameSearch.inputPIN" type="text" className="form-control form-control-lg" placeholder="VD: 97775" maxLength="5" data-placement="top" />
                                            <div className="input-group-append">
                                                <button className="btn btn-success px-3"><i className="fas fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="modal fade" id="modal-joingame">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title text-success"><i className="fas fa-check-circle mr-2"></i><span>Đã tìm được phòng</span></h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body pt-5 text-center">
                                    <img className="img-fluid mb-4" src="pl2/img/game_symbol.png" />
                                    <h2 className="text-center text-success mb-5"></h2>
                                    <div className="row">
                                        <div className="col-md-6 offset-md-3">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">Tên bạn</span>
                                                </div>
                                                <input id="player-name" v-model="gameSearch.playerName" type="text" className="form-control" placeholder="VD: Cuong Vu" autoFocus />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer d-flex justify-content-between align-items-center">
                                    <h6 className="text-center p-2 mb-0"><i className="fas fa-chalkboard-teacher mr-2"></i></h6>
                                    <button> <i className="fas fa-chevron-circle-right mr-2"></i>Vào phòng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="../pl2/lib/jquery/jquery.min.js"></script>
                <script src="../pl2/lib/jquery/jquery-migrate.min.js"></script>
                <script src="../pl2/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="../pl2/lib/easing/easing.min.js"></script>
                <script src="../pl2/lib/wow/wow.min.js"></script>
                <script src="../pl2/lib/waypoints/waypoints.min.js"></script>
                <script src="../pl2/lib/counterup/counterup.min.js"></script>
                <script src="../pl2/lib/superfish/hoverIntent.js"></script>
                <script src="../pl2/lib/superfish/superfish.min.js"></script>
                <script src="../pl2/js/homepage.js"></script>
                {/* <script src="../pl2/js/vue.js"></script> */}
                <script src="../pl2/js/babel.min.js"></script>
            </div>
        </Layout >
    )
}
const mapStateToProps = (reduxState) => {
    return {

    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);