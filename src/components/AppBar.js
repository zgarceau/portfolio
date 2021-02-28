import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5b1c93',
        },
        secondary: {
            main: '#ffffff',
        },
    },
});

const redirect = () => {
    return <Redirect to='/experiencePage' />
};

export function MyAppbar() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <AppBar position="fixed">
                    <ToolBar>
                        <Button variant="contained" 
                                color="secondary" 
                                style={{ marginRight: "1em" }}
                                onClick={redirect}
                        >
                            <Typography style={{ color: '#5b1c93', fontWeight: "600" }}>
                                Home Page
                            </Typography>
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            style={{ marginRight: "1em" }}
                        >
                            <Typography style={{ color: '#5b1c93', fontWeight: "600" }}>
                                Experience
                            </Typography>
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary"
                        >
                            <Typography style={{ color: '#5b1c93', fontWeight: "600" }}>
                                About Me
                            </Typography>
                        </Button>
                    </ToolBar>
                </AppBar>
            </ThemeProvider>  
        </div>
    )
}