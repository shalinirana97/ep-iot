import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { FusePageSimple, DemoContent } from '@fuse';
import TableMainHeader from '../../components/common/tableMainHeader';
import CustomersTable from './CustomersTable';
 
const styles = theme => ({
    layoutRoot: {}
});

class CustomerList extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <TableMainHeader
                        iconName='people'
                        title='Customers'
                    />
                }
                // contentToolbar={
                //     <div className="px-24"><h4>Content Toolbar</h4></div>
                // }
                content={
                    <div className="p-24">
                        <CustomersTable />
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(CustomerList);