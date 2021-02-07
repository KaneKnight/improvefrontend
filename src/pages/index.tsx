import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { GetServerSideProps } from 'next'
import { withApollo } from '../withApollo';
import { ssrArticles, PageArticlesComp } from '../generated/page';

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
           {data!.articles!.map( ( article ) => (
                <p className={classes.article} key={article?.id}>{article?.title}</p>
            ) )}
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    return await ssrArticles.getServerPage({}, context);
}

export default withApollo( ssrArticles.withPage( () => ({}) )(Home) );
