import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, FusePageCarded } from '@fuse';
import { FuseAnimate } from '@fuse';
import TableMainHeader from '../../components/common/tableMainHeader';
import DevicesTable from './DevicesTable'
import { ThemeProvider } from '@material-ui/styles';
import { Paper, Input, Icon, Typography, Button } from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class DevicesList extends Component {

    render() {
        const { classes } = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <TableMainHeader
                        iconName= 'devices'
                        title= 'Devices'
                        buttonTitle= 'Export Data'
                    />
                }
                // contentToolbar={
                //     <div className="flex flex-1 px-24 w-full items-center justify-between">

                //             <div className="flex flex-1 items-center pr-0 pl-12 sm:px-12">

                //                 <ThemeProvider >
                //                     <FuseAnimate animation="transition.slideDownIn" delay={300}>
                //                         <Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8" elevation={1}>

                //                             <Icon className="mr-8" color="action">search</Icon>

                //                             <Input
                //                                 placeholder="Search"
                //                                 className="flex flex-1"
                //                                 disableUnderline
                //                                 fullWidth
                //                                 value={''}
                //                                 inputProps={{
                //                                     'aria-label': 'Search'
                //                                 }}
                //                                 onChange={(e) => console.log('search', e.target.value)}
                //                             />
                //                         </Paper>
                //                     </FuseAnimate>
                //                 </ThemeProvider>
                //             </div>
                //             <div className="flex items-center justify-center pr-0 pl-12 sm:px-12">
                //                 <FuseAnimate animation="transition.slideDownIn" delay={300}>
                //                     <Button className=" sm:flex cursor-pointer" variant="contained" color="secondary" onClick={() => console.log('export data button clicked')}>
                //                         Export Data</Button>
                //                 </FuseAnimate>
                //             </div>
                //         </div>
                // }
                content={
                    <div className="p-24">
                        <DevicesTable />
                    </div>
                }
                innerScroll
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(DevicesList);