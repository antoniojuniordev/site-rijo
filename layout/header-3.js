
import Link from 'next/link';
import { useState } from 'react';
function Header3() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
      <>
        {/* <!-- Header --> */}
        <header className="site-header header-transparent mo-left">
            {/* <!-- Main Header --> */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion logo-dark">
                           <Link href="/">
								<a>
									<img className="custom-logo-white" src="images/rijo-logo-white.svg" alt="" />
									<img className="custom-logo" src="images/rijo-logo.svg" alt="" />
								</a>
							</Link>
							
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        {/* <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button> */}
                        {/* <!-- Extra Nav --> */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <Link href="/contact-us-1"><a className="btn btn-corner gradient btn-primary"><i className="fa fa-angle-right m-r10"></i>Get A Quote</a></Link>
                            </div>
                        </div>
                        {/* <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <Link href="/"><a><img src="images/logo-3.png" alt=""/></a></Link>
                            </div>
                            <div className="dlab-social-icon">
                                <ul>
                                    <Link href="/#"><a className="fa fa-facebook"></a></Link>
                                    <Link href="/#"><a className="fa fa-twitter"></a></Link>
                                    <Link href="/#"><a className="fa fa-linkedin"></a></Link>
                                    <Link href="/#"><a className="fa fa-instagram"></a></Link>
                                </ul>
                            </div>		
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- Main Header End --> */}
        </header>
        {/* <!-- Header End --> */}
        
      </>
    )
  }
  
  export default Header3;

  