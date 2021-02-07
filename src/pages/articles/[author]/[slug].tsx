import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from 'next';
import { Article, Document, Item } from "../../../types/types";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Segment, Header, Image, Divider, Container, Card, Icon} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import {Helmet} from "react-helmet";

interface ArticleProps {
    article : Article
}

const getJSXFromJSON = (sections : Document, id : string) => {
    return sections.map((element, index) => {
        var type = Object.keys(element)[0];
        id += index + id;
        return handleSection(type, Object.values(element)[0], id);
    });
}

const handleSection = (type : string, section : Item, id : string) => {
    if (type === "text") {
        return (
            <Container key={id} text>
                <p>{section}</p>    
                <Divider hidden/>
            </Container>       
        );
    } else if (type === "img") {
        return (
            <Container key={id} text>
                <Card fluid>
                    <Image src={section} size="massive"/>
                    <Card.Content extra>
                        <Card.Meta>
                            This is a source.
                        </Card.Meta>
                    </Card.Content>
                </Card>
                <Divider hidden/>
            </Container>            
        );
    }
}


const ArticlePage = ( { article } : ArticleProps ) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(article.createdAt);
        const createdAt = date.toLocaleDateString("en-US", options);
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{article.title}</title>
                    <link rel="canonical" href={article.url} />
                    <meta property="og:title" content={article.title}/>
                    <meta property="og:type" content="article"/>
                    <meta property="og:image" content={article.headerImage.url}/>
                    <meta property="og:url" content={article.url}/>
                    <meta property="og:description" content={article.description}/>
                    <meta property="article:published_time" content={article.createdAt}/>
                </Helmet>
                <Navbar page="articles" />
                    <div className="ui fluid image">
                            
                            <img src={article.headerImage.url} style={{opacity: "0.5", objectFit: 'cover', height: '360px'}}/>
                                <div style={{position: 'absolute', bottom: 0, width: "100%"}}>
                                    <Container textAlign="right">
                                        <Header textAlign="center" as="h1" size="huge">{article.title}</Header>
                                        <Icon name="eye" size="large"/> {article.views}
                                        <Header textAlign="left" floated="left" as="h4" dividing>Author: {article.author.firstName + " " + article.author.lastName} </Header> 
                                    </Container>        
                                </div>
                            
                    </div>            
                    <Segment  attached="bottom">
                        {/*<Header textAlign="center" as="h1" size="huge">{article.title}</Header>
                        <Header textAlign="center" as="h5" dividing>Authored by: {article.author.firstName + " " + article.author.lastName}</Header>*/}          
                        {getJSXFromJSON(article.document, article.id)}
                    </Segment>
               
            </div>
        )
}

export default ArticlePage;


export const getServerSideProps: GetServerSideProps = async (context) => {
    const params : string[] = context.req.url!.split("/");
    const getUrl : string = process.env.API + "/articles/" + params[3];
    
    const article : Article = await fetch(getUrl)
           .then((res) => res.json())
           .then((result) => {
               var article = result;
               article.url = getUrl;
               return article;
           });     
    
    if (article.statusCode) {
        return {
            notFound: true,
          }
    }

    const putUrl : string = process.env.API + "/articles/view/" + article._id;   
    await fetch(putUrl, {
        method : "PUT",
    }).then((res) => res.json())
    .then((res) => console.log(res));

    return {
        props: { article }, // will be passed to the page component as props
    };
}