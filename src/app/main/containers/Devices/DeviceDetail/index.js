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
        const routeId = this.props.match.params.id
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <DetailPageHeader
                        pageTitle='Devices'
                        detailTitle={routeId && routeId != null &&( routeId)}
                        subTitle='Device'
                        pageRoute='/devices'
                    />
                }
                // contentToolbar={
                //     <div className="px-24"><h4>Details</h4></div>
                // }
                content={
                    <DeviceDetailPage routeMatch={this.props.match}/>
                }
                innerScroll
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(MainDeviceDetails);