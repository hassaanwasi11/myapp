import React, { useEffect } from 'react'
import './Landing.css'
import scroll from '../../images/scroll.png'
import sec1s from '../../images/sec1.png'
import sec2s from '../../images/sec2.png'
import pb from '../../images/playbutton.png'
import gr from '../../images/video.png'
import btcc from '../../images/btcc.png'
import btn1 from '../../images/btn.png'
import btn2 from '../../images/btn2.png'
import digi from '../../images/digi.png'
import graph from '../../images/graph.png'
import asd from '../../images/asd.png'
import asd2 from '../../images/asd2.png'
import kn from '../../images/bn.png'

import bn from '../../images/kn.png'
import asd3 from '../../images/asd4.png'
import btcg from '../../images/btcg.png'
import { useState } from 'react'
import { useParallax } from 'react-scroll-parallax';
import { data2 } from './Data'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Partner from '../Partner/Partner'
const Landing = () => {

  const { ref } = useParallax({ speed: 1000 });
  const [asds, setasds] = useState(123)
  const [widthtop, setwidthtop] = useState('80%')
  const [videowidth, setvideowidth] = useState('40%')
  const [opacity, setopacity] = useState('0')
  const [anopacity, setanopacity] = useState('1')
  const [position, setposition] = useState('absolute')
  const [height, setheight] = useState('100%')
  const [marginleft, setmarginleft] = useState('0vw')
  const [top, settop] = useState('150px')
  const [topx, settopx] = useState('0px')
  const [topx2, settopx2] = useState('0px')
  function animate() {
    setasds(Math.random()*3)
    setasds(Math.random()*3)
    if (window.innerWidth > 795) {
      let elem4 = document.getElementById("nextsec");
      let rect4 = elem4.getBoundingClientRect();

      let elemx = document.getElementById("services");
      let rectx = elemx.getBoundingClientRect();

      let elemx1 = document.getElementById("img2");
      let rectx1 = elemx1.getBoundingClientRect();
      let elem6 = document.getElementById("subslide1");
      let rect6 = elem6.getBoundingClientRect();
      let elem7 = document.getElementById("subslide2");
      let rect7 = elem7.getBoundingClientRect();
      let elem8 = document.getElementById("subslide3");
      let rect8 = elem8.getBoundingClientRect();
      let elem9 = document.getElementById("footer");
      let rect9 = elem9.getBoundingClientRect();
      console.log(rect9.y)
      if (rect9.y > 0 && rect9.y < 3200) {

        settopx((-rect9.y / 50).toString() + 'px')

        settopx2((rect9.y / 50).toString() + 'px')
      }
      if (rectx1.y < window.innerWidth && rectx1.y > 0) {

        settop((150 + rectx1.y / 5).toString() + 'px')
      }
      if (rectx.y < window.innerWidth && rectx.y > 0) {

        setmarginleft((rectx.y / 50).toString() + 'vw')
      }

      setheight(100 - (rect9.y / 9000) * 200)
      let elem5 = document.getElementById("video");
      let rect5 = elem5.getBoundingClientRect();

      if (rect8.y / window.innerHeight > 0 && rect8.y / window.innerHeight < 1) {
        setanopacity(rect8.y / window.innerHeight)

      } else if (rect8.y / window.innerHeight > 1) {

        setanopacity('1')
      }
      else if (rect8.y / window.innerHeight < 0) {

      }


      if (rect7.y / window.innerHeight > 0 && rect7.y / window.innerHeight < 1) {
        setopacity(rect7.y / window.innerHeight)
      } else {

      }


      if (rect6.y <= 0) {
        setposition('fixed')
      } else {
        setposition('absolute')
        setopacity('1')
      }

      if (rect5.y <= window.innerHeight) {

        if (rect5.y / window.innerHeight > 0.2) {
          var a = 100 - (rect5.y / window.innerHeight) * 100 + 5
          console.log(a)
          setvideowidth(a.toString() + '%')


        }
        else if (rect5.y < 0) {
        }
      }

      if (rect4.y <= window.innerHeight) {

        if (rect4.y / window.innerHeight > 0) {
          var ax = 100 - (rect4.y / window.innerHeight) * 100

          setwidthtop(ax.toString() + '%')


        }
        else if (rect4.y < 0) {
          setwidthtop('100%')

        }
      }
    }
    else {
      settop('250px')
      setwidthtop('100%')
    }

  }
  useEffect(
    () => {
      setTimeout(() => animate(true), 10);
      return () => { };
    }, [asds]
  );

  return (

    <div className="landing" id='landing'>
      <div className="scrollbar">
        <div className="subscrollbar" style={{ height: height.toString() + '%' }}>
          <img src={scroll} alt="" />
        </div>

      </div>
      <div className="topsection">
        <div className="absbg">

        </div>
        <div className="absbg2">

        </div>
        <Header />
        <h1>Your Business is Our<br /> Responsibility</h1>

        <div className="buttons bgh">
          <button className='btn1'>Get Started</button>
          <button className='btn2'> Learn More</button>
        </div>
      </div>
      <div className="nextsec" id='nextsec' style={{ width: widthtop }}>
        <Partner />
         <div className="videosec">
          <div className="video" id='video' style={{ width: videowidth, height: videowidth }}>
            <img className='gr' src={gr} alt="" />
            <img className='pb' src={pb} alt="" />

          </div>
        </div>

         <div className="services" style={{ marginLeft: marginleft }} id='services' >
         <div  className="service1" >
            <div>
              <img src={asd} alt="" />
            </div>
            <h1>Cryptocurrency<br /> Accounts</h1>
          </div>
           <div className="service1">
            <div>

              <img src={asd2} alt="" />
            </div><h1>Reward and<br /> Loyalty Programs</h1>
          </div>
          <div className="service1">
            <div>
              <img src={asd3} alt="" />
            </div>
            <h1>Enhanced <br />Interest Payments</h1>
          </div>
        </div> 
        <div className="scrolldivs">
          {/* <div className="absimgg">

          </div> */}
          <div className="psectionscroll">
            <div className="sectionscroll">
            <div >
                {data2.map(val => (
                        <div className="support supportx " id='support' key={val.heading}>
                            <div className="iconcircle">
                                <img src={val.img} alt="" />
                            </div>
                            <h1>{val.heading}</h1>
                            <p>{val.para}</p>
                        </div>
                ))

                }
            </div>

            </div>
          </div>

        </div> 
        <div className="slide1" id='subslide1'>
          <div className="subslide1" style={{ opacity: opacity, position: position }}>
            <div className="sec1">
              <h1>
                Create your Benefit Mine account
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt condimentum nibh at laoreet. Maecenas pharetra blandit leo et posuere. Vestibulum eu quam eget arcu ullamcorper sagittis. Sed vehicula fringilla lorem.</p>
            </div>
            <div className="sec2">
              <div className="cra">
                <h1>Create Account</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidun</p>
                <div className="imgs">
                  <img className='img1' src={sec1s} alt="" />
                  <img src={sec2s} className='img2' style={{ top: top }} alt="" />
                  <div className="imh">

                  </div>
                </div>


                <button>Create</button>
              </div>
            </div>
          </div>
          <div className="subslide1" style=


            {
              anopacity < 1 && anopacity > 0 ?

                { opacity: anopacity.toString(), position: position }
                :
                { opacity: (1 - parseFloat(opacity)).toString(), position: position }


            }
          >
            <div className="sec1">
              <h1>
                Create your Benefit Mine account
              </h1>
              <h1>Make cryptocurrency investment</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt condimentum nibh at laoreet. Maecenas pharetra blandit leo et posuere. Vestibulum eu quam eget arcu ullamcorper sagittis. Sed vehicula fringilla lorem.</p>
            </div>
            <div className="sec2">
              <div className="cra" ref={ref}>
                <div className="crasub">
                  <h2>Availalbe Balance</h2>
                  <h3>122.745,09 <div className="btc">BTC</div></h3>
                  <h4>$135.085,12 USD</h4>
                  <div className="coindata" style={{ marginTop: (parseFloat(opacity) * 100).toString() + 'px' }} >
                    <div className="row1">
                      <img src={btcc} alt="" />
                      <div className="details">
                        <p>BTC</p>
                        <h4>Bitcoin</h4>
                      </div>
                      <img src={btcg} alt="" />
                      <div className="details2">
                        <p>$12.974</p>
                        <h4>1.78 BTC</h4>
                      </div>
                    </div>
                    <div className="row1">
                      <img src={btcc} alt="" />
                      <div className="details">
                        <p>BTC</p>
                        <h4>Bitcoin</h4>
                      </div>
                      <img src={btcg} alt="" />
                      <div className="details2">
                        <p>$12.974</p>
                        <h4>1.78 BTC</h4>
                      </div>
                    </div>
                    <div className="row1">
                      <img src={btcc} alt="" />
                      <div className="details">
                        <p>BTC</p>
                        <h4>Bitcoin</h4>
                      </div>
                      <img src={btcg} alt="" />
                      <div className="details2">
                        <p>$12.974</p>
                        <h4>1.78 BTC</h4>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="subslide1" style={{ opacity: (1 - parseFloat(anopacity)).toString(), position: position }}>
            <div className="sec1">
              <h1>
                Create your Benefit Mine account
              </h1>
              <h1 className='make'>Make cryptocurrency investment</h1>
              <h1 className='make'>Trade and enjoy your benefit</h1>
              <p>rLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt condimentum nibh at laoreet. Maecenas pharetra blandit leo et posuere. Vestibulum eu quam eget arcu ullamcorper sagittis. Sed vehicula fringilla lorem.</p>
            </div>
            <div className="sec2">
              <div className="cra">

                <div className="crasub2">
                  <div className="linesp">
                    <div className="btns1" style={{ top: topx }}>
                      <img className='btnimg' src={btn1} alt="" />

                      <img className='btnimg2' src={btn2} alt="" />
                    </div>

                    <div className="btns2" style={{ top: topx2 }}>

                      <img className='btnimg' src={btn1} alt="" />

                      <img className='btnimg2' src={btn2} alt="" />
                    </div>
                  </div>
                  <h3>Statistics </h3>
                  <img src={graph} alt="" />
                  <div className="lines">

                  </div>
                  <div className="lines lines2">

                  </div>
                  <div className="lines lines3">

                  </div>
                  <div className="lines lines4">

                  </div>
                  <div className="lines lines5">

                  </div>
                  <div className="lines lines6">

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="slide2" id='img2'>

        </div>
        <div className="slide3" id='subslide2'>

        </div>

        {/* <div className="slide2" >

        </div> */}
        <div className="slide3" id='subslide3'>

        </div>
        {/* <div className="slide2" >

        </div> */}
        <div className="slide4">

          <div className="contact">
            <div className="absimg7">

            </div>
            <div className="absimg6">

            </div>
            <div className="contactsec1">
              <h1>Send Us Your<br /> Message</h1>

            </div>
            <div className="contactsec2">
              <p>What’s your email address? *</p>
              <textarea className='textarea1' name="" id="" cols="30" rows="10"></textarea>
              <p>Write your message*</p>
              <textarea className='textarea2' name="" id="" cols="30" rows="10"></textarea>

              <button>  Send Message</button>
              <img className='digi' src={digi} alt="" />
              <h1></h1>
            </div>
          </div>
          <div className="footer" id='footer'>
            <Footer />
          </div>

        </div> 

      </div>
    </div>
  )
}

export default Landing