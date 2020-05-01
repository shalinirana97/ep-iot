import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from '@lodash';
import { Typography, Switch, Checkbox, FormLabel, FormControl, FormControlLabel, FormGroup, Button, Table, TableBody, TableCell, TablePagination, Paper, Input, TableRow, Divider, Radio, } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import { Link } from 'react-router-dom';
import DeleteAlertDialogSlide from '../../../components/deleteAlert'

class CreateInstallerAgencyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDelete: false,
            filterTable: false,
            formData: {},
            editable: props.routeMatch.params.id && false
        }
    }

    handleInputChange(text) {
        console.log("text",text.target.checked,text.target.name)
        let { formData } = this.state;
        if(text.target.checked){
            formData[text.target.name] = text.target.checked;            
        }else{
            formData[text.target.name] = text.target.value;
        }
        this.setState({
            formData
        })
    }

    handleDetailSubmit() {
    }

    scheduleData = (data) => {
        console.log('datata', data)
    }

    handleDeleteModal(deleteFlag) {
        this.setState({
            openDelete: deleteFlag
        })
    }

    render() {
        const { agencyName, email, postcode, contactNo, country, state, city,
            streetAddress, plotAddress, contactPerson, mobileNo, status = true, attachments=[] } = this.state.formData
        const routeId = this.props.routeMatch.params.id
        const { editable = true } = this.state

        return (
            <div className="">
                {routeId && (
                    <div className="flex items-center justify-end px-16 pt-16">
                        <FuseAnimate animation="transition.slideRightIn" delay={300}>
                            <Button color="secondary" onClick={() => this.handleDeleteModal(true)} className="whitespace-no-wrap" variant="contained">
                                <span className="hidden sm:flex">Delete</span>
                            </Button>
                        </FuseAnimate>
                    </div>
                )}
                <div className="p-16 flex items-center">
                    <Typography className="h2 borderBtm" color="default">Company Details</Typography>
                </div>
                <Typography className='flex flex-1 justify-between w-100'>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Agency Name </FormLabel>
                        <Input className='w-sm  inputBorder' name='agencyName' value={agencyName} disabled={editable} disabled={editable} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Email ID </FormLabel>
                        <Input className='w-sm inputBorder' name='email' value={email} disabled={editable} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100'>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Postcode </FormLabel>
                        <Input type='number' className='w-sm inputBorder' name='postcode' value={postcode} disabled={editable} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Contact No. </FormLabel>
                        <Input className='w-sm inputBorder' name='contactNo' value={contactNo} disabled={editable} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Country </FormLabel>
                        <Input className='w-sm inputBorder' name='country' value={country} disabled={editable} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >State </FormLabel>
                        <Input className='w-sm inputBorder' name='state' value={state} disabled={editable} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >City </FormLabel>
                        <Input className='w-sm inputBorder' name='city' value={city} disabled={editable} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Street Address </FormLabel>
                        <Input className='w-sm inputBorder' name='streetAddress' value={streetAddress} disabled={editable} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Plot Address </FormLabel>
                        <Input className='w-sm inputBorder' name='plotAddress' value={plotAddress} disabled={editable} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Contact Person </FormLabel>
                        <Input className='w-sm inputBorder' name='contactPerson' value={contactPerson} disabled={editable} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>
                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Contact Person Mobile No. </FormLabel>
                        <Input className='w-sm inputBorder' name='mobileNo' value={mobileNo} disabled={editable} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                            <FormLabel component="legend" className='mb-16'>Status</FormLabel>
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={status}
                                            disabled={editable}
                                            onChange={(e) => this.handleInputChange(e)}
                                            name="status"
                                            color="primary"
                                        />
                                    }
                                />
                            </FormGroup>
                    </div>
                </Typography>

                {!editable && (
                    <Typography>
                        <div className="flex justify-end">
                            <Button className="w-128 m-16 " variant="contained" color="secondary" onClick={() => this.handleDetailSubmit()} >Save</Button>
                        </div>
                    </Typography>
                )}
                <DeleteAlertDialogSlide
                    deleteText='Company'
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

export default connect(mapStateToProps)(CreateInstallerAgencyPage)
