import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import Controls from '../../component/control';
import { listDataMusic } from '../../component/listMusic';
import { useGlobalState } from '../contex/globalState';

function PlayerPage(){
    const [ nowPlaying, setNowPlaying ] = useGlobalState('nowPlaying');
    const navigate = useNavigate();
    useEffect(()=>{
        const isLogin = localStorage.getItem('PATESMUSIC');
        if(!isLogin){
            navigate('/web_music');
        } 
        window.scrollTo({
            top: (window.screen.height * 0.1),
            behavior: 'smooth',
        });
        
    },[])
    const [playing, setPlaying] = useState(true);
    const [url, setUrl] = useState('');

    useEffect(()=>{
        setUrl(nowPlaying.linkMusic);
    },[nowPlaying]);

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative'}}>
            <Controls playing={playing} setPlaying={setPlaying} setUrl={setUrl} ></Controls>
            <ReactPlayer
                controls={false}
                playing={playing}
                onPause={()=>{                    
                    setPlaying(false);}
                }
                onPlaying={()=>{                    
                    setPlaying(true);}
                }
                onEnded={()=>{
                    const itemNew = listDataMusic.find((item)=> {
                        return item.id === (nowPlaying.id + 1);
                    })

                    if(itemNew){
                        setNowPlaying({
                            id: itemNew.id,
                            nameMusic: itemNew.nameMusic,
                            linkMusic: itemNew.linkMusic
                        })
                    }else{
                        const itemIndex0 = listDataMusic.find((item)=> {
                            return item.id === 0;
                        })
                        setNowPlaying({
                            id: itemIndex0.id,
                            nameMusic: itemIndex0.nameMusic,
                            linkMusic: itemIndex0.linkMusic
                        })
                    }
                }}
                width='100%'
                height='120%'
                url={url}
                style={{padding:'10px 0px', overflow: 'hidden'}}
            />
        </div>
    );
}

export default PlayerPage;
