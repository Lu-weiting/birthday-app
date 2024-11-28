// src/App.jsx
import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { gsap } from 'gsap';
import {
  Container,
  One,
  Two,
  Three,
  Four,
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
} from './components/StyledComponents';
import ireneImage from './assets/irene.jpg';
import hatImage from './assets/hat.svg';
import ballon1 from './assets/ballon1.svg';
import ballon2 from './assets/ballon2.svg';
import ballon3 from './assets/ballon3.svg';
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
    // 顯示 SweetAlert 「嘿嘿 !」
    Swal.fire({
      title: '嘿嘿 😋!',
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
      title: '點按鈕的是笨蛋',
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
    tl.from('.one', { opacity: 0, y: 10, duration: 0.7 })
      .from('.two', { opacity: 0, y: 10, duration: 0.4 }, '-=0.5')
      .to('.one', { opacity: 0, y: 10, duration: 0.7 }, '+=3.5')
      .to('.two', { opacity: 0, y: 10, duration: 0.7 }, '-=1')
      .from('.three', { opacity: 0, y: 10, duration: 0.7 })
      .to('.three', { opacity: 0, y: 10, duration: 0.7 }, '+=3')
      .from('.four', { scale: 0.2, opacity: 0, duration: 0.7 })
      .from('.fake-btn', { scale: 0.2, opacity: 0, duration: 0.3 })
      .to('.hbd-chatbox span', {
        visibility: 'visible',
        stagger: 0.05,
        duration: 1.5,
      })
      .to('.fake-btn', { backgroundColor: 'rgb(127, 206, 248)', duration: 0.1 }, '+=4')
      .to('.four', { scale: 0.2, opacity: 0, y: -150, duration: 0.5 }, '+=1')
      .from('.idea-1', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', duration: 0.7 })
      .to('.idea-1', { opacity: 0, y: 20, rotationY: 5, skewX: '-15deg', duration: 0.7 }, '+=2.5')
      .from('.idea-2', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', duration: 0.7 })
      .to('.idea-2', { opacity: 0, y: 20, rotationY: 5, skewX: '-15deg', duration: 0.7 }, '+=2.5')
      .from('.idea-3', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', duration: 0.7 })
      .to('.idea-3 strong', {
        scale: 1.2,
        x: 10,
        backgroundColor: 'rgb(21, 161, 237)',
        color: '#fff',
        duration: 0.5,
      })
      .to('.idea-3', { opacity: 0, y: 20, rotationY: 5, skewX: '-15deg', duration: 0.7 }, '+=2.5')
      .from('.idea-4', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', duration: 0.7 })
      .to('.idea-4', { opacity: 0, y: 20, rotationY: 5, skewX: '-15deg', duration: 0.7 }, '+=2.5')
      .from('.idea-5', {
        rotationX: 15,
        rotationZ: -10,
        skewY: '-5deg',
        y: 50,
        z: 10,
        opacity: 0,
        duration: 0.7,
      })
      .to('.idea-5 span', {
        rotation: 90,
        x: 8,
        duration: 0.7,
      }, '+=1.4')
      .to('.idea-5', { scale: 0.2, opacity: 0, duration: 0.7 }, '+=2')
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
      .from('.wish h5', {
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
      .from('.nine p', { opacity: 0, y: -20, rotationX: 5, skewX: '15deg', stagger: 1.2, duration: 1 })
      .to('.last-smile', { rotation: 90, duration: 0.5 }, '+=1');

    // 儲存時間線以便後續重啟
    timelineRef.current = tl;
  };

  return (
    <>
      {/* 初始畫面：點擊開始文字和按鈕 */}
      {!isAnimating && (
        <div>
          <StartText onClick={handleStartClick}>點擊開始</StartText>
          <StartButton onClick={handleButtonClick}>按鈕</StartButton>
        </div>
      )}

      {/* 動畫容器 */}
      <Container ref={containerRef}>
        <One className="one">
          <h1 className="one">
            Yo <span id="name">楊 mimi</span>
          </h1>
          <Two className="two" id="greetingText">
            我真的很喜歡你的名字！
          </Two>
        </One>

        <Three className="three">
          <p>今天是你的生日！！ :D</p>
        </Three>

        <Four className="four">
          <TextBox className="text-box">
            <p className="hbd-chatbox">
              {splitText('生日快樂！！願你的每一天都充滿快樂和驚喜！')}
            </p>
            <FakeBtn className="fake-btn">發送</FakeBtn>
          </TextBox>
        </Four>

        <Five className="five">
          <p className="idea-1">那是我本來要做的。</p>
          <p className="idea-2">但後來我停下了。</p>
          <p className="idea-3">
            我意識到，我想做一些<br />
            <strong>特別的</strong>。
          </p>
          <p className="idea-4">因為，</p>
          <p className="idea-5">
            你很特別 <span>:)</span>
          </p>
          <p className="idea-6">
            <span>S</span>
            <span>O</span>
          </p>
        </Five>

        <Six className="six">
          <img src={ireneImage} alt="個人照片" className="profile-picture" id="imagePath" />
          <img src={hatImage} alt="帽子" className="hat" />
          <Wish className="wish">
            <WishHBD className="wish-hbd">
              {splitText('生日快樂！')}
            </WishHBD>
            <h5 id="wishText">願你的夢想都能實現！;)</h5>
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

        <Nine className="nine">
          <p>好了，現在回來告訴我你是否喜歡。</p>
          <p id="replay" onClick={() => {
            // 重置動畫容器
            if (timelineRef.current) {
              timelineRef.current.kill(); // 停止動畫
            }
            gsap.to(containerRef.current, { visibility: 'hidden', duration: 0.5 });
            setIsAnimating(false);
          }}>
            或者點擊這裡，再看一遍。
          </p>
          <p className="last-smile">:)</p>
        </Nine>
      </Container>
    </>
  );
}

export default App;
