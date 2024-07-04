import React from 'react'

const Navbar = () => {
  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
    {/* header top start */}
    <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className='container'>
            <div className='header-top-area'>
                <Link to="/signup" className="lab-btn me-3"><span>Create Account</span></Link>
                <Link to="/login">Log in</Link>
            </div>
        </div>
    </div>

    <div className='header-bottom'>
        <div className='container'>
            <div>
                <div>
                    <div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

  )
}

export default Navbar