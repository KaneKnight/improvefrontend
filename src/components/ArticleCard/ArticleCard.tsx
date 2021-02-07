import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import { Article } from "../../types/types";

interface ArticleCardProps {
    article : Article
}

export const ArticleCard = ( { article } : ArticleCardProps ) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date( article.createdAt );
    const createdAt = date.toLocaleDateString("en-US", options);
    return (
        <a href={"/articles/" + article.author.username + "/" + article.slug} >
            <Card centered fluid link>
                <Image src={article.headerImage.url} size='medium' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{article.title}</Card.Header>
                    <Card.Description>
                        {article.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Card.Meta>
                        {createdAt + "\xa0\xa0\xa0\xa0\xa0\xa0"}
                        <Icon name='eye'/> {article.views}
                        <Image floated='right' src={article.author.picture.url} size='mini' wrapped circular />
                    </Card.Meta>
                    
                    <Card.Meta>
                        Author: {article.author.firstName + " " + article.author.lastName}
                    </Card.Meta>
                </Card.Content>
            </Card>
        </a>
    )
}