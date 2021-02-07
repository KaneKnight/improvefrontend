import React from "react";
import { Navbar } from "../../components/Navbar/Navbar"
import { ContributorCard } from "../../components/ContributorCard/ContributorCard";
import { Grid, Segment, Header } from "semantic-ui-react";
import { GetServerSideProps } from 'next'
import { Contributor } from "../../types/types"
import 'semantic-ui-css/semantic.min.css'

interface ContributorsProps {
    contributors : Contributor[]
}

const displayContributors = ( contributors : Contributor[] ) => {
    return contributors.map(
        ( contributor ) => {
            return (
                <Grid.Column key={contributor.id}>
                    <ContributorCard key={contributor.id} contributor={contributor} />
                </Grid.Column>
            );
        }
    );
};

const Articles = ( { contributors } : ContributorsProps ) => (
    <div>
        <Navbar page="contributors" />
        <Segment attached="bottom" textAlign="center" color='blue'>
            <Header as="h3"> Most Popular Articles </Header>
        </Segment>
        <Segment attached="bottom">
            <Grid columns={4} stackable doubling={true} relaxed={true}>
                { displayContributors( contributors ) }
            </Grid>
        </Segment>
    </div>
);

export default Articles;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const url : string = process.env.API + "/users/contributors";
    const contributors : Contributor[] = await fetch(url)
    .then(( res ) => res.json())
    .then((result) => Object.values(result));

    return {
        props: { contributors }, // will be passed to the page component as props
    };
}
