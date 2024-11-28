import { gsap } from 'gsap';

export const animationTimeline = (containerRef) => {
  const q = gsap.utils.selector(containerRef);

  // 分割需要单独动画的字符
  const textBoxChars = q('.hbd-chatbox')[0];
  const hbd = q('.wish-hbd')[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.textContent
    .split('')
    .join('</span><span>')}</span>`;

  hbd.innerHTML = `<span>${hbd.textContent.split('').join('</span><span>')}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: '15deg',
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: '-15deg',
  };

  // 创建动画时间线
  const tl = gsap.timeline();

  tl.to(q('.container'), { visibility: 'visible', duration: 0.6 })
    .from(q('.one'), { opacity: 0, y: 10, duration: 0.7 })
    .from(q('.two'), { opacity: 0, y: 10, duration: 0.4 })
    .to(q('.one'), { opacity: 0, y: 10, duration: 0.7 }, '+=3.5')
    .to(q('.two'), { opacity: 0, y: 10, duration: 0.7 }, '-=1')
    .from(q('.three'), { opacity: 0, y: 10, duration: 0.7 })
    .to(q('.three'), { opacity: 0, y: 10, duration: 0.7 }, '+=3')
    .from(q('.four'), { scale: 0.2, opacity: 0, duration: 0.7 })
    .from(q('.fake-btn'), { scale: 0.2, opacity: 0, duration: 0.3 })
    .to(q('.hbd-chatbox span'), {
      visibility: 'visible',
      stagger: 0.05,
      duration: 1.5,
    })
    .to(q('.fake-btn'), { backgroundColor: 'rgb(127, 206, 248)', duration: 0.1 }, '+=4')
    .to(q('.four'), { scale: 0.2, opacity: 0, y: -150, duration: 0.5 }, '+=1')
    .from(q('.idea-1'), { ...ideaTextTrans, duration: 0.7 })
    .to(q('.idea-1'), { ...ideaTextTransLeave, duration: 0.7 }, '+=2.5')
    .from(q('.idea-2'), { ...ideaTextTrans, duration: 0.7 })
    .to(q('.idea-2'), { ...ideaTextTransLeave, duration: 0.7 }, '+=2.5')
    .from(q('.idea-3'), { ...ideaTextTrans, duration: 0.7 })
    .to(q('.idea-3 strong'), {
      scale: 1.2,
      x: 10,
      backgroundColor: 'rgb(21, 161, 237)',
      color: '#fff',
      duration: 0.5,
    })
    .to(q('.idea-3'), { ...ideaTextTransLeave, duration: 0.7 }, '+=2.5')
    .from(q('.idea-4'), { ...ideaTextTrans, duration: 0.7 })
    .to(q('.idea-4'), { ...ideaTextTransLeave, duration: 0.7 }, '+=2.5')
    .from(q('.idea-5'), {
      rotationX: 15,
      rotationZ: -10,
      skewY: '-5deg',
      y: 50,
      z: 10,
      opacity: 0,
      duration: 0.7,
    })
    .to(
      q('.idea-5 span'),
      {
        rotation: 90,
        x: 8,
        duration: 0.7,
      },
      '+=1.4'
    )
    .to(q('.idea-5'), { scale: 0.2, opacity: 0, duration: 0.7 }, '+=2')
    .from(q('.idea-6 span'), {
      scale: 3,
      opacity: 0,
      rotation: 15,
      ease: 'expo.out',
      stagger: 0.2,
      duration: 0.8,
    })
    .to(
      q('.idea-6 span'),
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: 'expo.out',
        stagger: 0.2,
        duration: 0.8,
      },
      '+=1.5'
    )
    .fromTo(
      q('.baloons img'),
      { opacity: 0.9, y: 1400 },
      { opacity: 1, y: -1000, stagger: 0.2, duration: 2.5 }
    )
    .from(
      q('.profile-picture'),
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
        duration: 0.5,
      },
      '-=2'
    )
    .from(q('.hat'), {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
      duration: 0.5,
    })
    .from(q('.wish-hbd span'), {
      opacity: 0,
      y: -50,
      rotation: 150,
      skewX: '30deg',
      ease: 'elastic.out(1, 0.5)',
      stagger: 0.1,
      duration: 0.7,
    })
    .to(
      q('.wish-hbd span'),
      {
        scale: 1,
        rotationY: 0,
        color: '#ff69b4',
        ease: 'expo.out',
        stagger: 0.1,
        duration: 0.7,
      },
      'party'
    )
    .from(
      q('.wish h5'),
      {
        opacity: 0,
        y: 10,
        skewX: '-15deg',
        duration: 0.5,
      },
      'party'
    )
    .to(q('.eight svg'), {
      visibility: 'visible',
      opacity: 0,
      scale: 80,
      repeat: 3,
      repeatDelay: 1.4,
      stagger: 0.3,
      duration: 1.5,
    })
    .to(q('.six'), { opacity: 0, y: 30, zIndex: '-1', duration: 0.5 })
    .from(q('.nine p'), { ...ideaTextTrans, stagger: 1.2, duration: 1 })
    .to(q('.last-smile'), { rotation: 90, duration: 0.5 }, '+=1');

};
