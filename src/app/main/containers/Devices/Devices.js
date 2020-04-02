import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, FusePageCarded } from '@fuse';
import DeviceHeader from './DeviceHeader';
import DevicesTable from './DevicesTable'

const styles = theme => ({
    layoutRoot: {}
});

class DevicesList extends Component {

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
                // contentToolbar={
                //     <div className="px-24"><h4>Content Toolbar</h4></div>
                // }
                content={
                    <DevicesTable />
                }
                innerScroll
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(DevicesList);