import React, { useState } from "react";
import './Homepage.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Slider from 'react-slick';

function Homepage() {
    const [slideIndex, setSlideIndex] = useState(0);

    const settings ={
        dots: true,
        infinite: true,
        speed:500,
        slidesToShow:1,
        sliderToScroll:1,
        autoplay:true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setSlideIndex(next)
    };

    return(
<div className="App">
      <header>
        <a href="/Homepage" id="logo">
          <img alt="헤더 이미지" className="header-image" src="/CHRURUP.png" />
        </a>
        <nav>
          <a href="#">동물병원/매장</a>
          <a href="#">질병 검색</a>
          <a href="#">SNS</a>
        </nav>
        <div className="login-container">
          <a href="/Login">로그인</a>
          <a href="/Membership">회원가입</a>
        </div>
      </header>
      <main className="main">
        <section className="intro">
            <h1>CHRURUP's here for your pet</h1>
            <img src="/cururup2.png"/>
        </section>
        <section className="info" id="info">
            <div className="info-item">
                <Link to="/#">
                <img src="/information.png"/>
                <h2>이용안내</h2>
                </Link>
            </div>
                <div className="info-item">
            <Link to ="/#">
            <img src="/search.png"/>
                    <h2>병원. 약국검색</h2>
            </Link>
                </div>
        </section>
        <section className="sns-section" id="sns">
            <div className="sns-container">
                <div className="sns-header">
            <img src="/Sns.png" alt="sns icon" className="sns-icon"/>
            <h2 className="sns"> SNS</h2>
                </div>
            <ul>
                <li>여름철 반려동물 유의사항</li>
                <li>우리집 강아지 츄르를 좋아해</li>
                <li>여름철 반려동물 유의사항</li>
                <li>우리집 강아지 츄르를 좋아해</li>
            </ul>
            </div>
        </section>
        <section className="disease-search" id="disease">
            <h1>질병 검색</h1>
            <div><Link to="#">반려견</Link></div>
            <div><Link to="#">반려묘</Link></div>
        </section>
        <section className="promo">
        <div className="promo-content">
                        <div className="promo-text">
                            <h1>CHRURUP SNS에 동물병원, 매장 후기를 쓰고 3만원 받아가세요.</h1>
                        </div>
                        <div className="promo-slider">
            <Slider {...settings}>
                <Link to ="/Membership">
                <div>
                    <img src="/coupon.png" alt="프로모션1"/>
                    </div>
                </Link>
                    <div>
                    <img src="/coupon2.png" alt="프로모션2"/>
                </div>
            </Slider>
                        </div>
                        </div>
        </section>
      </main>
      <footer>
        <div className="footer-contents">
          <div className="footer-links">
            <a href="#">개인정보처리방침</a>
            <a href="#">이메일추출방지정책</a>
          </div>
          <div className="owner">
            대표 : 신명진 <span className="pipe" /> 전화번호 : 031.xxx.xxxx
          </div>
          <div className="copyright">
            © 2024 CHURURUP. All rights reserved.
          </div>
        </div>
      </footer>
      </div>
    )
}

export default Homepage