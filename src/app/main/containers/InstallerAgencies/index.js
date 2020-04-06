import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, FusePageCarded } from '@fuse';
import { FuseAnimate } from '@fuse';
import TableMainHeader from '../../components/common/tableMainHeader';
import InstallerTable from './InstalrAgencyDetailTable'
import { ThemeProvider } from '@material-ui/styles';
import { Paper, Input, Icon, Typography, Button } from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class InstallerAgencyList extends Component {

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
                    title='Installer Agencies'
                    />
                }
                // contentToolbar={
                //     <div className="flex flex-1 px-24 w-full items-center justify-between">
                //         </div>
                // }
                content={
                    <InstallerTable />
                }
                innerScroll
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(InstallerAgencyList);