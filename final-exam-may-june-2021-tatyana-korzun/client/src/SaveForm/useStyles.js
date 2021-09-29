import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	form: {
	  display: 'flex',
	  justifyContent: 'space-between',
	},
	field: {
		flexGrow: 1,
		marginRight: theme.spacing(2)
	}
}));

export default useStyles;
