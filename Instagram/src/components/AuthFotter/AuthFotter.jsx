import React from 'react'
import "./AuthFotter.scss"

const AuthFotter = () => {
  return (
    <>
             <div className="login_fotter">
              <ul>
                <li><a href="1" className="fooeter_menu">About</a></li>
                <li><a href="1" className="fooeter_menu">Blog</a></li>
                <li><a href="1" className="fooeter_menu">Meta</a></li>
                <li><a href="1" className="fooeter_menu">Jobs</a></li>
                <li><a href="1" className="fooeter_menu">Help</a></li>
                <li><a href="1" className="fooeter_menu">API</a></li>
                <li><a href="1" className="fooeter_menu">Privacy</a></li>
                <li><a href="1" className="fooeter_menu">Terms</a></li>
                <li><a href="1" className="fooeter_menu">Top Accounts</a></li>
                <li><a href="1" className="fooeter_menu">Hashtags</a></li>
                <li><a href="1" className="fooeter_menu">Locations</a></li>
                <li><a href="1" className="fooeter_menu">Instagram Lite</a></li>
                <li><a href="1" className="fooeter_menu">Contact Uploading & Non-Users</a></li>
                <li><a href="1" className="fooeter_menu">Dance</a></li>
                <li><a href="1" className="fooeter_menu">Food & Drink</a></li>
                <li><a href="1" className="fooeter_menu">Home & Garden</a></li>
                <li><a href="1" className="fooeter_menu">Music</a></li>
                <li><a href="1" className="fooeter_menu">Visual Arts</a></li>
              </ul>
              <div className="fotter_copyright">
                <div className="select_language">
                  <select name="language" id="language">
                    <option value="Afganistan">Afganistan</option>
                    <option value="English(UK)">English(UK)</option>
                    <option value="English(Spanish)">English(Spanish)</option>
                    <option value="Dutch">Dutch</option>
                    <option value="Bangla">Bangla</option>
                    <option value="India">India</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>
                <div className="copyright">
                  <a href="1">© <span>2022</span> Instagram from Meta</a>
                </div>
              </div>
         </div>   
    </>
  )
}

export default AuthFotter