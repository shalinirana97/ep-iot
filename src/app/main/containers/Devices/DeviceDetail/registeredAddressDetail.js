import React, { Component } from 'react';
import { Typography, Button, FormLabel, Icon, Input } from '@material-ui/core';
import { FuseAnimate, FusePageCarded } from '@fuse';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import './device.scss'

class RegisteredAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editFlag: false,
            formData: {
                username: 'John doe',
                email: 'johndoe@gmail.com',
                streetAddress: '13th Merchant Place ',
                town_city: 'Albany',
                country: 'United States',
                state: 'New York',
                postcode: '10001'
            }
        }

    }

    editToggle = (item) => {
        this.setState({
            editFlag: !this.state.editFlag
        })
    }

    handleInputChange(text){
        console.log('texttarget',text.target)
            let {formData} = this.state;  
            formData[text.target.name] = text.target.value;
        this.setState({
            formData
        })

    }

    render() {
        const { editFlag, formData:{username, email, streetAddress, town_city, country, state, postcode} } = this.state

        return (
            <div className='p-16'>
                <div className="pb-16 flex items-center items-center">
                    <Typography className="h2 deviceBorderBtm" >Registered Address</Typography>
                    <Icon onClick={this.editToggle} className= 'ml-4'>edit</Icon>
                </div>
                <Typography className='w-full items-center' variant='subtitle1'>
                    <div className=' flex items-center  m-16' >
                        <FormLabel className='w-224' >Name </FormLabel>
                        {editFlag ?
                            <Input className='w-1/4' name='username' value={username} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                            : <div className='w-1/4'>{username}</div>
                            }

                    </div>
                    <div className='flex items-center  m-16'>
                        <FormLabel className='w-224'>Email </FormLabel>
                        {editFlag ?
                            <Input className='w-1/4' name='email' value={email} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                        : <div className='w-1/4'>{email}</div>
                        }
                    </div>
                    <div className='flex items-center  m-16'>
                        <FormLabel className='w-224'>Street Address</FormLabel>
                        {editFlag ?
                            <Input className='w-1/4' name='streetAddress' value={streetAddress} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                        : <div className='w-1/4'>{streetAddress}</div>
                        }
                    </div>
                    <div className='flex items-center  m-16'>
                        <FormLabel className='w-224'>Town/City </FormLabel>
                        {editFlag ?
                            <Input className='w-1/4' outlined name='town_city' value={town_city} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                        : <div className='w-1/4'>{town_city}</div>
                        }
                    </div>
                    <div className='flex items-center  m-16'>
                        <FormLabel className='w-224'>Country </FormLabel>
                        {editFlag ?
                            <Input className='w-1/4' name='country' value={country} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                        : <div className='w-1/4'>{country}</div>
                        }
                    </div>
                    <div className='flex items-center   m-16'>
                        <FormLabel className='w-224'>State </FormLabel>
                        {editFlag ?
                            <Input className='w-1/4' name='state' value={state} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                            : <div className='w-1/4'>{state}</div>
                        }
                    </div>
                    <div className='flex items-center  m-16'>
                        <FormLabel className='w-224'>Postcode</FormLabel>
                        {editFlag ?
                            <Input className='w-1/4' name='postcode' value={postcode} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                            : <div className='w-1/4'>{postcode}</div>
                        }
                    </div>
                </Typography>
            </div>
        )
    }
}

export default RegisteredAddress; 