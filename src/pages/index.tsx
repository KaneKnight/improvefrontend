import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { GetServerSideProps } from 'next'
import { withApollo } from '../withApollo';
import { ssrArticles, PageArticlesComp } from '../generated/page';

import { ArticleCard } from '../components/ArticleCard/article-card';
import { Article } from '../types/types';


const useStyles = makeStyles( ( theme ) => ( {
    article: {
        color: theme.palette.primary.main,
    },
} ) );

const Home : PageArticlesComp = ( { data , error } ) => {
    const classes = useStyles();

    if ( error ) {
        return <p>Error times</p>
    }

    return (
        <>
           {data!.articles!.map( ( article ) => {
                console.log(article);
                return <ArticleCard key={article!.id} article={article as Article} />;
            } )}
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    return await ssrArticles.getServerPage({}, context);
}

export default withApollo( ssrArticles.withPage( () => ({}) )(Home) );
