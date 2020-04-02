import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TablePagination, TableRow, Checkbox } from '@material-ui/core';
import { FuseScrollbars, FuseUtils } from '@fuse';
import { withRouter } from 'react-router-dom';
import _ from '@lodash';
import DevicesTableHead from './DevicesTableHead';

const styles = theme => ({
    layoutRoot: {}
});

class InstalledDevicesTable extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>InstalledDevicesTable</div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(InstalledDevicesTable);