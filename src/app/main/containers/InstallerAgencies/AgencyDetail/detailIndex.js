import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, FusePageCarded } from '@fuse';
import { FuseAnimate } from '@fuse';
import AgencyDetailsPage from './installerAgencyDetails';
import DetailPageHeader from '../../../components/common/DetailPageHeader'

const styles = theme => ({
    layoutRoot: {}
});

class InstallerAgencyDetail extends Component {

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
                        pageTitle='Installer Agencies'
                        detailTitle={routeId && routeId != null ? routeId : 'Agency Name'}
                        subTitle='Installer Agency'
                        pageRoute='/installer-agencies'
                     />
                }
                // contentToolbar={
                //     <div className="flex flex-1 px-24 w-full items-center justify-between">
                //         </div>
                // }
                content={
                    <AgencyDetailsPage routeMatch={this.props.match} />
                }
                innerScroll
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(InstallerAgencyDetail);