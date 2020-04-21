import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, FusePageCarded } from '@fuse';
import TableMainHeader from '../../../components/common/tableMainHeader';
import SentNotificationTable from './SentNotificationTable';

const styles = theme => ({
    layoutRoot: {}
});

class SentNotificationsList extends Component {

    render() {
        const { classes } = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <TableMainHeader
                        iconName='notifications'
                        title='Sent Notifications'
                    />
                }
                content={
                    <div className="p-24">
                        <SentNotificationTable />
                    </div>
                }
                innerScroll
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(SentNotificationsList);