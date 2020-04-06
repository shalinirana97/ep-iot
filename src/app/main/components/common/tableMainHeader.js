import React from 'react';
import { Paper, Input, Icon, Typography, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { FuseAnimate } from '@fuse';
import * as Actions from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

function TableMainHeader(props) {
    const { iconName, title, buttonTitle } = props;
    const mainTheme = useSelector(({ fuse }) => fuse.settings.mainTheme);
    const searchText = '';
    return (
        <div className="flex flex-1 w-full items-center justify-between p-24">

            <div className="flex items-center">

                <FuseAnimate animation="transition.expandIn" delay={300}>
                    <Icon className="text-32 mr-0 sm:mr-12">{iconName}</Icon>
                </FuseAnimate>

                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                    <Typography className="truncate sm:flex" variant="h5">{title}</Typography>
                </FuseAnimate>
            </div>
            {buttonTitle ?
                <div className="flex items-center justify-center pr-0 pl-12 sm:px-12">
                    <FuseAnimate animation="transition.slideDownIn" delay={300}>
                        <Button className=" sm:flex cursor-pointer" variant="contained" color="secondary" onClick={() => console.log('export data button clicked')}>
                            {buttonTitle}</Button>
                    </FuseAnimate>
                </div>
            :''}
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

export default TableMainHeader;
