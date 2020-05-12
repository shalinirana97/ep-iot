import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from '@lodash';
import { Typography, Tooltip, Checkbox, FormLabel, FormControl, FormControlLabel, FormGroup, Button, Table, TableBody, TableCell, TablePagination, Paper, Input, TableRow, Divider, Radio, } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import NotificationDetailTable from './notificationDetailTable';
import ScheduleForm from './ScheduleForm';
import { Link } from 'react-router-dom';
import DeleteAlertDialogSlide from '../../../components/deleteAlert'

class CreateNotificationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDelete: false,
            filterTable: false,
            formData: [],
            singleFormData: {},
            copied: props.routeMatch.params.id ? true : false
        }
    }

    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridApi.setDomLayout('autoHeight');
    }

    handleInputChange(text) {
        this.setState({
            singleFormData: { ...this.state.singleFormData, [text.target.name]: text.target.value }
        })

    }
    // handleInputChange(text) {
    //         let { formData } = this.state;
    //         formData[text.target.name] = text.target.value;
    //         this.setState({
    //             formData
    //         })
    // }

    handleDetailSubmit() {
    }

    scheduleData = (data) => {
        console.log('datata', data)
        this.setState({
            singleFormData: { ...this.state.singleFormData, schedule:data}
        })
    }
    
    applyFiltersToData = () => {
        let { formData, singleFormData } = this.state;
        this.setState({ filterTable: true, formData: [...formData, singleFormData] }, () => { });
    }

    handleDeleteModal(deleteFlag) {
        this.setState({
            openDelete: deleteFlag
        })
    }

    render() {
        const { notificationName, deviceType, postcode, company, installationDate, elecDistributor, premium,
            adults, child, floors, rooms, solar, hws, ac, description, link, heading, send, } = this.state.singleFormData
        const routeId = this.props.routeMatch.params.id
        const { copied, filterTable } = this.state

        return (
            <div className="bg-white">
                {routeId && (
                    <div className="flex items-center justify-between px-12 py-20 bg-white">
                        <div className="flex flex-1 items-center pr-12">
                            <FuseAnimate animation="transition.slideDownIn" delay={300}>
                                <Link className="font-medium icon_font" to="/promotion/create-notification">
                                    <Button color="secondary" className="whitespace-no-wrap" variant="contained">
                                        <span className="hidden sm:flex">Copy Template</span>
                                    </Button>
                                </Link>
                            </FuseAnimate>
                        </div>
                        <FuseAnimate animation="transition.slideRightIn" delay={300}>
                            <Button color="secondary" onClick={() => this.handleDeleteModal(true)} className="whitespace-no-wrap" variant="contained">
                                <span className="hidden sm:flex">Delete</span>
                            </Button>
                        </FuseAnimate>
                    </div>
                )}
                <Typography className='flex flex-1 justify-between w-100'>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Notification Name </FormLabel>
                        <Input className='w-sm  inputBorder' name='notificationName' value={notificationName} disabled={copied} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Device Type </FormLabel>
                        <Input className='w-sm inputBorder' name='deviceType' value={deviceType} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100'>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Postcode </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='postcode' value={postcode} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Installation Company </FormLabel>
                        <Input className='w-sm inputBorder' name='company' value={company} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Date Installed Before </FormLabel>
                        <Input type='date' className='w-sm inputBorder' name='installationDate' value={installationDate} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Electricity Distributor </FormLabel>
                        <Input className='w-sm inputBorder' name='elecDistributor' value={elecDistributor} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='m-20'>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Premium</FormLabel>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="yes"
                                control={<Checkbox color="primary" />}
                                label="Yes"
                                name='premium'
                                labelPlacement="end"
                                checked={premium === 'yes'}
                                disabled={copied} onChange={(e) => this.handleInputChange(e, 'premium')}
                            />
                            <FormControlLabel
                                value="no"
                                control={<Checkbox color="primary" />}
                                label="No"
                                name='premium'
                                checked={premium === 'no'}
                                labelPlacement="end"
                                disabled={copied} onChange={(e) => this.handleInputChange(e)}
                            />
                        </FormGroup>
                    </FormControl>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >No. of Adults </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='adults' value={adults} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >No. of Child </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='child' value={child} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Floors </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='floors' value={floors} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Rooms </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='rooms' value={rooms} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Solar (If yes enter KW) </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='solar' value={solar} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >HWS (If yes enter size) </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='hws' value={hws} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >AC </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='ac' value={ac} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <div className="flex flex-1 justify-start ml-1">
                    <Button className="w-128 m-16 " variant="contained" color="secondary" onClick={() => this.applyFiltersToData()} >
                        Apply Filter</Button>
                </div>

                {filterTable && (
                    <Typography className='m-20'>
                        <NotificationDetailTable tableContent={this.state.formData} onGridReady={this.onGridReady} />
                    </Typography>

                )}

                <FormLabel component="legend" className='h3 text-bold m-20'>Notification Description </FormLabel>
                <Typography className='flex flex-1 justify-between w-100 '>

                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Heading </FormLabel>
                        <Input className='w-sm inputBorder' name='heading' value={heading} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Description </FormLabel>
                        <Input className='w-sm inputBorder' name='description' value={description} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Link </FormLabel>
                        <Input className='w-sm inputBorder' name='link' value={link} disabled={copied} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='m-20'>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="schedule"
                                control={<Radio color="primary" />}
                                label="Schedule"
                                name='send'
                                labelPlacement="end"
                                checked={send === 'schedule'}
                                disabled={copied}
                                onChange={(e) => this.handleInputChange(e)}
                            />
                            <FormControlLabel
                                value="sendNow"
                                control={<Radio color="primary"/>}
                                label="Send"
                                name='send'
                                checked={send === 'sendNow'}
                                labelPlacement="end"
                                disabled={copied}
                                onChange={(e) => this.handleInputChange(e)}
                            />
                        </FormGroup>
                    </FormControl>
                </Typography>

                {send === 'schedule' && (
                    <ScheduleForm scheduleData={this.scheduleData} />
                )}
                {!copied &&(
                <Typography>
                    <div className="flex justify-start">
                        <Button className="w-128 m-16 " variant="contained" color="secondary" onClick={() => this.handleDetailSubmit()} >Save</Button>
                    </div>
                </Typography>
                )}
                <DeleteAlertDialogSlide
                    deleteText='Notification'
                    handleDelete={() => this.handleDeleteModal()}
                    openDeleteModal={this.state.openDelete}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(CreateNotificationPage)
