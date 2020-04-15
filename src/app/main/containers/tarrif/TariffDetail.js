import React, { Component } from 'react';
import { connect } from "react-redux";
import clsx from 'clsx';
import _ from '@lodash';
import { Typography, Tooltip, Icon, FormLabel, Button, Fab, Table, TableBody, TableCell, TablePagination, Paper, Input, TableRow, Divider, } from '@material-ui/core';
import TariffModal from './addTariffModal';
import { FuseAnimate, FuseScrollbars } from '@fuse';
import TariffTableHead from './TariffTableHead';
import DeleteAlertDialogSlide from '../../components/deleteAlert'

class TariffDetails extends Component {
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
                <div className="flex items-center justify-between px-12 py-20 bg-white">
                    <div className="flex flex-1 items-center pr-12">
                        <FuseAnimate animation="transition.slideDownIn" delay={300}>
                            <Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8" elevation={1}>

                                <Icon className="mr-8" color="action">search</Icon>

                                <Input
                                    placeholder="Search"
                                    className="flex flex-1"
                                    disableUnderline
                                    fullWidth
                                    value={searchText}
                                    inputProps={{
                                        'aria-label': 'Search'
                                    }}
                                    onChange={(e) => this.handleChangeSearch(e)}
                                />
                            </Paper>
                        </FuseAnimate>
                    </div>
                    <FuseAnimate animation="transition.slideRightIn" delay={300}>
                        <Button color="secondary" onClick={() => this.openTariffModel(true, 'Add')} className="whitespace-no-wrap" variant="contained">
                            <span className="hidden sm:flex">Add New</span>
                            <span className="flex sm:hidden">New</span>
                        </Button>
                    </FuseAnimate>
                </div>

                <div className="w-full flex flex-col bg-white">
                    <FuseScrollbars className="flex-grow overflow-x-auto">
                        <Table className="min-w-xl" aria-labelledby="tableTitle">
                            <TariffTableHead
                                order={order}
                                onRequestSort={this.handleRequestSort}
                            />

                            <TableBody>
                                {_.orderBy(data, [
                                    (o) => {
                                        switch (order.id) {
                                            case 'postcode':
                                                {
                                                    return o.postCode;
                                                }
                                            default:
                                                {
                                                    return o[order.id];
                                                }
                                        }
                                    }
                                ], [order.direction])
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map(n => {
                                        const isSelected = selected.indexOf(n.id) !== -1;
                                        return (
                                            <React.Fragment>
                                                <TableRow
                                                    className="h-44 cursor-pointer"
                                                    hover
                                                    aria-checked={isSelected}
                                                    tabIndex={-1}
                                                    key={n.id}
                                                // onClick={event => handleClick(n)}
                                                >

                                                    <TableCell component="th" scope="row">
                                                        {n.postCode}
                                                    </TableCell>

                                                    <TableCell className="truncate" component="th" scope="row">
                                                        {n.timing}
                                                    </TableCell>

                                                    <TableCell component="th" scope="row" align="left">
                                                        <Tooltip title="Edit">
                                                            <span className=" icon_font" >
                                                                <i className="fa fa-edit " onClick={() => this.openTariffModel(true, 'Edit')} />
                                                            </span>
                                                        </Tooltip>
                                                        <Tooltip title="Delete">
                                                            <span className="mx-8 icon_font" >
                                                                <i className="fa fa-trash-o " onClick={() => this.handleDeleteModal(true)} />
                                                            </span>
                                                        </Tooltip>
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" align="right">
                                                        <Icon className="customIconColor text-20" onClick={() => this.handleChangeTariffTariff(n.id)}>{selectedId === n.id && n.timing === 'Variable' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</Icon>
                                                    </TableCell>
                                                </TableRow>
                                                {n.id === selectedId && n.timing === 'Variable' ?
                                                    <TableRow className="h-64 cursor-pointer" >
                                                        <td colspan='4'>
                                                            <Typography variant='subtitle1'>
                                                                <div className='mb-4 mx-16' style={{ color: '#00A78D' }}>Weekday </div>
                                                            </Typography>

                                                            <Typography className='w-full flex items-start mb-10' variant='subtitle2'>
                                                                <div className='mx-20'>
                                                                    <div >Peak </div>
                                                                    {n.weekday.peakTime.map((item, i) => {
                                                                        return (
                                                                            <div className='flex items-center'>
                                                                                <FormLabel className='w-64'>Time </FormLabel>
                                                                                <div className='w-auto'>{item.startTime}-{item.endTime}</div>
                                                                            </div>
                                                                        )
                                                                    })}

                                                                </div>

                                                                <div className='mx-24'>
                                                                    <div >Off Peak </div>
                                                                    {n.weekday.offTime.map((item, i) => {
                                                                        return (
                                                                            <div className='flex items-center'>
                                                                                <FormLabel className='w-64'>Time </FormLabel>
                                                                                <div className='w-auto'>{item.startTime}-{item.endTime}</div>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>

                                                                <div className='mx-20'>
                                                                    <div >Shoulder </div>
                                                                    {n.weekday.shoulderTime.map((item, i) => {
                                                                        return (
                                                                            <div className='flex items-center'>
                                                                                <FormLabel className='w-64'>Time </FormLabel>
                                                                                <div className='w-auto'>{item.startTime}-{item.endTime}</div>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </Typography>

                                                            {/* ---------------------------Weekends data----------------------- */}
                                                            <Typography variant='subtitle1'>
                                                                <div className='mb-4 mx-16' style={{ color: '#00A78D' }}>Weekend </div>
                                                            </Typography>

                                                            <Typography className='w-full flex items-start mb-10' variant='subtitle2'>
                                                                <div className='mx-20'>
                                                                    <div >Peak </div>
                                                                    {n.weekends.peakTime.map((item, i) => {
                                                                        return (
                                                                            <div className='flex items-center'>
                                                                                <FormLabel className='w-64'>Time </FormLabel>
                                                                                <div className='w-auto'>{item.startTime}-{item.endTime}</div>
                                                                            </div>
                                                                        )
                                                                    })}

                                                                </div>

                                                                <div className='mx-24'>
                                                                    <div >Off Peak </div>
                                                                    {n.weekends.offTime.map((item, i) => {
                                                                        return (
                                                                            <div className='flex items-center'>
                                                                                <FormLabel className='w-64'>Time </FormLabel>
                                                                                <div className='w-auto'>{item.startTime}-{item.endTime}</div>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>

                                                                <div className='mx-20'>
                                                                    <div >Shoulder </div>
                                                                    {n.weekends.shoulderTime.map((item, i) => {
                                                                        return (
                                                                            <div className='flex items-center'>
                                                                                <FormLabel className='w-64'>Time </FormLabel>
                                                                                <div className='w-auto'>{item.startTime}-{item.endTime}</div>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </Typography>
                                                            <Divider />
                                                        </td>
                                                    </TableRow>
                                                    : ''}
                                            </React.Fragment>
                                        );
                                    })}
                            </TableBody>
                        </Table>


                    </FuseScrollbars>
                </div>
                <TariffModal
                    tariffModal={() => this.openTariffModel()}
                    openModal={this.state.openTariff}
                    modalTitle={this.state.modalTitle}
                />
                <DeleteAlertDialogSlide
                    deleteText='PostCode'
                    handleDelete={() => this.handleDeleteModal()}
                    openDeleteModal={this.state.openDelete}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tariff_data: state.tariffDetail.tariff_data
    }
}

export default connect(mapStateToProps)(TariffDetails)
