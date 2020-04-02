import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, FusePageCarded } from '@fuse';
import DeviceHeader from './DeviceHeader';
import InstalledDevicesTable from './DevicesTable'

const styles = theme => ({
    layoutRoot: {}
});

class InstalledDevicesList extends Component {

    render() {
        const { classes } = this.props;
        return (
            <FusePageCarded
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <DeviceHeader />
                }
                contentToolbar={
                    <div className="px-24"><h4>Content Toolbar</h4></div>
                }
                content={
                    <InstalledDevicesTable />
                }
                innerScroll
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(InstalledDevicesList);