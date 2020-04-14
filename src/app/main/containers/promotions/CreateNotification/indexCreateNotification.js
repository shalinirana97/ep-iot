import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, FuseAnimate, FusePageCarded } from '@fuse';
import CreateNotificationPage from './createNotification';
import DetailPageHeader from '../../../components/common/DetailPageHeader';

const styles = theme => ({
    layoutRoot: {}
});

class MainCreateNotification extends Component {

    render() {
        const { classes } = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <DetailPageHeader
                        pageTitle='Promotions'
                        detailTitle='Create Notification'
                        subTitle='Promotion'
                        pageRoute='/promotions'
                    />
                }
                
                content={
                    <CreateNotificationPage />
                }
                innerScroll
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(MainCreateNotification);