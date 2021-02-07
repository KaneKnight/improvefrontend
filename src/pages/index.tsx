import React from "react";
import { GetServerSideProps } from 'next'
import { withApollo } from '../withApollo';
import { ssrArticles, PageArticlesComp } from '../generated/page';

const Home : PageArticlesComp = ( { data , error } ) => {
    if ( error ) {
        return <p>Error times</p>
    }

    return (
        <>
           {data!.articles!.map( ( article ) => (
                <p key={article?.id}>{article?.title}</p>
            ) )}
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    return await ssrArticles.getServerPage({}, context);
}

export default withApollo( ssrArticles.withPage( () => ({}) )(Home) );
