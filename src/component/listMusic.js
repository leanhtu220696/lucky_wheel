import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {v4 as uuid } from "uuid";
import { useGlobalState } from "../page/contex/globalState";

export const listDataMusic = [
    {
        id: 0,
        nameMusic: 'Relax with my cat',
        linkMusic:'https://youtu.be/GrG2-oX5z24',
    },
    {
        id: 1,
        nameMusic: 'Sleepless Night',
        linkMusic:'https://youtu.be/Nyx6SBixRE8',
    },
    {
        id: 2,
        nameMusic: 'Listening to lofig',
        linkMusic:'https://youtu.be/e_e1WMNFiHc',
    },
    {
        id: 3,
        nameMusic: 'coffee to go',
        linkMusic:'https://youtu.be/2gliGzb2_1I',
    },
    {
        id: 4,
        nameMusic: '카페에서 듣기 좋은 잔잔한 팝송★彡',
        linkMusic:'https://youtu.be/1IuAlqDG-D8',
    },
];

const StyleBackground = styled.div`
    position: absolute;
    width: 15%;
    height: 60%;
    top: 25%;
    left: 2%;
    display: flex;
    flex-direction: column;
    border-right: 2px solid #fff;
`;

const StyleItems = styled.a`
    {
        display:flex;
        flex-direction: row;
        margin: 10px;
        align-items: center;
        justify-content:flex-start;
    }
    &:hover{
        & > svg{
            color: #fff;
        }
        & > a {
            margin-bottom:0px;
            color: #fff;
            margin-left: 10px;
            font-family: Montserrat,sans-serif;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 16px;
            margin-right: 20px;
        }
    }
    & > a {
        margin-bottom:0px;
        color: silver;
        margin-left: 10px;
        font-family: Montserrat,sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 14px;
        margin-right: 20px;
    }
`;

function ListMusic(){
    const[nowPlaying, setNowPlaying] = useGlobalState('nowPlaying');
    return (
        <StyleBackground>
            {
                listDataMusic.map((items)=>{
                    return (
                        <StyleItems key={uuid()}>
                            { items.id === nowPlaying.id ? (<FontAwesomeIcon icon={faPause} size='1x' color='silver' style={{ transform: "translateX(-5px)"}} />)
                                : (<FontAwesomeIcon icon={faPlay} size='1x' color='silver' style={{ transform: "translateX(-5px)"}} />)}
                            <a onClick={()=>{
                                setNowPlaying({
                                    id: items.id,
                                    nameMusic: items.nameMusic,
                                    linkMusic:items.linkMusic,
                                })}}>
                                {items.nameMusic}
                            </a>
                        </StyleItems>
                    )
                })
            }
        </StyleBackground>
    )
}

export default ListMusic;