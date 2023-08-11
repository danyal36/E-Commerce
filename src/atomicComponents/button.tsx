import LoadingButton from '@mui/lab/LoadingButton';

type ButtonProps = {
    buttonText: string;
    loading?: boolean;
    width?: string;
    height?: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
    buttonText,
    loading = false,
    width = '5.625rem',
    height = '2.5rem',
    handleClick,
}: ButtonProps) => (
    <LoadingButton
        loading={loading}
        variant="outlined"
        type="submit"
        sx={{
            width,
            height,
            backgroundColor: '#1D3C81',
            color: '#FFFFFF',
            borderRadius: '100px',
            textTransform: 'capitalize',
            ':hover': {
                bgcolor: '#0E2048',
                color: 'white',
            },
        }}
        onClick={handleClick}
    >
        {buttonText}
    </LoadingButton>
);

export default Button;
