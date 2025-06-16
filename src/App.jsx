// src/App.jsx
import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { gsap } from 'gsap';
import {
  Container,
  Image2,
  Zero,
  One,
  NineP,
  To,
  Three,
  Three2,
  Four,
  Four2,
  TextBox,
  FakeBtn,
  Five,
  Six,
  Baloons,
  Seven,
  Eight,
  WishHBD,
  Wish,
  Nine,
  StartText,
  StartButton,
  Final,
} from './components/StyledComponents';
import mimiImage from './assets/mimi.jpeg';
import hatImage from './assets/hat.svg';
import ballon1 from './assets/ballon1.svg';
import ballon2 from './assets/ballon2.svg';
import ballon3 from './assets/ballon3.svg';
import bula2 from './assets/bula-4.gif';
import hero from './assets/hero.gif';
import thank from './assets/image.png';
import bImage from './assets/b.jpeg';
import './index.css'; // 如果有全局樣式

function App() {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // 將文字拆分成字母包裹在 <span> 中
  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index}>{char}</span>
    ));
  };

  // 點擊「點擊開始」文字時觸發
  const handleStartClick = () => {
    
    Swal.fire({
      title: '🤪',
      icon: 'success',
      confirmButtonText: '真的開始',
    }).then(() => {
      // 開始動畫流程
      setIsAnimating(true);
      animationTimeline();
    });
  };

  // 點擊按鈕時觸發
  const handleButtonClick = () => {
    Swal.fire({
      title: 'It’s a fake button—gotcha!',
      icon: 'warning',
      confirmButtonText: '再試一次',
    }).then(() => {
      // 停止動畫時間線（如果正在進行）
      if (timelineRef.current) {
        timelineRef.current.kill(); // 停止當前動畫
      }
      // 隱藏動畫容器
      gsap.to(containerRef.current, { visibility: 'hidden', duration: 0.5 });
      // 重置狀態，回到初始畫面
      setIsAnimating(false);
    });
  };

  // 定義動畫時間線
  const animationTimeline = () => {
    const tl = gsap.timeline();

    // 確保容器可見
    tl.to(containerRef.current, { visibility: 'visible', duration: 0.6 });

    // 一開始的文字動畫
    tl.from('.one', { opacity: 0, y: 10, duration: 0.6 })
      .to('.one', { opacity: 0, y: 10, duration: 0.6 }, '+=1.5')
      .from('.two', { opacity: 0, y: 10, duration: 0.7 })
      .to('.two', { opacity: 0, y: 10, duration: 0.7 }, '+=3')
      .from('.three', { opacity: 0, y: 10, duration: 0.7 })
      .to('.three', { opacity: 0, y: 10, duration: 0.7 }, '+=3')
      .from('.three2', { opacity: 0, y: 10, duration: 0.6 })
      .from('.fake-btn', { scale: 0.2, opacity: 0, duration: 0.2 })
      .to('.hbd-chatbox span', {
        visibility: 'visible',
        stagger: 0.05,
        duration: 0.6,
      })
      .to('.fake-btn', { backgroundColor: 'rgb(127, 206, 248)', duration: 0.1 }, '+=1')
      .to('.three2', { scale: 0.2, opacity: 0, y: -150, duration: 0.5 }, '+=1')
      .from('.four', { scale: 0.2, opacity: 0, duration: 0.7 })
      .to('.four strong', {
        scale: 1.2,
        x: 10,
        backgroundColor: 'rgb(21, 161, 237)',
        color: '#fff',
        duration: 0.5,
      })
      .to('.four', { scale: 0.2, opacity: 0, y: -150, duration: 0.6 }, '+=3')
      // .from('.idea-2', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', duration: 0.7 })
      // .to('.idea-2', { opacity: 0, y: 20, rotationY: 5, skewX: '-15deg', duration: 0.7 }, '+=2.5')
      // .from('.idea-3', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', duration: 0.7 })
      // .to('.idea-3 strong', {
      //   scale: 1.2,
      //   x: 10,
      //   backgroundColor: 'rgb(21, 161, 237)',
      //   color: '#fff',
      //   duration: 0.5,
      // })
      // .to('.idea-3', { opacity: 0, y: 20, rotationY: 5, skewX: '-15deg', duration: 0.7 }, '+=2.5')
      // .from('.idea-4', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', duration: 0.7 })
      // .to('.idea-4', { opacity: 0, y: 20, rotationY: 5, skewX: '-15deg', duration: 0.7 }, '+=2.5')
      // .from('.idea-5', {
      //   rotationX: 15,
      //   rotationZ: -10,
      //   skewY: '-5deg',
      //   y: 50,
      //   z: 10,
      //   opacity: 0,
      //   duration: 0.7,
      // })
      // .to('.idea-5 span', {
      //   rotation: 90,
      //   x: 8,
      //   duration: 0.7,
      // }, '+=1.4')
      // .to('.idea-5', { scale: 0.2, opacity: 0, duration: 0.7 }, '+=2')
      .from('.idea-6 span', {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: 'expo.out',
        stagger: 0.2,
        duration: 0.8,
      })
      .to('.idea-6 span', {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: 'expo.out',
        stagger: 0.2,
        duration: 0.8,
      }, '+=1.5')
      .fromTo('.baloons img', { opacity: 0.9, y: 1400 }, {
        opacity: 1,
        y: -1000,
        stagger: 0.2,
        duration: 2.5,
      })
      .from('.profile-picture', {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
        duration: 0.5,
      }, '-=2')
      .from('.hat', {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
        duration: 0.5,
      })
      .from('.wish-hbd span', {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: '30deg',
        ease: 'elastic.out(1, 0.5)',
        stagger: 0.1,
        duration: 0.7,
      })
      .to('.wish-hbd span', {
        scale: 1,
        rotationY: 0,
        color: '#ff69b4',
        ease: 'expo.out',
        stagger: 0.1,
        duration: 0.7,
      }, 'party')
      .from('.wish h2', {
        opacity: 0,
        y: 10,
        skewX: '-15deg',
        duration: 0.5,
      }, 'party')
      .to('.eight svg', {
        visibility: 'visible',
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
        stagger: 0.3,
        duration: 1.5,
      })
      .to('.six', { opacity: 0, y: 30, zIndex: '-1', duration: 0.5 })
      .from('.final1', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', duration: 0.8 })
      .to('.final1', { opacity: 0, y: 20, rotationY: 5, skewX: '-15deg', duration: 0.8 }, '+=2.5')
      .from('.final2', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', duration: 0.8 })
      .to('.final2', { opacity: 0, y: 20, rotationY: 5, skewX: '-15deg', duration: 0.8 }, '+=2.5')
      .from('.final3', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', duration: 0.8 })
      .to('.final3', { opacity: 0, y: 20, rotationY: 5, skewX: '-15deg', duration: 0.8 }, '+=2.5')
      .from('.final4', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', duration: 0.8 })
      .to('.final4', { opacity: 0, y: 20, rotationY: 5, skewX: '-15deg', duration: 0.8 }, '+=2.5')
      .from('.final5', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', duration: 0.8 })
      .to('.final5', { opacity: 0, y: 20, rotationY: 5, skewX: '-15deg', duration: 0.8 }, '+=2.5')
      .from('.nine p', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', stagger: 1.2, duration: 1 })
      .from('.nine span', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', stagger: 1.2, duration: 1 })
      .to('.last-smile', { rotation: 90, duration: 0.5 }, '+=1');

    // 儲存時間線以便後續重啟
    timelineRef.current = tl;
  };

  return (
    <>
      {/* 初始畫面：點擊開始文字和按鈕 */}
      {!isAnimating && (
        <div>
          <StartText onClick={handleStartClick}>click here</StartText>
          <StartButton onClick={handleButtonClick}>Button</StartButton>
        </div>
      )}

      {/* 動畫容器 */}
      <Container ref={containerRef}>
        <One className="one">
          <To> To </To>
          <h2 className="one">
            <span id="name">Brian</span>
          </h2>
        </One>
        <Zero className="two">
            <p> Thanks so much for looking after me and my mom.</p>
            <img src={thank} alt="" />
        </Zero>

        <Three className="three">
          <p> you are just like hero</p>
          <p> 🔥</p>
          <img src={hero} alt="" />
        </Three>
        <Three2 className="three2" >
          <p className='three2'>Today</p>
          <p> I want to say</p>
          <TextBox className="text-box">
            <p className="hbd-chatbox">
              {splitText("Happ Father's Day")}
            </p>
            <FakeBtn className="fake-btn">發送</FakeBtn>
          </TextBox>
        </Three2>
        <Four className="four">
          <Four2 className="four">
            <p> hope you like this gift and</p>
            <p> have a <strong>great day!!</strong></p>
          </Four2>
        </Four>

        <Five className="five">
          
          <p className="idea-6">
            <span>A</span>
            <span>N</span>
            <span>D</span>
          </p>
        </Five>

        <Six className="six">
          <img src={bImage} alt="個人照片" className="profile-picture" id="imagePath" />
          <Image2 src={hatImage} alt="帽子" className="hat" />
          <Wish className="wish">
            <WishHBD className="wish-hbd">
              {splitText('HAPPY DAD’S DAY')}
            </WishHBD>
            <h2 id="wishText"> All The Best</h2>
          </Wish>
        </Six>

        <Seven className="seven">
          <Baloons className="baloons">
            {Array.from({ length: 30 }).map((_, index) => (
              <img
                key={index}
                src={[ballon1, ballon2, ballon3][index % 3]}
                alt="氣球"
              />
            ))}
          </Baloons>
        </Seven>

        <Eight className="eight">
          {Array.from({ length: 9 }).map((_, index) => (
            <svg key={index} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" />
            </svg>
          ))}
        </Eight>
        {/* <Final>
          <p className="final1">
            不知道以後我們會怎麼樣
            <p className='final1-5'>但！</p>
          </p>
          <p className="final2">很開心能與你相遇</p>
          <p className="final3">
            對我來說
          </p>
          <p className="final4">
            因為你<br />
            我大學的青春 <br />
            足矣
          </p>
          <p className="final5">
            祝我們都要快樂 😋
          </p>
        </Final> */}

        {/* <Nine className="nine">
          <p>想聽更多心裡話？</p>
          <p>來杯酒再說😋</p>
          <span>
            不知道你有沒有看到最後<br />
            但希望這個禮物能幫助你多少舒緩生理期的痛xd
          </span>
          <p id="replay" onClick={() => {
            // 重置動畫容器
            if (timelineRef.current) {
              timelineRef.current.kill();
            }
            gsap.to(containerRef.current, { visibility: 'hidden', duration: 0.5 });
            setIsAnimating(false);
          }} className='replay'>
            點擊這裡，可再看一遍。
          </p>
          <p className="last-smile">:)</p>
        </Nine> */}
      </Container>
    </>
  );
}

export default App;
