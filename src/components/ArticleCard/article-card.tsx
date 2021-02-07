import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Article } from '../../types/types';

const useStyles = makeStyles( ( theme ) => ({
	media: {
		height: 200,
	},
}));

interface ArticleCardProps {
	article: Article,
}

export const ArticleCard = ( { article } : ArticleCardProps ) => {
	const classes = useStyles();
	return (
		<Grid item xs={12} sm={6} md={6} lg={4}>
			<Card>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={article?.header_image!.url}
						title={article?.title!}
					/>
				</CardActionArea>
				<CardActionArea>
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
		</Grid>
	);
}