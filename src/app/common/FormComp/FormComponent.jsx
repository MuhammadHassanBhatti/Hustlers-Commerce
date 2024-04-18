import React from 'react'
// import bannerImg from "../../../assets/images/one.png"
const FormComponent = () => {
    return (
        <div className='parent-class' style={{ background: "#F8F7FC", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-lg-7  col-md-12 col-sm-12 banner-img-parent" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className="banner-img" style={{ maxWidth: "360px", }}>
                            <img src={bannerImg} style={{ width: "100%" }} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12" >
                        <div className="form-class me-5" style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                            <div className="form-page" style={{ display: "flex", alignItems: "center", justifyContent: "start", minHeight: "50vh", width: "100%", flexDirection: "column", backgroundColor: "#fff", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", borderRadius: "7px" }} >
                                <form style={{ width: "100%", padding: "0px 60px 70px 60px" }}>
                                    <div className="card-title my-5" style={{ textAlign: "center" }}>
                                        <h4>Sign In</h4>
                                        <p style={{ color: "#99A1B7", fontSize: "13px", fontWeight: "600" }}>Your Social Campaigns</p>
                                    </div>
                                    <div className="btn-class my-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <button className='mx-3' style={{ padding: "10px 25px", border: "1px solid #ccc", background: "#fff", borderRadius: "7px" }}>
                                            Sign in as Google
                                        </button>
                                        <button style={{ padding: "10px 25px", border: "1px solid #ccc", background: "#fff", borderRadius: "7px" }}>
                                            Sign in as Apple
                                        </button>
                                    </div>
                                    <div class="mb-3">
                                        <input style={{ padding: "12px 10px" }} type="email" class="form-control" placeholder="Email" />
                                    </div>
                                    <div class="mb-3">
                                        <input style={{ padding: "12px 10px" }} type="password" class="form-control" placeholder="Password" />
                                    </div>
                                    <div class="mt-4 text-end" >
                                        <a href="#!" style={{ textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>
                                            Forgot Password ?
                                        </a>
                                    </div>
                                    <div className='my-4'>
                                        <button style={{ padding: "12px 0px", background: "#056EE9", color: "#fff" }} className='btn   block w-100'>
                                            Sign In
                                        </button>
                                    </div>
                                    <div className='text-center my-4'>
                                        <span style={{ fontSize: "16px", fontWeight: "500" }}>Not a member yet? </span> <a style={{ fontSize: "16px", fontWeight: "500", textDecoration: "none" }} href="#!">Sign up</a>
                                    </div>
                                    <div className='d-flex justify-content-between w-100 mt-5 align-item-center flex-wrap' >
                                        <div className="drop-down-div">
                                            <div class="dropdown">
                                                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown button
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="list-div">
                                            <ul className='d-flex justify-content-between align-item-center  flex-wrap' style={{ paddingTop: "10px", paddingLeft: "0px", }}>
                                                <li style={{ listStyle: "none", margin: "0px 10px" }}>
                                                    Terms
                                                </li>
                                                <li style={{ listStyle: "none", margin: "0px 10px" }}>
                                                    Plans
                                                </li>
                                                <li style={{ listStyle: "none", margin: "0px 10px" }}>
                                                    Contact us
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FormComponent