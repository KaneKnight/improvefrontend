import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Grid, Segment, Header } from "semantic-ui-react";

class Home extends Component { 

    componentDidMount() {
        document.title = "Improve At Investing - A place to learn about finance.";
        var url = "https://improveatinvesting.com/api/articles/popular"
        fetch(url)
           .then((res) => res.json())
           .then((result) => {
                var articles = Object.values(result);
                this.setState({
                    articles : articles
                });
            });
    }
    
    render() {
        if (this.state == null) {
            return null
        }
        const { articles } = this.state;
        return (
            <div>
                <Navbar page="home"/>
                <Segment attached="bottom" textAlign="center" color='blue'>
                    <Header as="h3"> Most Popular Articles </Header>
                </Segment>
                <Segment attached="bottom">
                    <Grid columns={4} stackable doubling={true} relaxed={true}>
                        {this.articles(articles)}
                    </Grid>
                </Segment>
                
            </div>   
        );
    }

    articles = (articles) => {
        return articles.map(
            (article) => {
                return (
                    <Grid.Column key={article.id}>
                        <ArticleCard key={article.id} article={article} />
                    </Grid.Column>
                );
            }
        );
    };
}


export default Home;