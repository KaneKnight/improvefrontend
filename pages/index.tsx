import React from "react";
import { request } from "graphql-request";
import { Navbar } from "../components/Navbar/Navbar"
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import { Grid, Segment, Header } from "semantic-ui-react";
import { GetServerSideProps } from 'next'
//import { Article } from "../types/types"
import 'semantic-ui-css/semantic.min.css'
import { withApollo } from '../withApollo';
import { ssrArticles, PageArticlesComp } from '../generated/page';
import { Article } from '../generated/graphql';

/*const displayArticles = ( articles : Article[] ) => {
    return articles.map(
        (article) => {
            return (
                <Grid.Column key={article.id}>
                    <ArticleCard article={article} />
                </Grid.Column>
            );
        }
    );
};*/

const Home : PageArticlesComp = ( { data , error } ) => {
    {/*<div>
        <Navbar page="home" />
        <Segment attached="bottom" textAlign="center" color='blue'>
            <Header as="h3"> Most Popular Articles </Header>
        </Segment>
        <Segment attached="bottom">
            <Grid columns={4} stackable doubling={true} relaxed={true}>
                { displayArticles( articles ) }
            </Grid>
        </Segment>
    </div>*/}
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