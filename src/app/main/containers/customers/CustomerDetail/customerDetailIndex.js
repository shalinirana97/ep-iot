import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, FuseAnimate, FusePageCarded } from '@fuse';
import CustomerDetailsPage from './customerDetails';
import DetailPageHeader from '../../../components/common/DetailPageHeader';

const styles = theme => ({
    layoutRoot: {}
});

class MainCustomerDetails extends Component {

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
                        pageTitle='Customers'
                        detailTitle={routeId && routeId != null && (routeId)}
                        subTitle='Customer'
                        pageRoute='/customers'
                    />
                }
                // contentToolbar={
                //     <div className="px-24"><h4>Details</h4></div>
                // }
                content={
                    <CustomerDetailsPage />
                }
                innerScroll
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(MainCustomerDetails);