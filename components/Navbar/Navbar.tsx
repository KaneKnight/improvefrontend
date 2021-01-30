import React from "react";
import {  Menu, Icon, Image } from "semantic-ui-react";

interface NavbarProps {
    page : string
};

export const Navbar = ( { page } : NavbarProps ) => {
    if (page === "home") {
        return (
            <Menu attached="top" pointing stackable>
                <Menu.Item href="/" link={true} active={true}>
                    <Image size="small" src="https://improveatinvesting.s3.us-east-2.amazonaws.com/3079db3325174ec39f286a5bfaf145d4.png" />
                </Menu.Item>
                <Menu.Item href="/articles" link={true}>
                    <Icon name="newspaper outline" />
                    Articles
                </Menu.Item>
                <Menu.Item href="/contributors" link={true}>
                    <Icon name="user" />
                    Contributors
                </Menu.Item>
            </Menu>
        );
    } else if (page === "articles") {
        return (
            <Menu attached="top" pointing stackable>
               <Menu.Item href="/" link={true}>
                    <Image size="small" src="https://improveatinvesting.s3.us-east-2.amazonaws.com/876d95f4720b445f8306a9fa013035d0.png" />
                </Menu.Item>
                <Menu.Item href="/articles" link={true} active={true}>
                    <Icon name="newspaper outline" />
                    Articles
                </Menu.Item>
                <Menu.Item href="/contributors" link={true}>
                    <Icon name="user" />
                    Contributors
                </Menu.Item>
           </Menu>
        );
    } else if (page === "contributors") {
        return (
            <Menu attached="top" pointing stackable>
               <Menu.Item href="/" link={true}>
                    <Image size="small" src="https://improveatinvesting.s3.us-east-2.amazonaws.com/3079db3325174ec39f286a5bfaf145d4.png" />
                </Menu.Item>
                <Menu.Item href="/articles" link={true}>
                    <Icon name="newspaper outline" />
                    Articles
                </Menu.Item>
                <Menu.Item href="/contributors" link={true} active={true}>
                    <Icon name="user" />
                    Contributors
                </Menu.Item>
           </Menu>
        );
    } else {
        return (
            <Menu attached="top" pointing stackable>
               <Menu.Item href="/" link={true}>
                    <Image size="small" src="https://improveatinvesting.s3.us-east-2.amazonaws.com/876d95f4720b445f8306a9fa013035d0.png" />
                </Menu.Item>
                <Menu.Item href="/articles" link={true}>
                    <Icon name="newspaper outline" />
                    Articles
                </Menu.Item>
                <Menu.Item href="/contributors" link={true}>
                    <Icon name="user" />
                    Contributors
                </Menu.Item>
           </Menu>
        );
    }
};