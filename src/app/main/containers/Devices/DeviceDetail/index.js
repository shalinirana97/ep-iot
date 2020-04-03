import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { FusePageSimple, FuseAnimate, FusePageCarded } from '@fuse';
import { Paper, Input, Icon, Typography } from '@material-ui/core';
import DeviceDetailPage from './DeviceDetailPage';

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
                        (<div className="flex flex-1 w-full items-center justify-between p-24">

                            <div className="flex flex-1 flex-col justify-center sm:items-start">

                                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                    <Typography className="normal-case flex items-center sm:mb-12" component={Link} role="button" to="/devices" color="inherit">
                                        {/* <Icon className="mr-4 text-20">arrow_back</Icon> */}
                                    Devices > Details
                                </Typography>
                                </FuseAnimate>
                            <div className="flex items-center">

                                <FuseAnimate animation="transition.expandIn" delay={300}>
                                    <Icon className="text-20 mr-0 sm:mr-12">details</Icon>
                                </FuseAnimate>

                                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                    <Typography className="text-20 sm:text-20 truncate items-center">Details</Typography>
                                </FuseAnimate>
                            </div>

                                    {/* <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                        <Typography variant="caption">
                                            {'From ' + order.customer.firstName + ' ' + order.customer.lastName}
                                        </Typography>
                                    </FuseAnimate> */}

                            </div>
                        </div>)
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