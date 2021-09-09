import React, { useRef, useEffect } from "react";
import "./Home.css";
import IMAGES from '../Images/images'
import gsap, {TweenMax,Expo} from 'gsap';


function Home() {
  let block1 = useRef(null);
  let block2 = useRef(null);
  let block3 = useRef(null);
  let block4 = useRef(null);
  let box = useRef(null);
  let about = useRef(null);
  let thirdSection = useRef(null);
  let title  = useRef(null);
  let apps  = useRef(null);
  useEffect(() => {
    TweenMax.to(block1, 2,{
      x: "-280",
      y: "-200",
      scale: "2.4",
      ease: Expo.easeInOut,
    });
    TweenMax.to(
      block2, 2,
      {
        x: "-180",
        y: "200",
        scale: "1.2",
        ease: Expo.easeInOut,
      },
      
    );
    TweenMax.to(
      block3, 2,
      {
        x: "180",
        y: "-240",
        scale: "1.6",
        ease: Expo.easeInOut,
      },
      
    );
    TweenMax.to(
      block4, 2,
      {
        x: "580",
        y: "140",
        scale: "0.8",
        ease: Expo.easeInOut,
      },
      
    );
    TweenMax.to(
      box, 2.4,
      {
        y: "-100%",
        ease: Expo.easeInOut
      },
      
    );
    gsap.from(
      about,
      {
        scrollTrigger: {
            trigger: ".about",
            toggleActions: "restart resume resume  resume",
          },
          opacity: 0,
          delay: 1,
          duration:3,
      }
     
    );
    gsap.from(
      thirdSection,
      {
        scrollTrigger: {
            trigger: ".third-section",
            toggleActions: "restart resume resume resume ",
          },
          opacity: 0,
          delay: 1,
          ease: Expo.easeInOut,
          duration: 1,
      }
     
    );
    gsap.from(
        title,
      {
        scrollTrigger: {
            trigger: ".third-section",
            toggleActions: "restart resume resume resume ",
          },
          y: -200,
          delay: 2,
          duration: 2,
      }
     
    );
    gsap.from(
        apps,
      {
        scrollTrigger: {
            trigger: ".third-section",
            toggleActions: "restart resume resume resume ",
          },
          y: 400,
    delay: 2,
    duration: 2,
      }
     
    );
    
 
    
  });
  return (
    <div>
      <section class="first-section">
        {/* <div class="social">
          <a href="#contact">
            <i class="fab fas fa-phone-alt"></i>
          </a>
          <a href="https://www.instagram.com/ayadalshaikly/">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/ayad.m.alshaikhli/">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/ayad-alshaikhli-815599208/">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/ayadalshaikhli">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://drive.google.com/file/d/19XQb-Iy5-dI8VvlcdyiqVKQjEFBxBtNO/view?usp=sharing">
            <i class="fab fas fa-file"></i>
          </a>
        </div> */}
        <div className="wrapper-img">
          <div className="text">
            <h1 className="title">
              Hello I'm <br />
              Ayad Al Shaikhli <br />
              Full Stack Web Developer
            </h1>
          </div>
          <div className="box" ref={el => box = el}></div>
          <div>
            <img src={IMAGES.backgroundLogo} alt="" className="image" />
          </div>
        </div>
        <div className="blocks">
          <div className="block-1 block" ref={el => block1 = el}>
            A
          </div>
          <div className="block-2 block" ref={el => block2 = el}>
            Y
          </div>
          <div className="block-3 block" ref={el => block3 = el}>
            A
          </div>
          <div className="block-4 block" ref={el => block4 = el}>
            D
          </div>
        </div>
      </section>

      {/* // <!-- ========== -->
    // <!-- Secound Section -->
    // <!-- ========== --> */}

      <section id="about" className="secound-section showreel">
        <div className="about" ref={el => about = el}>
          <div className="title-1 col-lg-4 col-md-12" >
            <div className="block-5">ABOUT</div>
          </div>
          <div className="about-me col-lg-8 col-md-12">
            <p className="text-1">
              Hi, My name is Ayad. I'm 25 years old Web Developer. Welcome to my
              portfolio website. Dive into some fun projects I've done over the
              years. I design and develop websites for businesses using HTML,
              CSS, JavaScript. I have also worked as a video and photo editor
              using Adobe PhotoShop and Adobe Premiere. I am passionate about
              building websites animated websites.
            </p>
            <p className="text-1">
              I am currently studying Web Development at US-DAVIS. I learn new
              things every day to further improve my design and coding skills.
              Feel free to browse through all the cases I show here! ✌🏼 I like
              traveling, music, sports, video games, and pizza!
            </p>
          </div>
        </div>
      </section>
      <section id="experience" ref={el => thirdSection = el} class="third-section showreel">
      <h1 class="title-1" ref={el => title = el}>MY-EXPERIENCE</h1>
      <div class="experience">
        <div class="apps" ref={el => apps = el}>
          <div class="first-app col-lg-3 col-md-5 col-sm-12">
            <img
              src={IMAGES.cssLogo}
              class="app-logo app-2"
              alt="css logo"
            />
            <h2>HTML-CSS</h2>
            <p>Visual Design</p>
          </div>
          <div class="secound-app col-lg-3 col-md-5 col-sm-12">
            <img
              src={IMAGES.javascriptLogo}
              class="app-logo app-2"
              alt="javascript logo"
            />
            <h2>JavaScript</h2>
            <p>Visual Design</p>
          </div>
          <div class="third-app col-lg-3 col-md-5 col-sm-12">
            <img
              src={IMAGES.jqueryLogo}
              class="app-logo app-2"
              alt="jquery logo"
            />
            <h2>Jquery</h2>
            <p>Visual Design</p>
          </div>
          <div class="fourth-app col-lg-3 col-md-5 col-sm-12">
            <img
              src={IMAGES.nodejsLogo}
              class="app-logo app-2"
              alt="node js logo"
            />
            <h2>Node js</h2>
            <p>Visual Design</p>
          </div>
          <div class="fifth-app col-lg-3 col-md-5 col-sm-12">
            <img
              src={IMAGES.adobeXDLogo}
              class="app-logo app-2"
              alt="adobe PhotoShop logo"
            />
            <h2>Adobe XD</h2>
            <p>Visual Design</p>
          </div>
          <div class="sixth-app col-lg-3 col-md-5 col-sm-12">
            <img
              src={IMAGES.adobeprLogo}
              class="app-logo app-2"
              alt="adobe PhotoShop logo"
            />
            <h2>Adobe Premiere</h2>
            <p>Visual Design</p>
          </div>
          <div class="sixth-app col-lg-3 col-md-5 col-sm-12">
            <img
              src={IMAGES.aftereffectLogo}
              class="app-logo app-2"
              alt="adobe PhotoShop logo"
            />
            <h2>Adobe After Effect</h2>
            <p>Visual Design</p>
          </div>
          <div class="seventh-app col-lg-3 col-md-5 col-sm-12">
            <img
              src={IMAGES.bootstrapLogo}
              class="app-logo app-2"
              alt="Bootstrap logo"
            />
            <h2>Bootstrap</h2>
            <p>Visual Design</p>
          </div>
          <div class="eighth-app col-lg-3 col-md-5 col-sm-12">
            <img
              src={IMAGES.bulmaLogo}
              class="app-logo app-2"
              alt="Bulma logo"
            />
            <h2>Bulma</h2>
            <p>Visual Design</p>
          </div>
          <div class="eighth-app col-lg-3 col-md-5 col-sm-12">
            <img
              src={IMAGES.handlebarsLogo}
              class="app-logo app-2"
              alt="Bulma logo"
            />
            <h2>HandelBars</h2>
            <p>Visual Design</p>
          </div>
          <div class="ninth-app col-lg-3 col-md-5 col-sm-12">
            <img
              src={IMAGES.photoshopLogo}
              class="app-logo app-2"
              alt="adobe PhotoShop logo"
            />
            <h2>Adobe Photoshop</h2>
            <p>Visual Design</p>
          </div>
          <div class="ninth-app col-lg-3 col-md-5 col-sm-12">
            <img
              src={IMAGES.mysqlLogo}
              class="app-logo app-2"
              alt="adobe PhotoShop logo"
            />
            <h2>MySql</h2>
            <p>Visual Design</p>
          </div>
          <div class="ninth-app col-lg-3 col-md-5 col-sm-12">
            <img
              src={IMAGES.ExpressJSLogo}
              class="app-logo app-2"
              alt="adobe PhotoShop logo"
            />
            <h2>ExpressJs</h2>
            <p>Visual Design</p>
          </div>
          <div class="ninth-app col-lg-3 col-md-5 col-sm-12">
            <img
              src={IMAGES.greensockLogo}
              class="app-logo app-2"
              alt="adobe PhotoShop logo"
            />
            <h2>GSAP</h2>
            <p>Visual Design</p>
          </div>
        </div>
      </div>
    </section>
    <div class="scroll-content">
      <div class="section section--vertical" id="second">
        <h1 class="title-1">WORK</h1>
        <div class="block-list">
          <div class="block-list__item">
            <div class="block-list__item-inner">
              <a href="https://ayadalshaikhli.github.io/moviefinder/"
                ><img
                  src={IMAGES.moviefinderLogo}
                  class="card img"
                  alt=""
                />
                <div class="card-box">
                  <h1>MovieFinder</h1>
                  <p>JavaScript , HTML,CSS , jQuery</p>
                </div>
              </a>

              
            </div>
          </div>
          <div class="block-list__item">
            <div class="block-list__item-inner">
              <a href="https://delicat-bastille-97120.herokuapp.com/"
                ><img
                  src={IMAGES.DeliciosooLogo}
                  class="card img"
                  alt=""
                />
                <div class="card-box">
                  <h1>Delicioso</h1>
                  <p>JavaScript , HTML,CSS , jQuery</p>
                </div>
              </a>
            </div>
          </div>
          <div class="block-list__item">
            <div class="block-list__item-inner">
              <a href="https://ayadalshaikhli.github.io/weatherproject/"
                ><img
                  src={IMAGES.weatherproject}
                  class="card img"
                  alt=""
                />
                <div class="card-box">
                  <h1>Weather Project</h1>
                  <p>JavaScript , HTML,CSS , jQuery</p>
                </div>
              </a>
            </div>
          </div>
          <div class="block-list__item">
            <div class="block-list__item-inner">
              <a href="https://ayadalshaikhli.github.io/dayplanner/"
                ><img
                  src={IMAGES.dayplannerLogo}
                  class="card img"
                  alt=""
                />
                <div class="card-box">
                  <h1>Day Planner</h1>
                  <p>JavaScript , HTML,CSS , jQuery</p>
                </div>
              </a>
            </div>
          </div>
          <div class="block-list__item">
            <div class="block-list__item-inner">
              <a href="https://ayadalshaikhli.github.io/apiproject/"
                ><img
                  src={IMAGES.ballfinderLogo}
                  class="card img"
                  alt=""
                />
                <div class="card-box">
                  <h1>Ball Finder</h1>
                  <p>JavaScript , HTML,CSS , jQuery</p>
                </div>
              </a>
            </div>
          </div>
          <div class="block-list__item">
            <div class="block-list__item-inner">
              <a href="https://frozen-lowlands-84809.herokuapp.com/"
                ><img
                  src={IMAGES.techLogo}
                  class="card img"
                  alt=""
                />
                <div class="card-box">
                  <h1>Tech Blog</h1>
                  <p>JavaScript , HTML,CSS , jQuery</p>
                </div>
              </a>
            </div>
          </div>
          <div class="block-list__item">
            <div class="block-list__item-inner">
              <a href="https://ayadalshaikhli.github.io/ledyanailart/"
                ><img
                  src={IMAGES.Animation}
                  class="card img"
                  alt="="
                />
                <div class="card-box">
                  <h1>Ledya Nail Art</h1>
                  <p>JavaScript , HTML,CSS , jQuery</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
