import { faPlayCircle, faPauseCircle, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import styled, { keyframes } from "styled-components";
import { useGlobalState } from "../page/contex/globalState";
import { StyleModal, StyleTitle } from "../page/home/HomePage";
import ListMusic from "./listMusic";
import imgLuffy from '../assets/luffy.png';

const StyleBackground = styled.div`
    position: absolute;
    width:100%;
    height:120%;
    background-color: rgba(0,0,0,0.5);
`;
const StyleListButton = styled.div`
    position: absolute;
    top: 80%;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
`;

const StyleButton = styled.button`
    background-color: transparent;
    border: none;
`;
const ViewTitle = styled.div`
    position: absolute;
    top: 14%;
    left: 2%;
`;
const ViewNameMusic = styled.div`
    position: absolute;
    bottom: 22%;
    right: 8%;
`;
const StyleNameMusic = styled.div`
  {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: self-start;
    justify-content: center;
    align-items: center;
  }
  & > div {
    display: flex;
    justify-content: space-around;
    width: 70%;
  }
  h1 {
      color: #fff;
      font-family: Montserrat,sans-serif;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 24px;
      position: relative;
      margin-bottom: 30px;
  }
  h1::after {
    content: ' ';
    width: 120%;
    height: 2px;
    background-color: white;
    position: absolute;
    bottom: -10px;
    left: -10%;
  }
`;
 const farmkey = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
 `


const StyleCircle = styled.div`
border: 5px solid rgba(0,0,0,0.5);
border-radius: 50%;
border-top: 5px solid #fff;
width: 170px;
height: 170px;
-webkit-animation: spin 2s linear infinite; /* Safari */
animation: ${farmkey} 2s linear infinite;
`;


function Controls({setPlaying, playing}){
    const [nameMusic, setNameMusic] = useState('');
    const [nowPlaying] = useGlobalState('nowPlaying');
    useEffect(()=>{
        setNameMusic(nowPlaying.nameMusic);
    },[nowPlaying])
    return <StyleBackground>
        <ViewTitle>
            <StyleTitle>
                <h1>pate's music</h1>
            </StyleTitle>
        </ViewTitle>
        <ViewNameMusic>
            <StyleNameMusic>
                <h1>{nameMusic}</h1>
                <div>
                    <FontAwesomeIcon icon={faMusic} size='3x' color='white' style={{ transform: "translateX(-5px)"}} />
                    <FontAwesomeIcon icon={faMusic} size='3x' color='white' style={{ transform: "translateX(-5px)"}} />
                    <FontAwesomeIcon icon={faMusic} size='3x' color='white' style={{ transform: "translateX(-5px)"}} />
                </div>
            </StyleNameMusic>
        </ViewNameMusic>
        <ListMusic/>
        <StyleListButton>
            <StyleButton onClick={()=>{setPlaying(!playing)}}>
                {playing ? (<FontAwesomeIcon icon={faPauseCircle} size='5x' color='white' style={{ transform: "translateX(-5px)"}} />)
                 : (<FontAwesomeIcon icon={faPlayCircle} size='5x' color='white' style={{ transform: "translateX(-5px)"}} />)}
            </StyleButton>
        </StyleListButton>
        { !playing && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
                    <StyleCircle></StyleCircle>
                    <img src={imgLuffy} style={{width: '100px', position:'absolute', top: 0,transform: 'translate(40%,25%)',}} alt='Image Lufy'/> 
                </div>    
        }
    </StyleBackground>
}

export default Controls;