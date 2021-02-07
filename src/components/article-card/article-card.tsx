import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

import Moment from 'react-moment';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';

import { Article } from '../../types/types';

const useStyles = makeStyles( ( theme ) => ({
	content: {
		marginLeft: theme.spacing( 2 ),
		marginRight: theme.spacing( 2 ),
		marginTop: theme.spacing( 1 ),
		marginBottom: theme.spacing( 1 ),
		padding: 0,
	},
	item: {
		marginRight: theme.spacing( 1 ),
	},
	media: {
		height: 200,
	},
	meta: {
		marginLeft: theme.spacing( 2 ),
		marginTop: 0,
		marginBottom: 0,
		padding: 0,
	},
	right: {
		marginLeft: 'auto',
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
				<CardContent className={classes.content}>
					<Typography variant="h5" component="h2">
						{article.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{article.description}
					</Typography>
				</CardContent>
				<CardActions className={classes.meta} disableSpacing>
					<Typography className={classes.item} variant="body2" color="textSecondary" component="p">
						<Moment format='MMMM Do, YYYY' >
							{article.published_at}
						</Moment>
					</Typography>
					<Typography className={classes.item} variant="body2" color="textSecondary" component="p">
						{'\u25CF'}
					</Typography>
					<Typography className={classes.item} variant="body2" color="textSecondary" component="p">
						{`${article.author?.firstname} ${article.author?.lastname}`}
					</Typography>
					<IconButton className={classes.right} aria-label="share">
						<ShareIcon />
					</IconButton>
				</CardActions>
			</Card>
		</Grid>
	);
}