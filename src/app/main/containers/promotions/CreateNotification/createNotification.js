import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from '@lodash';
import { Typography, Tooltip, Checkbox, FormLabel, FormControl, FormControlLabel, FormGroup, Button, Table, TableBody, TableCell, TablePagination, Paper, Input, TableRow, Divider, Radio, } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import NotificationDetailTable from './notificationDetailTable';
import ScheduleForm from './ScheduleForm';

class CreateNotificationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openTariff: false,
            modalTitle: '',
            formData: [],
            filterTable: false
        }
    }

    handleInputChange(text) {
        let { formData } = this.state;
        formData[text.target.name] = text.target.value;
        this.setState({
            formData
        })

    }

    handleDetailSubmit() {
    }

    scheduleData = (data) => {
        console.log('datata', data)
    }

    render() {
        const { notificationName, deviceType, postcode, company, installationDate, elecDistributor, premium,
            adults, child, floors, rooms, solar, hws, ac, description, link, heading, send, } = this.state.formData
        return (
            <div className="bg-white">
                <Typography className='flex flex-1 justify-between w-100'>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Notification Name </FormLabel>
                        <Input className='w-sm  inputBorder' name='notificationName' value={notificationName} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Device Type </FormLabel>
                        <Input className='w-sm inputBorder' name='deviceType' value={deviceType} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100'>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Postcode </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='postcode' value={postcode} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Installation Company </FormLabel>
                        <Input className='w-sm inputBorder' name='company' value={company} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Date Installed Before </FormLabel>
                        <Input type='date' className='w-sm inputBorder' name='installationDate' value={installationDate} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Electricity Distributor </FormLabel>
                        <Input className='w-sm inputBorder' name='elecDistributor' value={elecDistributor} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
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
                                onChange={(e) => this.handleInputChange(e, 'premium')}
                            />
                            <FormControlLabel
                                value="no"
                                control={<Checkbox color="primary" />}
                                label="No"
                                name='premium'
                                checked={premium === 'no'}
                                labelPlacement="end"
                                onChange={(e) => this.handleInputChange(e)}
                            />
                        </FormGroup>
                    </FormControl>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >No. of Adults </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='adults' value={adults} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >No. of Child </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='child' value={child} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Floors </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='floors' value={floors} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Rooms </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='rooms' value={rooms} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Solar (If yes enter KW) </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='solar' value={solar} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >HWS (If yes enter size) </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='hws' value={hws} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >AC </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='ac' value={ac} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <div className="flex flex-1 justify-start ml-1">
                    <Button className="w-128 m-16 " variant="contained" color="secondary" onClick={() => this.setState({ filterTable: true })} >
                        Apply Filter</Button>
                </div>

                {this.state.filterTable && (
                    <Typography className='m-20'>
                        <NotificationDetailTable tableContent={this.state.formData} />
                    </Typography>

                )}

                <FormLabel component="legend" className='h3 text-bold m-20'>Notification Description </FormLabel>
                <Typography className='flex flex-1 justify-between w-100 '>

                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Heading </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='heading' value={heading} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Description </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='description' value={description} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Link </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='link' value={link} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
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
                                onChange={(e) => this.handleInputChange(e)}
                            />
                            <FormControlLabel
                                value="sendNow"
                                control={<Radio color="primary" />}
                                label="Send Now"
                                name='send'
                                checked={send === 'sendNow'}
                                labelPlacement="end"
                                onChange={(e) => this.handleInputChange(e)}
                            />
                        </FormGroup>
                    </FormControl>
                </Typography>

                {send === 'schedule' && (
                    <ScheduleForm scheduleData={this.scheduleData} />
                )}

                <Typography>
                    <div className="flex justify-start">
                        <Button className="w-128 m-16 " variant="contained" color="secondary" onClick={() => this.handleDetailSubmit()} >Save</Button>
                    </div>
                </Typography>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(CreateNotificationPage)
