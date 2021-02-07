import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { GetServerSideProps } from 'next'
import { withApollo } from '../withApollo';
import { ssrArticles, PageArticlesComp } from '../generated/page';

import Grid from '@material-ui/core/Grid';

import { ArticleCard } from '../components/article-card/article-card';
import { NavBar } from '../components/nav-bar/nav-bar';
import { Article } from '../types/types';


const useStyles = makeStyles( ( theme ) => ( {
    container: {
        margin: theme.spacing( 2 ),
    },
} ) );

const Home : PageArticlesComp = ( { data , error } ) => {
    const classes = useStyles();

    if ( error ) {
        return <p>Error times</p>
    }

    return (
        <>
        <NavBar />
        <div className={classes.container} >
            <Grid container spacing={4}>
            {data!.articles!.map( ( article ) => (
                    <ArticleCard key={article!.id} article={article as Article} />
                ))}
            </Grid>
        </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    return await ssrArticles.getServerPage({}, context);
}

export default withApollo( ssrArticles.withPage( () => ({}) )(Home) );
