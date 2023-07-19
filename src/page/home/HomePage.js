import styled, { keyframes } from 'styled-components';
import imgBackground from '../../assets/imageBackground.jpeg';
import { Col, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faMusic , faClose} from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import imgLuffy from '../../assets/luffy.png'

const StyleBackgroundImage = styled.div`
  position: relatiive;
  background-image: url(${imgBackground});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
export const StyleModal = styled.div`
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const ViewModal = styled.div`
    {
      position: absolute;
      top:40%;
      left: 50%;
      transform: translate( -50%, -50%);
      border-radius: 20px;
      width: 340px;
      background-color: rgba(0,0,0,0.8);
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    h2{
      text-align: center;
      margin: 20px 0px;
      color: #fff;
      font-family: Montserrat,sans-serif;
      font-weight: 500;
      text-transform: lowcase;
      letter-spacing: 1px;
      font-size: 14px;
    }

`;
export const StyleTitle = styled.div`
  {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: self-start;
    justify-content: center;
  }
  & > h1 {
      color: #fff;
      font-family: Montserrat,sans-serif;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 7px;
      font-size: 24px;
      margin-right: 20px;
  }
`;
const animationTransform = keyframes`
    0%   {
      transform: translateY(-40px);
      opacity: 0;
    }
    20%  {
      transform: translateY(-60px);
      opacity: 0.1;
    }
    40%  {
      transform: translateY(-80px);
      opacity: 0.5;
    }
    60%  {
      transform: translateY(-100px);
      opacity: 1;
    }
    80%  {
      transform: translateY(-120px);
      opacity: 0.5;
    }
    100% {
      transform: translateY(-140px);
      opacity: 0.1
    }
`;
const StyleIconMusic = styled.div`
    position: absolute;
    animation: ${animationTransform} 3s linear infinite;
`;
const StyleForm = styled.form`
    {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    & > input{
      width: 250px;
      margin: 10px 0px;
      border: 2px solid #ffffff;
      padding: 10px 20px;
      background-color: transparent;
      color: #fff;
      border-radius: 20px;
    }
    & > input:focus {
      outline: 0;
    }
    & > input::placeholder {
      color: rgba(255,255,255,0.7)
    }
    & > button {
      margin: 20px 0px;
      width: 150px;
      padding: 10px 20px;
      border: 2px solid #ffffff;
      border-radius: 50px;
      color: #fff;
      background-color: transparent;
    }
`;
const StyleDec = styled.h2`
    margin-left: 40px;
    color: #fff;
    font-family: Montserrat,sans-serif;
    font-weight: 500;
    text-transform: lowcase;
    letter-spacing: 2px;
    font-size: 14px;
    margin-right: 20px;
`;
const StyleButtonClose = styled.button`
    position: absolute;
    top: 15px;
    right: 10px;
    background-color: transparent;
    border: none;
`;
function HomePage() {
  const [visible, setVisible] = useState(false);
  useEffect(()=>{
    localStorage.removeItem('PATESMUSIC');
  },[]);
  const { register, trigger, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmitHandler = (value) => {
    if(value.username === "jecytran" && value.password === "14102022" ){
        localStorage.setItem('PATESMUSIC','pate')
        navigate('/web_music/playing');
    }else{
        setVisible(true);
    }
  }
  return (
    <>
      <StyleBackgroundImage>
            <Row style={{ position: 'absolute', top: '20%', width: '100%', justifyContent: 'center'}}>
            <Col lg={12}>
              <Row>
                  <Col lg={24}>
                    <StyleTitle>
                      <h1> Xin chào Pate</h1>
                      <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute' }}>
                          <FontAwesomeIcon icon={faHeadphones} size='2x' color='white' />
                        </div>
                        <StyleIconMusic>
                          <FontAwesomeIcon icon={faMusic} size='1x' color='white' style={{ transform: "translate(10px,-15px)"}} />
                          <FontAwesomeIcon icon={faMusic} size='1x' color='white' style={{ transform: "translate(30px,-5px)"}} />
                          <FontAwesomeIcon icon={faMusic} size='1x' color='white' style={{ transform: "translateX(-5px)"}} />
                        </StyleIconMusic>
                       </div>
                    </StyleTitle>
                  </Col>
                  <Col lg={24} style={{textAlign:'center'}}>
                    <StyleDec>Đây là web nghe nhạc dành cho một cô gái dễ thương</StyleDec>
                  </Col>
                  <Col lg={24} style={{textAlign:'center'}}>
                    <StyleDec>.- .-.. .-- .- -.-- ...     -... .     .... .- .--. .--. -.--     --. .. .-. .-..</StyleDec>
                  </Col>
              </Row>
            </Col>
            </Row>
            <Row style={{ position: 'absolute', top: '35%', width: '100%', justifyContent: 'end'}}>
            <Col lg={24}>
              <Row style={{justifyContent: 'center'}}>
                <Col lg={14}>
                  <StyleForm onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off" >
                      <input 
                        type={'text'}
                        placeholder={"Nhập tài khoản"}
                        {...register("username",{})} 
                        onKeyUp={() => {
                            trigger('username');
                        }} 
                        autoComplete="off"
                        />
                      <input 
                        type={'password'} 
                        placeholder={"Nhập mật khẩu"}
                        {...register("password",{})} 
                        onKeyUp={
                          () => {
                            trigger('password');
                        }} 
                        autoComplete="off"
                        />
                        <button type='submit'>Đăng nhập</button>
                  </StyleForm>
                </Col>
              </Row>
            </Col>
            </Row>
            {visible && <StyleModal>
                <ViewModal>
                        <StyleButtonClose onClick={()=>{setVisible(false)}} >
                            <FontAwesomeIcon icon={faClose} size='2x' color='white' style={{ transform: "translateX(-5px)"}} />
                        </StyleButtonClose>
                        <img src={imgLuffy} style={{width: '100px'}} alt='Image Lufy'/>
                        <h2>Không phải Pate thì không được vào! </h2>
                </ViewModal>     
            </StyleModal>
            }
      </StyleBackgroundImage>
      </>
  )
}

export default HomePage;
