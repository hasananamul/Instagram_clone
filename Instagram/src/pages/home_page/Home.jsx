/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from '../../components/Header/Header'
import "./Home.scss"
import img_1 from "../../../src/Images/300810998_440178124800351_8669051965334398753_n.jpg"
import img_2 from "../../../src/Images/299910835_513565977198613_3675625251334021024_n.jpg"
import img_3 from "../../../src/Images/300513190_817069909727398_6044937499384834097_n.jpg"
import img_4 from "../../../src/Images/300945304_1043349919705531_5389027460449571242_n.jpg"
import img_5 from "../../../src/Images/300382489_127385586473888_388244027089920366_n.jpg"
import img_6 from "../../../src/Images/300567247_5257329637716929_347860446161244980_n.jpg"
import img_7 from "../../../src/Images/300428420_398086772411600_4780460743083588820_n.jpg"
import img_8 from "../../../src/Images/300573014_1123877398552473_1498450865167695105_n.jpg"
import cookie from "js-cookie";
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import LoaderContext from '../../context/LoaderContext'

const Home = () => {

  //Navigator to redirect page
  const navigate = useNavigate;

  //use context
  const {dispatch, user} = useContext(AuthContext)
  const {loaderDispatch} = useContext(LoaderContext)

  //Logout handle
  const handleLogout = (e) => {
    e.preventDefault();
    loaderDispatch({type : "LOAD_START"})
    dispatch({type : "USER_LOGOUT"})
    cookie.remove("token")
    cookie.remove("user")
    navigate("/login")
  }

  return (
    <>
      <Header />
      <div className="home_container">
        <div className="home_row">
          <div className="home_timeline_col"> 
            <div className="history_box">
              <div className="history">
                <div className="history_img">
                  <img src={img_3} alt="baby_girl" />
                </div>
                <div className="histiry_name">
                  <h5>Cute hairs cuts baby</h5>
                </div>
              </div>
              
              <div className="history">
                <div className="history_img">
                  <img src={img_4} alt="baby_girl" />
                </div>
                <div className="histiry_name">
                  <h5>Cute hairs cuts baby</h5>
                </div>
              </div>

              <div className="history">
                <div className="history_img">
                  <img src={img_5} alt="baby_girl" />
                </div>
                <div className="histiry_name">
                  <h5>Cute hairs cuts baby</h5>
                </div>
              </div>

              <div className="history">
                <div className="history_img">
                  <img src={img_6} alt="baby_girl" />
                </div>
                <div className="histiry_name">
                  <h5>Cute hairs cuts baby</h5>
                </div>
              </div>

              <div className="history">
                <div className="history_img">
                  <img src={img_7} alt="baby_girl" />
                </div>
                <div className="histiry_name">
                  <h5>Cute hairs cuts baby</h5>
                </div>
              </div>

              <div className="history">
                <div className="history_img">
                  <img src= {img_8} alt="baby_girl" />
                </div>
                <div className="histiry_name">
                  <h5>Cute hairs cuts baby</h5>
                </div>
              </div>
            </div> {/**history box*/}
            <div className="post_box">
              <div className="post_profile">
                <div className="profile_topline">
                  <div className="topline_image">
                    {user.image ? user.image : <img src="https://images.pexels.com/photos/1580272/pexels-photo-1580272.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="_image" />}
                    <div className="topline_image_name">
                      <span><a href="1"> sadiajahanprova_prova </a></span>
                    </div> {/**topline_image_name */}
                  </div> {/**topline_image */}
                  <div className="option_button">
                    <div className="option_icons"><span>...</span></div>
                  </div> {/**option_button */}
                </div> {/**profile_topline */}
                <div className="timeline_profile_img">
                  {user.image ? user.image : <img src={img_1} alt="prova" />}
                </div> {/**timeline_profile_img */}
                <div className="timeline_bottom">
                  <div className="timeline_reaction_box">
                    <div className="reaction_button">
                      <div className="love">
                        <svg aria-label="Like" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                      </div>
                      <div className="comments">
                        <svg aria-label="Comment" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                      </div>
                      <div className="share">
                        <svg aria-label="Share Post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                      </div>
                    </div> {/**reaction_button */}
                    <div className="save_button">
                      <svg aria-label="Save" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                    </div>
                  </div> {/** timeline_reaction_box*/}
                  <div className="liked_people_box">
                    <div className="liked_person_img">
                      <img src="https://www.whatsappimages.in/wp-content/uploads/2022/02/Free-HD-girls-dp-Pics-Images-Download.jpg" alt="girl" />
                    </div> {/**liked_person_img */}
                    <div className="more_liked_persons">
                      <p>Liked by <a href="2"><strong>sarawaropu</strong></a> and <a href="2"><strong>21,418 others</strong></a></p>
                    </div> {/**more_liked_persons */}
                  </div> {/**liked_people_box */}
                  <div className="timeline_post_text_box">
                    <p> <a href="2"><strong>{user.name}</strong></a> My never ending relationship with white dresses🤦🏻‍♀️🥰(specially on Friday ) 😇😇😇</p>
                  </div> {/**timeline_post_text_box */}
                  <div className="comments_read_button_box">
                    <span>View all 171 comments</span>
                  </div> {/**comments_read_button_box */}
                  <div className="post_time">
                    <span>1 Day ago</span>
                  </div> {/**post_time */}
                  <form action="#">
                  <div className="comments_write_box">
                      <div className="text_area">
                      <div className="comments_write_icon">
                      <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                    </div>
                    <div className="input_comments">
                      <textarea aria-label="Add a comment…" placeholder="Add a comment…"  autocomplete="off" autocorrect="off"  style={{height : "20px"}}></textarea>
                    </div> {/**input_comments */}
                    </div>
                    <div className="comments_post_button">
                      <a href="2"> Post </a>
                    </div>
                  </div> {/**comments_write_box */}
                 </form>
                </div> {/**timeline_bottom */}
              </div> {/**post_profile */}
            </div> {/**post box */}
           </div> {/**Home tileline col */}
          <div className="home_profile_col">
            <div className="profile_box">
              <div className="profile_detls">
                <div className="profile_img">
                <a href="2"> {user.image ? user.image : <img src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1658218763916%2F1CUPd9TGd.jpeg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=640&q=75" alt="" />} </a>
              </div>
              <div className="profile_title">
                <div className="profile_id">
                  <a href="1">{user.name}</a>
                </div>
                <div className="profile_name">
                  <a href='1'>{user.userName}</a>
                </div>
              </div>
              </div> {/**Profile dtls */}
              <div className="right_button account_switch">
                <div className="account_switch_button">
                  <a href="1"> Switch</a>
                </div>
              </div>
            </div> {/**profile_box */}
            <div className="suggestion_box">
              <span><a href="2"> Suggestions For You </a></span>
              <div className="right_button">
                <a href="2"> See All</a>
              </div>
            </div>

            <div className="sugestion_name_box">
              <div className="suggestion_info">
                <div className="sugestion_img">
                <a href="2"> <img src={img_2} alt="" /> </a>
              </div>
              <div className="sugestion_title">
                <div className="sugestion_name">
                  <a href='1'>Hasan Anamul</a>
                </div>
                <div className="followed_by">
                  <span>Followed by mathe_mansor</span>
                </div>
              </div>
              </div>
              <div className="right_button">
                  <a href="1"> Follow</a>
                {/* <div className="follow_btn">
                </div> */}
              </div>
            </div> {/**sugestion_name_box */}

            <div className="sugestion_name_box">
              <div className="suggestion_info">
                <div className="sugestion_img">
                <a href="2"> <img src={img_3} alt="" /> </a>
              </div>
              <div className="sugestion_title">
                <div className="sugestion_name">
                  <a href='1'>Hasan Anamul</a>
                </div>
                <div className="followed_by">
                  <span>Followed by mathe_mansor</span>
                </div>
              </div>
              </div>
              <div className="right_button">
                  <a href="1"> Follow</a>
                {/* <div className="follow_btn">
                </div> */}
              </div>
            </div> {/**sugestion_name_box */}

            <div className="sugestion_name_box">
              <div className="suggestion_info">
                <div className="sugestion_img">
                <a href="2"> <img src={img_2} alt="" /> </a>
              </div>
              <div className="sugestion_title">
                <div className="sugestion_name">
                  <a href='1'>Hasan Anamul</a>
                </div>
                <div className="followed_by">
                  <span>Followed by mathe_mansor</span>
                </div>
              </div>
              </div>
              <div className="right_button">
                  <a href="1"> Follow</a>
                {/* <div className="follow_btn">
                </div> */}
              </div>
            </div> {/**sugestion_name_box */}

            <div className="sugestion_name_box">
              <div className="suggestion_info">
                <div className="sugestion_img">
                <a href="2"> <img src={img_1} alt="" /> </a>
              </div>
              <div className="sugestion_title">
                <div className="sugestion_name">
                  <a href='1'>Hasan Anamul</a>
                </div>
                <div className="followed_by">
                  <span>Followed by mathe_mansor</span>
                </div>
              </div>
              </div>
              <div className="right_button">
                  <a href="1"> Follow</a>
                {/* <div className="follow_btn">
                </div> */}
              </div>
            </div> {/**sugestion_name_box */}
            <div className="log_out">
              <a onClick={handleLogout} href="#"> Log out </a>
            </div>
          </div> {/**home_profile_col */}
        </div> {/**Home row */}
      </div> {/**home_container */}
    </>
  )
}

export default Home