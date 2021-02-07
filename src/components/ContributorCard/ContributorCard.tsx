import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import { Contributor } from "../../types/types"
import Link from 'next/link';

interface ContributorCardProps {
    contributor : Contributor
}

export const ContributorCard = ( { contributor } : ContributorCardProps ) => {
    if (contributor.youtube !== "") {
        return (
            <Card centered fluid>
                <Image src={contributor.picture.url} size='medium' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{contributor.firstName + " " + contributor.lastName}</Card.Header>
                    <Card.Description>
                        {contributor.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href={"/articles/" + contributor.username} >
                        <Icon name="newspaper outline" />
                        {" View their articles here."}                     
                    </a>                    
                </Card.Content>
                <Card.Content extra>
                    <a href="https://www.youtube.com/channel/UC0BmR87idftiYEwug3AYLow" target="_blank">
                        <Icon name="youtube"/>
                        {" Visit their channel here."}         
                    </a>
                </Card.Content>
            </Card>
        )
    }
    return (
        <Card centered fluid>
            <Image src={contributor.picture.url} size='medium' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{contributor.firstName + " " + contributor.lastName}</Card.Header>
                <Card.Description>
                    {contributor.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a href={"https://improveatinvesting.com/articles/" + contributor.username} >
                    <Icon name="newspaper outline" />
                    {" View their articles here."}                     
                </a> 
            </Card.Content>
        </Card>
    )
};