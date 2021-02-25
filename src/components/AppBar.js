import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    menuButton: {
        marginLeft: theme.spacing(2),
    },

    title: {
        flexGrow: 1,
    },
}));

export function Appbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <ToolBar>
                    <Button>Home Page</Button>
                </ToolBar>
            </AppBar>
        </div>
    )
}