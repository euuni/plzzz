import React from 'react';
import './Login.css'

function Login() {
  return (
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
      <div className="banner">
        <img alt="배너이미지" src="/dogbanner.png" />
        <h1>로그인</h1>
        <img alt="배너이미지" src="/catbanner.png" />
      </div>
      <div className="login-box">
        <div className="login-left">
          <h1>LOGIN</h1>
          <p>서비스를 이용하시기 위해서는 로그인을 하셔야 됩니다. 가입하신 아이디와 비밀번호를 입력해주세요.</p>
        </div>
        <div className="login-right">
          <form id="login-form">
            <label htmlFor="username">아이디</label>
            <input id="username" name="username" required type="text" />
            <label htmlFor="password">비밀번호</label>
            <input id="password" name="password" required type="password" />
            <button type="submit">로그인</button>
            <button
              onClick={() => window.location.href = '/Membership'}
              type="button"
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
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
  );
}

export default Login;
