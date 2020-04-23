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
        const routeId = this.props.match.params.id
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <DetailPageHeader
                        pageTitle='Promotions'
                        detailTitle={routeId && routeId != null ? routeId : 'Create Notification'}
                        subTitle='Promotion'
                        pageRoute='/promotions/notifications'
                        headerIcon='add_alert'
                    />
                }

                content={
                    <div className='p-24'>
                        <CreateNotificationPage routeMatch={this.props.match} />
                    </div>
                }
                innerScroll
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(MainCreateNotification);