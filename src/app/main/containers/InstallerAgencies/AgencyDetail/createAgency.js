import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from '@lodash';
import { Typography, Switch, Icon, FormLabel, FormControl, FormControlLabel, FormGroup, Button, TableBody, TableCell, TablePagination, Paper, Input, TableRow, Divider, Radio, } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import { Link } from 'react-router-dom';
import DeleteAlertDialogSlide from '../../../components/deleteAlert'
import { validateEmail } from "../../../../Utilities";

class CreateInstallerAgencyPage extends Component {

    fileObj = [];
    fileArray = [];
    constructor(props) {
        super(props);
        this.state = {
            openDelete: false,
            filterTable: false,
            formData: {},
            editable: props.routeMatch.params.id && false,
            attachments: [],
            image1Url: [null],
            errors: {},
            status: false
        }
    }

    handleInputChange(text) {
        console.log("text", text.target.checked, text.target.name)
        let { formData } = this.state;
        if (text.target.checked) {
            formData[text.target.name] = text.target.checked;
        } else {
            formData[text.target.name] = text.target.value;
        }
        this.setState({
            formData
        })
    }

    scheduleData = (data) => {
        console.log('datata', data)
    }

    handleDeleteModal(deleteFlag) {
        this.setState({
            openDelete: deleteFlag
        })
    }

    handleChangeAttachments = (e) => {
        let { attachments, image1Url } = this.state;
        attachments.push(e.target.files)
        for (let i = 0; i < attachments[0].length; i++) {
            this.fileObj.push(attachments[0][i]);
            this.fileArray.push(URL.createObjectURL(attachments[0][i]))
        }
        this.setState({
            attachments: [],
            image1Url: this.fileObj
        })
    }

    renderImages() {
        return (
            this.fileArray || []).map((url, i) => {
                return (
                    <div style={{ cursor: 'pointer', display: 'flex', justifyContent: 'flex-start', width: '8%', height: '30%', margin: '0 15px', alignItems: 'flex-start' }}>
                        <img src={url} alt="..." />
                        <Icon onClick={() => this.removeImage(i)}>clear</Icon>
                    </div>
                )
            })
        // }
    }
    addImage() {
        return (
            <div >
                <label for="file-upload" class="custom-file-upload">
                    <i class="fa fa-cloud-upload"></i>Upload file
                </label>
                <input id="file-upload" type="file" onChange={(e) => this.handleChangeAttachments(e)} multiple />
            </div>
        )
    }

    removeImage(key) {
        console.log('ket', key)
        let { image1Url } = this.state
        this.fileArray.splice(key, 1);
        image1Url.splice(key, 1)
        this.setState({ image1Url })
    }

    isValid = () => {
        let { isValid, errors } = validateEmail(this.state.formData);
        if (!isValid) {
            this.setState({ errors })
        };
        return isValid;
    };

    handleDetailSubmit(e) {
        e.preventDefault();
        let { status } = { ...this.state };
        if (this.isValid()) {
            if (!status) {
                status = true;
            }
            console.log('formdata', this.state.formData)
        }
    }
    render() {
        const { agencyName, email, postcode, contactNo, country, state, city,
            streetAddress, plotAddress, contactPerson, mobileNo, status = true, attachments = null } = this.state.formData
        const routeId = this.props.routeMatch.params.id
        const { editable, errors } = this.state

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
                        <Input className='w-sm inputBorder' id='email' name='email' value={email} disabled={editable} error={errors.email}
                            onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                        {errors.email && (
                            <span
                                className="help-block error "
                                style={{ color: "#a94442" }}
                            >
                                {errors.email}
                            </span>
                        )}
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
                <div className='flex flex-row m-20 flex-1' >
                    <FormLabel className='mb-16' >Attachements </FormLabel>
                    {this.addImage()}
                </div>

                <div className='flex mb-16'>
                    {this.renderImages()}
                </div>

                <Typography>
                    <div className="flex justify-end">
                        <Button className="w-128 m-16 " variant="contained" color="secondary" onClick={(e) => this.handleDetailSubmit(e)} >Save</Button>
                    </div>
                </Typography>
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
