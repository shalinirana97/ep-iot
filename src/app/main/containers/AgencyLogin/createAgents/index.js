import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, FusePageCarded } from '@fuse';
import { FuseAnimate } from '@fuse';
import CreateInstallerAgentPage from './agentDetails';
import DetailPageHeader from '../../../components/common/DetailPageHeader'

const styles = theme => ({
    layoutRoot: {}
});

class AgentDetails extends Component {

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
                        pageTitle='Installation Agents'
                        detailTitle={routeId && routeId != null ? routeId : 'New Agent'}
                        subTitle='Installer Agent'
                        pageRoute='/installation-agents'
                    />
                }
                // contentToolbar={
                //     <div className="flex flex-1 px-24 w-full items-center justify-between">
                //         </div>
                // }
                content={
                    <div className='p-24'>
                        <CreateInstallerAgentPage routeMatch={this.props.match} />
                    </div>
                }
                innerScroll
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(AgentDetails);