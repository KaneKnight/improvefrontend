import React from "react";
import { Navbar } from "../components/Navbar/Navbar"
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import { Grid, Segment, Header } from "semantic-ui-react";
import { GetServerSideProps } from 'next'
import { Article } from "../types/types"
import 'semantic-ui-css/semantic.min.css'

interface HomeProps {
    articles : Article[]
}

const displayArticles = ( articles : Article[] ) => {
    return articles.map(
        (article) => {
            return (
                <Grid.Column key={article.id}>
                    <ArticleCard article={article} />
                </Grid.Column>
            );
        }
    );
};

const Home = ( { articles } : HomeProps ) => (
    <div>
        <Navbar page="home" />
        <Segment attached="bottom" textAlign="center" color='blue'>
            <Header as="h3"> Most Popular Articles </Header>
        </Segment>
        <Segment attached="bottom">
            <Grid columns={4} stackable doubling={true} relaxed={true}>
                { displayArticles( articles ) }
            </Grid>
        </Segment>
    </div>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const url : string = process.env.API + "/articles/popular";
    const articles : Article[] = await fetch(url)
    .then(( res ) => res.json())
    .then((result) => Object.values(result));

    return {
        props: { articles }, // will be passed to the page component as props
    };
}
