import React from 'react';
import { Button, Card, CardContent, Checkbox, Divider, FormControl, FormControlLabel, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import { FuseAnimate } from '@fuse';
import { useForm } from '@fuse/hooks';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'black',
        color: theme.palette.primary.contrastText
    }
}));

function Login() {
    const classes = useStyles();

    const { form, handleChange, resetForm } = useForm({
        email: 'test@emeraldplanet.com',
        password: 'test1234',
        remember: true
    });

    function isFormValid() {
        return (
            form.email.length > 0 &&
            form.password.length > 0
        );
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        resetForm();
    }

    return (
        <div className={clsx(classes.root, "flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0")}>

            <div className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-center md:flex-shrink-0 md:flex-1 md:text-center ">

                <FuseAnimate animation="transition.slideUpIn" delay={300}>
                    <Typography variant="h3" color="inherit" className="font-light">
                        Welcome to the <span style={{ color: '#00A78D' }}>Emerald Planet</span>
                    </Typography>
                </FuseAnimate>

                <FuseAnimate delay={400}>
                    <Typography variant="subtitle1" color="inherit" className="max-w-512 mt-16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit
                        facilisis facilisis.
                    </Typography>
                </FuseAnimate>

                <FuseAnimate animation="transition.expandIn">
                    <img className="w-xs" src="assets/images/logos/login-image.png" alt="login" />
                </FuseAnimate>
            </div>

            <FuseAnimate animation={{ translateX: [0, '100%'] }}>

                <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>

                    <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">

                        <FuseAnimate animation="transition.expandIn">
                            <img className="w-128" src="assets/images/logos/logo.png" alt="logo" />
                        </FuseAnimate>

                        <Typography variant="h6" className="md:w-full mb-32">LOGIN TO YOUR ACCOUNT</Typography>

                        <form
                            name="loginForm"
                            noValidate
                            className="flex flex-col justify-center w-full"
                            onSubmit={handleSubmit}
                        >

                            <TextField
                                className="mb-16"
                                label="Email"
                                autoFocus
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                            />

                            <TextField
                                className="mb-16"
                                label="Password"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                            />

                            <div className="flex items-center justify-between">

                                <FormControl>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="remember"
                                                checked={form.remember}
                                                onChange={handleChange} />
                                        }
                                        label="Remember Me"
                                    />
                                </FormControl>

                                <Link className="font-medium" to="/pages/auth/forgot-password-2">
                                    Forgot Password?
                                </Link>
                            </div>

                            <Link className="font-medium" to="/devices">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="w-full mx-auto mt-16"
                                    aria-label="LOG IN"
                                    disabled={!isFormValid()}
                                >
                                    LOGIN
                            </Button>
                            </Link>
                        </form>

                        <div className="my-24 flex items-center justify-center">
                            <Divider className="w-32" />
                            <span className="mx-8 font-bold">OR</span>
                            <Divider className="w-32" />
                        </div>

                        <div className="flex flex-col items-center justify-center pb-24">
                            <span className="font-medium">Don't have an account?</span>
                            <Link className="font-medium" to="/pages/auth/register-2">Create an account</Link>
                        </div>

                    </CardContent>
                </Card>
            </FuseAnimate>
        </div>
    );
}

export default Login;
