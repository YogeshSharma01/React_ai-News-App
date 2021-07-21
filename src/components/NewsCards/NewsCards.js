import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import {Grid, Grow} from '@material-ui/core';
// import classes from '*.module.scss';
import useStyles from './styles';


const NewsCards = ({articles,activeArcticel}) =>{
    const classes = useStyles;
    if(!articles.length){
        return (
            <>
            
            </>
        )
    }
    return (
        <Grow in>
        <Grid className={classes.container} constiner alignItems="stretch" spacing={3}>

          {articles.map( (article, i)=>{
          return  <Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
             <NewsCard article={article} activeArcticel={activeArcticel} i={i}/>
            </Grid>
          })}

          </Grid>
        </Grow>
    );
}

export default NewsCards;