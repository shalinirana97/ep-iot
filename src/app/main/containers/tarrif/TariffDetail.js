import React, { Component } from 'react';
import { connect } from "react-redux";
import clsx from 'clsx';
import _ from '@lodash';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { Typography, Tooltip, Icon, FormLabel, Button, Fab, Table, TableBody, TableCell, TablePagination, TableRow, Divider, } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TariffModal from './addTariffModal';
import { FuseAnimate } from '@fuse';
import TariffTableHead from './TariffTableHead';
import DeleteAlertDialogSlide from '../../components/deleteAlert'
import { TableCustomRow, TableCustomCell } from '../../../../styles/customCss'

class TariffDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: '',
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
           order:{ ...order,
            direction,
            id}
        });
    }

    render() {
        const { expanded, rowsPerPage, page, selected, data, isExpanded, selectedId,order } = this.state
        const { tariff_data } = this.props;
        return (
            <React.Fragment>
                <div className="flex items-center justify-end ">
                    <FuseAnimate animation="transition.slideDownIn" delay={300}>
                        <Button className=" sm:flex cursor-pointer mb-10" variant="contained" color="secondary" onClick={() => this.openTariffModel(true, 'Add')}>
                            <Icon>add</Icon>Add New</Button>
                    </FuseAnimate>
                </div>
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

                                            <TableCell component="th" scope="row" align="right">
                                                <Tooltip title="Edit">
                                                    <span className=" icon_font" >
                                                        <i className="fa fa-edit " onClick={() => this.openTariffModel(true, 'Edit')} />
                                                    </span>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <span className="mx-6 icon_font" >
                                                        <i className="fa fa-trash-o " onClick={() => this.handleDeleteModal(true)} />
                                                    </span>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell component="th" scope="row" align="right">
                                                <Icon className="customIconColor text-20" onClick={() => this.handleChangeTariffTariff(n.id)}>{selectedId === n.id ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</Icon>
                                            </TableCell>
                                        </TableRow>
                                        {n.id === selectedId ?
                                            <tr className="h-64 cursor-pointer" >
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
                                            </tr>
                                            : ''}
                                    </React.Fragment>
                                );
                            })}
                    </TableBody>
                </Table>

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
