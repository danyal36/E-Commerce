import { makeStyles } from 'tss-react/mui';

// eslint-disable-next-line
const errorStyles: any = makeStyles()({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  errorCode: {
    fontSize: '10.5rem',
    fontWeight: '700',
    color: '#4B5896',
  },
  leftContainer: {
    textAlign: 'center',
  },
  errorDescContainer: {
    marginTop: '2rem',
    width: '53rem',
    textAlign: 'center',
    color: '#1D3C81',
  },
  errorDescription: {
    fontSize: '1.8rem',
    marginBottom: '4rem',
  },
  backBtn: {
    width: '147px',
    height: '2.5rem',
    backgroundColor: '#1D3C81',
    color: '#FFFFFF',
    borderRadius: '100px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#0E2048',
      color: 'white',
    },
  },
});

export default errorStyles;
