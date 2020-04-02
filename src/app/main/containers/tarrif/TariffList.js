import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, DemoContent } from '@fuse';
import TariffHeader from './TariffHeader'
import TariffDetails from './TariffDetail'

const styles = theme => ({
    layoutRoot: {}
});

class TariffList extends Component {

    render() {
        const { classes } = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                        <TariffHeader />
                }
                // contentToolbar={
                //     <div className="px-24"><h4>Content Toolbar</h4></div>
                // }
                content={
                    <div className="p-24">
                        <TariffDetails />
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(TariffList);