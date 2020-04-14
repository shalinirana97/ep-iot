import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from '@lodash';
import { Typography, Tooltip, Icon, FormLabel, Button, Fab, Table, TableBody, TableCell, TablePagination, Paper, Input, TableRow, Divider, } from '@material-ui/core';
import { FuseAnimate} from '@fuse';

class CreateNotificationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openTariff: false,
            modalTitle: '',
            openDelete: false,
            order: {
                direction: 'asc',
                id: null
            },
            rowsPerPage: 10,
            page: 0,
            selected: [],
            data: this.props.tariff_data,
            searchText: ''
        }
    }
    handleChangeTariffTariff = (id) => {
        if (id == this.state.selectedId) {
            this.setState({
                selectedId: null
            })
        } else {
            this.setState({
                selectedId: id
            })
        }
    }
    openTariffModel(modalFlag, titleKey) {

        this.setState({ openTariff: modalFlag, modalTitle: titleKey })
    }

    handleDeleteModal(deleteFlag) {
        this.setState({
            openDelete: deleteFlag
        })
    }

    handleRequestSort = (event, property) => {
        const { order } = this.state
        const id = property;
        let direction = 'desc';

        if (order.id === property && order.direction === 'desc') {
            direction = 'asc';
        }

        this.setState({
            order: {
                ...order,
                direction,
                id
            }
        });
    }

    handleChangeSearch(e) {
        this.setState({
            searchText: e.target.value
        })
    }

    render() {
        const { rowsPerPage, page, selected, data, selectedId, order, searchText } = this.state
        return (
            <React.Fragment >
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps)(CreateNotificationPage)
