import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

const alanKey  = '3d27162b9dee3612328c40909df9e4d92e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = ()=>{
    const [newsArticals, setNewsArticals] = useState([]);
    const [activeArcticel, setActiveArticel] = useState(-1);
    useEffect(()=>{
        alanBtn({
            key : alanKey,
            onCommand: ({command, articles})=>{
                if(command === 'newHeadlines'){
                   setNewsArticals(articles);
                   setActiveArticel(-1);
                }else if(command === 'highlight'){
                    setActiveArticel((prevActiveArticle)=> prevActiveArticle+1);
                }
            }
        })

    },[]);
    return (
        <div>
           <div className="logoContainer">
           <img className="logo-img" src="https://www.fakenewsai.com/images/fakenewstileweb.png" alt="img"/>
           </div>
            <NewsCards articles = {newsArticals} activeArcticel={activeArcticel}/>
        </div>
    );
}

export default App;