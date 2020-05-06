import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, FusePageCarded } from '@fuse';
import TableMainHeader from '../../../components/common/tableMainHeader';
import AgentsTable from './agentsTable';

const styles = theme => ({
    layoutRoot: {}
});

class InstallationAgentsList extends Component {

    render() {
        const { classes } = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <TableMainHeader
                        iconName='settings'
                        title='Installation Agents'
                    />
                }
                // contentToolbar={
                //     <div className="flex flex-1 px-24 w-full items-center justify-between">
                //         </div>
                // }
                content={
                    <div className="p-24">
                        <AgentsTable />
                    </div>
                }
                innerScroll
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(InstallationAgentsList);