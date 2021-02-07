import React, { Component } from 'react'
import Navbar from "../Navbar/Navbar"
import { Segment, Header, Image, Divider, Container, Card, Icon} from "semantic-ui-react";
import renderHTML from 'react-render-html';
import {EmailShareButton, FacebookShareButton, FacebookMessengerIcon, FacebookIcon, TwitterIcon} from "react-share";
import {Helmet} from "react-helmet";

export default class Article extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             article : null,
        };
    }
    

    componentDidMount() {
        const { author, slug } = this.props.match.params;
        const url = this.props.url + "/api/articles/" + slug;
        var result = fetch(url)
           .then((res) => res.json())
           .then((result) => {
               var article = result;
               article.url = url;
              
              this.setState({
                article : article
            });
           });  
        
        result.then( () => {
            const { article } = this.state;
            const url = this.props.url + "/api/articles/view/" + article._id;
            fetch(url, {
                method: 'PUT',
            })
            .then((res) => res.json())
            .then((res) => console.log(res))
        })   
    }
    
    render() {
        const { article, meta } = this.state;
        if (article == null) {
            return(<div />);
        }
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
}

function getJSXFromJSON(sections, id) {
    return sections.map((element, index) => {
        var type = Object.keys(element)[0];
        console.log(type);
        id += index + id;
        return handleSection(type, Object.values(element)[0], id);
    });
}

function handleSection(type, section, id) {
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
