import React from "react";
import { request } from "graphql-request";
import { Navbar } from "../components/Navbar/Navbar"
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import { Grid, Segment, Header } from "semantic-ui-react";
import { GetServerSideProps } from 'next'
//import { Article } from "../types/types"
import 'semantic-ui-css/semantic.min.css'
import { Article, ArticlesDocument, ArticlesQuery } from '../generated/graphql';


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

const Home = ( { articles } : ArticlesQuery ) => {
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
    
    return (
        <Something articles={articles} />
    )
};

const Something = ( { articles } : ArticlesQuery ) => {
    return (
        <React.Fragment>
            {articles!.map( a => {
                return <p key={a?.id}> {a?.title} </p>;
            })}
        </React.Fragment>
    );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res : ArticlesQuery = await request(process.env.GRAPHQL!, ArticlesDocument);
    return {
        props: res // will be passed to the page component as props
    };
}
