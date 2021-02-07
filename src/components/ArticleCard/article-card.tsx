import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { DeepExtractTypeSkipArrays }from 'ts-deep-extract-types';

import { ArticlesQuery } from '../../generated/graphql';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

type Article = DeepExtractTypeSkipArrays<ArticlesQuery, ["articles"]>;

interface ArticleCardProps {
	article: Article,
}

export const ArticleCard = ( { article } : ArticleCardProps ) => {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={article.header_image?.url}
					title={article.title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{article.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{article.description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}