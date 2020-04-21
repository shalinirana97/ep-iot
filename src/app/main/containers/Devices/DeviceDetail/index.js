import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, FuseAnimate, FusePageCarded } from '@fuse';
import DeviceDetailPage from './DeviceDetailPage';
import DetailPageHeader from '../../../components/common/DetailPageHeader';

const styles = theme => ({
    layoutRoot: {}
});

class MainDeviceDetails extends Component {

    render() {
        const { classes } = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <DetailPageHeader
                        pageTitle='Devices'
                        detailTitle='Device Type'
                        subTitle='Device'
                        pageRoute='/devices'
                    />
                }
                // contentToolbar={
                //     <div className="px-24"><h4>Details</h4></div>
                // }
                content={
                    <DeviceDetailPage />
                }
                innerScroll
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(MainDeviceDetails);