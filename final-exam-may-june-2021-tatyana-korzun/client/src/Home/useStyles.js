import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	form: {
	  display: 'flex',
	},
	searchInput: {
		flexGrow: 3
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	root: {
		width: 345,
		marginTop: theme.spacing(5),
		marginRight: theme.spacing(5),
		display: 'inline-block'
	},
}));

export default useStyles;
