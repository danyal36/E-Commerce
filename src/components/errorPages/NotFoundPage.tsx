import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import notFoundImg from '../../assets/images/notFoundImg.svg';
import errorStyles from './errorStyles';

const NotFoundPage = () => {
    const { classes } = errorStyles();
    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    };

    return (
        <div className={classes.root}>
            <div className={classes.leftContainer}>
                <p className={classes.errorCode}>404</p>
                <div className={classes.errorDescContainer}>
                    <p className={classes.errorDescription}>
                        Sorry, we could not find the page you were looking for. Try going back to home and
                        searching again.
                    </p>
                    <Button className={classes.backBtn} onClick={backToHome}>
                        Back to Home
                    </Button>
                </div>
            </div>
            <div>
                <img src={notFoundImg} alt="404" />
            </div>
        </div>
    );
};

export default NotFoundPage;
