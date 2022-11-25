import Alert from '@mui/material/Alert';

export default function GuestAlert() {
    if (window.$userID === "0000") {

        return (
            <Alert
                className='guestAlert'
                severity="warning"
                action={
                    <a className='alertLogin' href="/login">Log In</a>
                }>
                Log In to save your recipes for later!
            </Alert>
        )
    } else {
        return null;
    }
}