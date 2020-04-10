import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple} from '@fuse';
import TableMainHeader from '../../components/common/tableMainHeader'
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
                    <TableMainHeader
                        iconName='monetization_on'
                        title='Tariffs'
                    />
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