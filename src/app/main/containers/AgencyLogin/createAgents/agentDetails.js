import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from '@lodash';
import { Typography, Switch, Icon, FormLabel, FormControl, FormControlLabel, FormGroup, Button, InputAdornment, IconButton, TablePagination, Paper, Input, TableRow, Divider, Radio, } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import DeleteAlertDialogSlide from '../../../components/deleteAlert'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const handleMouseDownPassword = (event) => {
    event.preventDefault();
};

class CreateInstallerAgentPage extends Component {

    fileObj = [];
    fileArray = [];
    constructor(props) {
        super(props);
        this.state = {
            openDelete: false,
            formData: {},
            showPassword: false
        }
    }

    handleInputChange(text) {
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

    handleClickShowPassword() {
        this.setState({
            showPassword: !this.state.showPassword
        });
    };

    handleDetailSubmit(e) {
        e.preventDefault();
        console.log('formdata',this.state.formData)
    }

    handleDeleteModal(deleteFlag) {
        this.setState({
            openDelete: deleteFlag
        })
    }

    render() {
        const { formData: { agentName, email, password, contactNo, status = true }, showPassword } = this.state
        const routeId = this.props.routeMatch.params.id

        return (
            <div className="max-w-2xl w-full bg-white">
                {routeId && (
                    <div className="flex items-center justify-end px-16 pt-16">
                        <FuseAnimate animation="transition.slideRightIn" delay={300}>
                            <Button color="secondary" onClick={() => this.handleDeleteModal(true)} className="whitespace-no-wrap" variant="contained">
                                <span className="hidden sm:flex">Delete</span>
                            </Button>
                        </FuseAnimate>
                    </div>
                )}
                <Typography className='flex flex-1 justify-between w-100'>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Agent Name </FormLabel>
                        <Input className='w-sm  inputBorder' name='agentName' value={agentName} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Email ID </FormLabel>
                        <Input className='w-sm inputBorder' name='email' value={email} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100'>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Password </FormLabel>
                        <Input type={showPassword ? 'text' : 'password'} className='w-sm inputBorder' name='password' value={password} onChange={(e) => this.handleInputChange(e)}
                            inputProps={{ 'aria-label': 'description' }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => this.handleClickShowPassword()}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            } />
                    </div>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel className='mb-16' >Contact No. </FormLabel>
                        <Input max="10" className='w-sm inputBorder' name='contactNo' value={contactNo} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                    </div>
                </Typography>

                <Typography className='flex flex-1 justify-between w-100 '>
                    <div className='flex flex-col m-20 flex-1' >
                        <FormLabel component="legend" className='mb-16'>Status</FormLabel>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={status}
                                        disabled={!routeId}
                                        onChange={(e) => this.handleInputChange(e)}
                                        name="status"
                                        color="primary"
                                    />
                                }
                            />
                        </FormGroup>
                    </div>
                </Typography>

                <Typography>
                    <div className="flex justify-end">
                        {routeId ?
                            <Button className="w-128 m-16 " variant="contained" color="secondary" onClick={() => this.handleDetailSubmit()} >Save</Button>
                            : <Button className="w-128 m-16 " variant="contained" color="secondary" onClick={(e) => this.handleDetailSubmit(e)} >Create</Button>
                        }
                    </div>
                </Typography>

                <DeleteAlertDialogSlide
                    deleteText='Installation Agent'
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

export default connect(mapStateToProps)(CreateInstallerAgentPage)
