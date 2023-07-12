import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <>
  {/* <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link rel="stylesheet" href="assets/css/base.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
  <title>Assignment_1</title> */}
  {/*Header*/}
  <header className="header">
    <div className="container">
      <div className="inner-wrap">
        <div className="inner-logo">
          <a href="#">
            <img src="../src/assets/image/logo.png" alt="" />
          </a>
        </div>
        <div className="inner-menu">
          <ul>
            <li>
              <a style={{ color: "var(--color-one)" }} href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work Process</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Pricing Tables</a>
            </li>
            <li>
              <a href="#">Blog Entries</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="inner-menu-mobi">
          <i className="fa-solid fa-bars" />
        </div>
      </div>
    </div>
  </header>
  {/*End Header*/}
  {/*Section 1*/}
  <div className="section-one">
    <div className="container">
      <div className="inner-wrap">
        <div className="inner-title">
          <p>
            {" "}
            We provide the best <b>strategy</b>
            to grow up your <b>business</b>
          </p>
        </div>
        <div className="inner-desc">
          <p>
            Softy Pinko is a professional Bootstrap 4.0 theme designed by
            Template Mo for your company at absolutely free of charge
          </p>
        </div>
        <a href="#" className="button">
          DISCOVER MORE
        </a>
      </div>
    </div>
  </div>
  {/* End Section-one */}
  {/* Section 2 */}
  <div className="section-two">
    <div className="container">
      <div className="inner-wrap">
        <div className="inner-box">
          <div className="inner-icon">
            <a href="#">
              <img src="../src/assets/image/featured-item-01.png" alt="" />
            </a>
          </div>
          <div className="inner-content">
            <div className="inner-title">
              <p>Modern Strategy</p>
            </div>
            <div className="inner-des">
              <p>
                Customize anything in this template to fit your website needs
              </p>
            </div>
          </div>
        </div>
        <div className="inner-box">
          <div className="inner-icon">
            <a href="#">
              <img src="../src/assets/image/featured-item-01.png" alt="" />
            </a>
          </div>
          <div className="inner-content">
            <div className="inner-title">
              <p>Best Relationship</p>
            </div>
            <div className="inner-des">
              <p>Contact us immediately if you have a question in mind</p>
            </div>
          </div>
        </div>
        <div className="inner-box">
          <div className="inner-icon">
            <a href="#">
              <img src="../src/assets/image/featured-item-01.png" alt="" />
            </a>
          </div>
          <div className="inner-content">
            <div className="inner-title">
              <p>Ultimate Marketing</p>
            </div>
            <div className="inner-des">
              <p>You just need to tell your friends about our free templates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Section-two */}
  {/*Section 3*/}
  <div className="section-three">
    <div className="container">
      <div className="inner-wrap">
        <div className="inner-image">
          <a href="">
            <img src="../src/assets/image/left-image.png" alt="" />
          </a>
        </div>
        <div className="inner-content">
          <div className="inner-title">
            <p>Let's discuss about you project</p>
          </div>
          <div className="inner-des">
            <p>
              Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue
              blandit, at finibus leo efficitur. Nam gravida purus non sapien
              auctor, ut aliquam magna ullamcorper.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Section-three */}
  {/*Section 4*/}
  <div className="section-four">
    <div className="container">
      <div className="inner-line">
        <div className="inner-wrap">
          <div className="inner-content">
            <div className="inner-title">
              <p>We can help you to grow your business</p>
            </div>
            <div className="inner-des">
              <p>
                Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis
                nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor
                luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis
                dolor elit.
              </p>
            </div>
          </div>
          <div className="inner-image">
            <a href="#">
              <img src="../src/assets/image/right-image.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Section-four */}
  {/*Section 5*/}
  <div className="section-five">
    <div className="container">
      <div className="box-head">
        <div className="inner-title">
          <p>Work Process</p>
        </div>
        <div className="inner-des">
          <p>
            Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet
            interdum, vehicula ut ex. Donec ante diam.
          </p>
        </div>
      </div>
      <div className="inner-wrap">
        <div className="inner-box">
          <div className="inner-icon">
            <a href="">
              <img src="../src/assets/image/work-process-item-01.png" alt="" />
            </a>
          </div>
          <div className="inner-title">
            <p>Get ideas</p>
          </div>
          <div className="inner-des">
            <p>
              Godard padbst prism fam <br /> clche
            </p>
          </div>
        </div>
        <div className="inner-box">
          <div className="inner-icon">
            <a href="">
              <img src="../src/assets/image/work-process-item-01.png" alt="" />
            </a>
          </div>
          <div className="inner-title">
            <p>Sketch Up</p>
          </div>
          <div className="inner-des">
            <p>
              Godard padbst prism fam clche
            </p>
          </div>
        </div>
        <div className="inner-box">
          <div className="inner-icon">
            <a href="">
              <img src="../src/assets/image/work-process-item-01.png" alt="" />
            </a>
          </div>
          <div className="inner-title">
            <p>Dicuss</p>
          </div>
          <div className="inner-des">
            <p>
              Godard padbst prism fam clche
            </p>
          </div>
        </div>
        <div className="inner-box">
          <div className="inner-icon">
            <a href="">
              <img src="../src/assets/image/work-process-item-01.png" alt="" />
            </a>
          </div>
          <div className="inner-title">
            <p>Revise</p>
          </div>
          <div className="inner-des">
            <p>
              Godard padbst prism fam clche
            </p>
          </div>
        </div>
        <div className="inner-box">
          <div className="inner-icon">
            <a href="">
              <img src="../src/assets/image/work-process-item-01.png" alt="" />
            </a>
          </div>
          <div className="inner-title">
            <p>Approve</p>
          </div>
          <div className="inner-des">
            <p>
              Godard padbst prism fam clche
            </p>
          </div>
        </div>
        <div className="inner-box">
          <div className="inner-icon">
            <a href="">
              <img src="../src/assets/image/work-process-item-01.png" alt="" />
            </a>
          </div>
          <div className="inner-title">
            <p>Launch</p>
          </div>
          <div className="inner-des">
            <p>
              Godard padbst prism fam clche
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Section-fve */}
  {/*Section 6*/}
  <div className="section-six">
    <div className="container">
      <div className="box-head">
        <div className="inner-title">
          <p>What do they say?</p>
        </div>
        <div className="inner-des">
          <p>
            Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla,
            at accumsan elit eros a turpis. Ut sagittis lectus libero.
          </p>
        </div>
      </div>
      <div className="inner-wrap">
        <div className="inner-box">
          <div className="inner-logo">
            <a href="">
              <img src="../src/assets/image/testimonial-icon.png" alt="" />
            </a>
          </div>
          <div className="inner-des">
            <p>
              Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis,
              egestas scelerisque orci. Maecenas a finibus odio.
            </p>
          </div>
          <div className="inner-infor">
            <a href="">
              <img src="../src/assets/image/60x60.png" alt="" />
            </a>
            <div className="inner-direction">
              <p>Catherine Soft</p>
              <span>Managing Director</span>
            </div>
          </div>
        </div>
        <div className="inner-box">
          <div className="inner-logo">
            <a href="">
              <img src="../src/assets/image/testimonial-icon.png" alt="" />
            </a>
          </div>
          <div className="inner-des">
            <p>
              Integer molestie aliquam gravida. Nullam nec arcu finibus,
              imperdiet nulla vitae, placerat nibh. Cras maximus venenatis
              molestie.
            </p>
          </div>
          <div className="inner-infor">
            <a href="">
              <img src="../src/assets/image/60x60.png" alt="" />
            </a>
            <div className="inner-direction">
              <p>Catherine Soft</p>
              <span>Managing Director</span>
            </div>
          </div>
        </div>
        <div className="inner-box">
          <div className="inner-logo">
            <a href="">
              <img src="../src/assets/image/testimonial-icon.png" alt="" />
            </a>
          </div>
          <div className="inner-des">
            <p>
              Quisque diam odio, maximus ac consectetur eu, auctor non lorem.
              Cras quis est non ante ultrices molestie. Ut vehicula et diam at
              aliquam.
            </p>
          </div>
          <div className="inner-infor">
            <a href="">
              <img src="../src/assets/image/60x60.png" alt="" />
            </a>
            <div className="inner-direction">
              <p>Catherine Soft</p>
              <span>Managing Director</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*End Section 6*/}
  {/*Section 7*/}
  <div className="section-seven">
    <div className="container">
      <div className="box-head">
        <div className="inner-title">
          <p>Pricing Plans</p>
        </div>
        <div className="inner-des">
          <p>
            Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis
            arcu elementum, quis congue risus volutpat.
          </p>
        </div>
      </div>
      <div className="inner-wrap">
        <div className="inner-box ">
          <div className="inner-level">
            <p>Starter</p>
          </div>
          <div className="inner-mini-box">
            <div className="inner-price">
              <p>$ 14.50</p>
              <span>monthly</span>
            </div>
          </div>
          <div className="inner-capacity">
            <ul>
              <li>60 GB space</li>
              <li>600 GB transfer</li>
              <li>Pro Design Panel</li>
              <li style={{ textDecoration: "line-through" }}>
                15-minute support
              </li>
              <li style={{ textDecoration: "line-through" }}>
                Unlimited Emails
              </li>
              <li style={{ textDecoration: "line-through" }}>24/7 Security</li>
            </ul>
          </div>
          <a href="#" className="button button-2">
            PURCHASE NOW
          </a>
        </div>
        <div className="inner-box">
          <div className="inner-level">
            <p>Premium</p>
          </div>
          <div
            className="inner-mini-box"
            style={{ backgroundColor: "var(--color-one)" }}
          >
            <div className="inner-price">
              <p>$ 21.50</p>
              <span>monthly</span>
            </div>
          </div>
          <div className="inner-capacity">
            <ul>
              <li>120 GB space</li>
              <li>1200 GB transfer</li>
              <li>Pro Design Panel</li>
              <li>15-minute support</li>
              <li style={{ textDecoration: "line-through" }}>
                Unlimited Emails
              </li>
              <li style={{ textDecoration: "line-through" }}>24/7 Security</li>
            </ul>
          </div>
          <a href="#" className="button button-2">
            PURCHASE NOW
          </a>
        </div>
        <div className="inner-box">
          <div className="inner-level">
            <p>Advanced</p>
          </div>
          <div className="inner-mini-box">
            <div className="inner-price">
              <p>$ 42.00</p>
              <span>monthly</span>
            </div>
          </div>
          <div className="inner-capacity">
            <ul>
              <li>250 GB space</li>
              <li>5000 GB transfer</li>
              <li>Pro Design Panel</li>
              <li>15-minute support</li>
              <li>Unlimited Emails</li>
              <li>24/7 Security</li>
            </ul>
          </div>
          <a href="#" className="button-2">
            PURCHASE NOW
          </a>
        </div>
      </div>
    </div>
  </div>
  {/*End Section 7*/}
  {/*Section 8*/}
  <div className="section-eight">
    <div className="container">
      <div className="inner-wrap">
        <div className="inner-box">
          <div className="inner-title">
            <p>126</p>
          </div>
          <div className="inner-des">
            <p>Projects</p>
          </div>
        </div>
        <a style={{ marginTop: 40 }} href="">
          <img src="../src/assets/image/circle-dec.png" alt="" />
        </a>
        <div className="inner-box">
          <div className="inner-title">
            <p>63</p>
          </div>
          <div className="inner-des">
            <p>Happy Clients</p>
          </div>
        </div>
        <a style={{ marginTop: 20 }} href="">
          <img src="../src/assets/image/circle-dec.png" alt="" />
        </a>
        <div className="inner-box">
          <div className="inner-title">
            <p>18</p>
          </div>
          <div className="inner-des">
            <p>Awards Wins</p>
          </div>
        </div>
        <a style={{ marginTop: 40 }} href="">
          <img src="../src/assets/image/circle-dec.png" alt="" />
        </a>
        <div className="inner-box">
          <div className="inner-title">
            <p>27</p>
          </div>
          <div className="inner-des">
            <p>Countries</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*End Section 8*/}
  {/*Section 9*/}
  <div className="section-nine">
    <div className="container">
      <div className="box-head">
        <div className="inner-title">
          <p>Blog Entries</p>
        </div>
        <div className="inner-des">
          <p>
            Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet
            nulla vitae, placerat nibh. Cras maximus venenatis molestie.
          </p>
        </div>
      </div>
      <div className="inner-wrap">
        <div className="inner-box">
          <div className="inner-image">
            <img src="../src/assets/image/blog-item-01.png" alt="" />
          </div>
          <div className="inner-content">
            <div className="inner-title">
              <p>Vivamus ac vehicula dui</p>
            </div>
            <div className="inner-des">
              <p>
                Cras aliquet ligula dui, vitae fermentum velit tincidunt id.
                Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam
                egestas augue.
              </p>
            </div>
          </div>
          <a href="#" className="button-2">
            READ MORE
          </a>
        </div>
        <div className="inner-box">
          <div className="inner-image">
            <img src="../src/assets/image/blog-item-02.png" alt="" />
          </div>
          <div className="inner-content">
            <div className="inner-title">
              <p>Phasellus convallis augue</p>
            </div>
            <div className="inner-des">
              <p>
                Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac.
                Vestibulum finibus urna ut velit venenatis, vel ultrices sapien
                mattis.
              </p>
            </div>
          </div>
          <a href="#" className="button-2">
            READ MORE
          </a>
        </div>
        <div className="inner-box">
          <div className="inner-image">
            <img src="../src/assets/image/blog-item-03.png" alt="" />
          </div>
          <div className="inner-content">
            <div className="inner-title">
              <p>Nam gravida purus non</p>
            </div>
            <div className="inner-des">
              <p>
                Maecenas eu erat vitae dui convallis consequat vel gravida
                nulla. Vestibulum finibus euismod odio, ut tempus enim varius
                eu.
              </p>
            </div>
          </div>
          <a href="#" className="button-2">
            READ MORE
          </a>
        </div>
      </div>
    </div>
  </div>
  {/*End Section 9*/}
  {/*Section 10*/}
  <div className="section-ten">
    <div className="container">
      <div className="box-head">
        <div className="inner-title">
          <p>Talk To Us</p>
        </div>
        <div className="inner-des">
          <p>
            Maecenas pellentesque ante faucibus lectus vulputate sollicitudin.
            Cras feugiat hendrerit semper.
          </p>
        </div>
      </div>
      <div className="inner-wrap">
        <div className="inner-content">
          <div className="inner-title">
            <p>Keep in touch</p>
          </div>
          <div className="inner-des">
            <p>
              110-220 Quisque diam odio, maximus ac consectetur eu, 10260 <br />
              auctor non lorem
            </p>
            <p>
              You are NOT allowed to re-distribute Softy Pinko template on any
              template collection websites. Thank you.
            </p>
          </div>
        </div>
        <div className="inner-contact">
          <div className="full-name">
            <input className="form-control" placeholder="Full Name" />
          </div>
          <div className="email">
            <input className="form-control" placeholder="Email Address" />
          </div>
          <div className="message">
            <textarea
              className="form-control"
              placeholder="Your Message"
              defaultValue={""}
            />
          </div>
          <a href="" className="button-2">
            SEND MESSAGE
          </a>
        </div>
      </div>
    </div>
  </div>
  {/*End Section 10*/}
  {/*Footer*/}
  <div className="footer">
    <div className="container">
      <div className="inner-logo">
        <ul>
          <li>
            <a href="">
              <i className="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-solid fa-poo" />
            </a>
          </li>
        </ul>
      </div>
      <div className="inner-last">
        <p>COPYRIGHT © 2020 SOFTY PINKO COMPANY - DESIGN: TEMPLATEMO</p>
      </div>
    </div>
  </div>
  {/*End Footer*/}
</>

    </>
  )
}

export default App
