function Header() {
    return (
        <>
        <div className="header-banner-main">
  <div className="container">
    <header>
      <div className="header-top">
        <div className="header-logo">
          <h2>Aun</h2>
        </div>
        <div className="header-nav">
          <ul>
            <li>
              <a id="homebtn" className="home-btn  " href="">
                Home
              </a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="contactus.html">Contact Us</a>
            </li>
            <li>
              <a href="aboutus.html">About Us</a>
            </li>
          </ul>
        </div>
        <div className="header-button">
          {/* <button class="header-btn-1">Sign In</button>
                      <button class="header-btn-2">Sign Up</button> */}
          <a href="signin.html" className="header-btn-1">
            Sign In
          </a>
          <a href="signup.html" className="header-btn-2">
            Sign Up
          </a>
        </div>
      </div>
      <div className="banner">
        <div className="banner-left">
          <h4>Delicious Cafe</h4>
          <h1>Sweet Treats, Perfect Eats</h1>
        </div>
        <div className="anchor">
          <a href="" className="anchor-shop">
            Shop Now
          </a>
          <a href="" className="anchor-learn">
            Learn More
          </a>
        </div>
      </div>
    </header>
  </div>
</div>

        </>
    )
}
export default Header;
