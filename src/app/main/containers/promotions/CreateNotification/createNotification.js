import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from '@lodash';
import { Typography, Tooltip, TextField, Checkbox, FormLabel, FormControl, FormControlLabel, FormGroup, Button, Table, TableBody, TableCell, TablePagination, Paper, Input, TableRow, Divider, } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import NotificationDetailTable from './notificationDetailTable';

class CreateNotificationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openTariff: false,
            modalTitle: '',
            formData: {}
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

    handleInputChange(text) {
        let { formData } = this.state;
        formData[text.target.name] = text.target.value;
        this.setState({
            formData
        })

    }

    render() {
        const { notificationName, deviceType, postcode, company, installationDate, elecDistributor, premium,
            adults, child, floors, rooms, solar, hws, ac } = this.state.formData
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

                    <NotificationDetailTable tableContent={this.state.formData} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(CreateNotificationPage)
