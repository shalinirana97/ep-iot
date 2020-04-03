import React from 'react';
import { Paper, Input, Icon, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { FuseAnimate } from '@fuse';
import * as Actions from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

function DevicesHeader(props) {
    const mainTheme = useSelector(({ fuse }) => fuse.settings.mainTheme);
    const searchText = '';
    return (
        <div className="flex flex-1 w-full items-center justify-between">

            <div className="flex items-center">

                <FuseAnimate animation="transition.expandIn" delay={300}>
                    <Icon className="text-32 mr-0 sm:mr-12">devices</Icon>
                </FuseAnimate>

                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                    <Typography className="truncate sm:flex" variant="h5">Devices</Typography>
                </FuseAnimate>
            </div>

            {/* <div className="flex flex-1 items-center justify-center pr-0 pl-12 sm:px-12">

                <ThemeProvider theme={mainTheme}>
                    <FuseAnimate animation="transition.slideDownIn" delay={300}>
                        <Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8" elevation={1}>

                            <Icon className="mr-8" color="action">search</Icon>

                            <Input
                                placeholder="Search"
                                className="flex flex-1"
                                disableUnderline
                                fullWidth
                                value={searchText}
                                inputProps={{
                                    'aria-label': 'Search'
                                }}
                                onChange={(e) => console.log('search', e.target.value)}
                            />
                        </Paper>
                    </FuseAnimate>
                </ThemeProvider>
            </div> */}
        </div>
    );
}

export default DevicesHeader;
