import { type } from "os"

export interface Article {
    id : string,
    statusCode? : number,
    _id : string,
    views : number,
    document : any,
    title : string,
    slug: string,
    description : string,
    createdAt : string,
    updatedAt : string,
    author : any,
    headerImage : any,
    url: string,
};

export type Document = Item[];

export type Item = Figure | Block;

export interface Figure {
    caption: string,
    img: string,
}

export interface Block {
    text: string
}

export interface Contributor {
    confirmed: boolean,
    blocked: boolean,
    _id: string,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    provider: string,
    createdAt: string,
    updatedAt: string,
    id: string,
    role: any,
    description: string,
    youtube: string,
    picture: any,
};