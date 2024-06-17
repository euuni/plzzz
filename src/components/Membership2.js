import React, { useState } from "react"; // useState를 React로부터 가져옵니다
import './Membership2.css';

function Membership2() {
    const [isPetOwner, setIsPetOwner] = useState(true);
    const [petOwnerData, setPetOwnerData] = useState({
        userId: '',
        password: '',
        confirmPassword: '',
        name: '',
        birth: '',
        gender: '',
        phone: '',
        email: '',
        introduce: '',
        petGender: '',
        petNumber: '',
    });

    const [jobOwnerData, setJobOwnerData] = useState({
        userId: '',
        password: '',
        confirmPassword: '',
        name: '',
        birth: '',
        gender: '',
        phone: '',
        email: '',
    });

    const handleTabChange = (isPetOwner) => {
        setIsPetOwner(isPetOwner);
    };

    const handlePetOwnerChange = (e) => {
        setPetOwnerData({
            ...petOwnerData,
            [e.target.name]: e.target.value,
        });
    };

    const handleJobOwnerChange = (e) => {
        setJobOwnerData({
            ...jobOwnerData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isPetOwner) {
            console.log('반려인 회원가입 폼 제출합니다.', petOwnerData);
        } else {
            console.log('직종인 회원가입 폼 제출합니다.', jobOwnerData);
        }
    };

    const handleCancel = () => {
        window.location.href = "/"; // 홈페이지 주소로 이동
    };

    return (
        <div>
        <header>
            <a href="/Homepage" id="logo">
                <img src="/CHRURUP.png" alt="헤더 이미지" className="header-image" />"
            </a>
            <nav>
                <a href="#">동물병원/ 매장</a>
                <a href="#">질병 검색</a>
                <a href="#">SNS</a>
            </nav>
            <div className="login-container">
                <a href="/Login">로그인</a>
                <a href="/Membership">회원가입</a>
            </div>
            </header>
            <div className="banner">
        <img src="/dogbanner.png" alt="배너이미지" />
        <h1>회원가입</h1>
        <img src="/catbanner.png" alt="배너이미지" />
            </div>
            <div className="container">
                <div className="member-join-box">
                    <header>
                        <h1>member join</h1>
                        <p>회원가입하여 저희 홈페이지의 서비스를 이용하세요.</p>
                        <div className="steps">
                            <div className="step">Step 01<br/>약관동의</div>
                            <div className="step-active">Step 02<br/>정보입력</div>
                            <div className="step">Step 03<br/>가입완료</div>
                        </div>
                    </header>
                </div>
            </div>
                <section className="form-section">
                    <h2>정보입력</h2>
                    <div className="form-tabs">
                        <button className={isPetOwner ? "tab active" : "tab"} onClick={() => handleTabChange(true)}>반려인</button>
                        <button className={!isPetOwner ? "tab active" : "tab"} onClick={() => handleTabChange(false)}>직종인</button>
                    </div>
                    {isPetOwner ? (
                        <form id="petOwnerForm" onSubmit={handleSubmit}>
                            <label>
                                아이디
                                <input type="text" name="userId" value={petOwnerData.userId} onChange={handlePetOwnerChange} required />
                            </label>
                            <label>
                                비밀번호
                                <input type="password" name="password" value={petOwnerData.password} onChange={handlePetOwnerChange} required />
                            </label>
                            <label>
                                비밀번호 확인
                                <input type="password" name="confirmPassword" value={petOwnerData.confirmPassword} onChange={handlePetOwnerChange} required />
                            </label>
                            <label>
                                이름
                                <input type="text" name="name" value={petOwnerData.name} onChange={handlePetOwnerChange} required />
                            </label>
                            <label>
                                생년월일
                                <input type="date" name="birth" value={petOwnerData.birth} onChange={handlePetOwnerChange} required />
                            </label>
                            <label>
                                성별
                                <select name="gender" value={petOwnerData.gender} onChange={handlePetOwnerChange} required>
                                    <option value="">선택</option>
                                    <option value="male">남자</option>
                                    <option value="female">여자</option>
                                </select>
                            </label>
                            <label>
                                전화번호
                                <input type="tel" name="phone" value={petOwnerData.phone} onChange={handlePetOwnerChange} required />
                            </label>
                            <label>
                                이메일
                                <input type="email" name="email" value={petOwnerData.email} onChange={handlePetOwnerChange} required />
                            </label>
                            <label>
                                반려동물 이름
                                <input type="text" name="introduce" value={petOwnerData.introduce} onChange={handlePetOwnerChange} required />
                            </label>
                            <label>
                                반려동물 성별
                                <select name="petGender" value={petOwnerData.pet_gender} onChange={handlePetOwnerChange} required>
                                    <option value="male">수컷</option>
                                    <option value="female">암컷</option>
                                </select>
                            </label>
                            <label>
                                내장칩 번호
                                <input type="tel" name="petNumber" value={petOwnerData.pet_number} onChange={handlePetOwnerChange} required />
                            </label>
                            <div className="button-section">
                                <button type="submit" className="submit-btn">완료</button>
                                <button type="button" className="cancel-btn" onClick={handleCancel}>취소</button>
                            </div>
                        </form>
                    ) : (
                        <form id="jobOwnerForm" onSubmit={handleSubmit}>
                            <label>
                                아이디
                                <input type="text" name="userId" value={jobOwnerData.userId} onChange={handleJobOwnerChange} required />
                            </label>
                            <label>
                                비밀번호
                                <input type="password" name="password" value={jobOwnerData.password} onChange={handleJobOwnerChange} required />
                            </label>
                            <label>
                                비밀번호 확인
                                <input type="password" name="confirmPassword" value={jobOwnerData.confirmPassword} onChange={handleJobOwnerChange} required />
                            </label>
                            <label>
                                이름
                                <input type="text" name="name" value={jobOwnerData.name} onChange={handleJobOwnerChange} required />
                            </label>
                            <label>
                                생년월일
                                <input type="date" name="birth" value={jobOwnerData.birth} onChange={handleJobOwnerChange} required />
                            </label>
                            <label>
                                성별
                                <select name="gender" value={jobOwnerData.gender} onChange={handleJobOwnerChange} required>
                                    <option value="male">남자</option>
                                    <option value="female">여자</option>
                                </select>
                            </label>
                            <label>
                                전화번호
                                <input type="tel" name="phone" value={jobOwnerData.phone} onChange={handleJobOwnerChange} required />
                            </label>
                            <label>
                                이메일
                                <input type="email" name="email" value={jobOwnerData.email} onChange={handleJobOwnerChange} required />
                            </label>
                            <div className="button-section">
                                <button type="submit" className="submit-btn">완료</button>
                                <button type="button" className="cancel-btn" onClick={handleCancel}>취소</button>
                            </div>
                        </form>
                    )}
                </section>

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

export default Membership2;
