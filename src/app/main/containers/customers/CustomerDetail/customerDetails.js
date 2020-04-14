import React, { Component } from 'react';
import { Typography, InputLabel, Button, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

class CustomerDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerData: []
        }

    }

    render() {
        return (
            <div className="p-16 sm:p-24 max-w-2xl w-full">
                <div className='deviceRoot'>
                    <Paper className='deviceCol'>
                        {/* <div className='p-16'> 
                            <div className="pb-16 flex items-center">
                                <Typography className="h2 borderBtm" color="default">Customer Details</Typography>
                             </div>
                            <Typography className='flex w-full items-start' variant='subtitle1'>
                                <div className='w-136 m-16' >
                                    <InputLabel >Agency Name</InputLabel>
                                    <span>Dolore Magna</span>
                                </div>
                                <div className='w-192 m-16'>
                                    <InputLabel>Email ID</InputLabel>
                                    <span>magna123@gmail.com</span>
                                </div>
                                <div className='w-360 m-16'>
                                    <InputLabel>Address</InputLabel>
                                    <span>13th street, Brockton Avenue, New York 161361 </span>
                                </div>
                            </Typography>
                        </div>
                        <Divider /> */}

                        {/* ------------------------------------Device Access detail container--------------------------------------------- */}
                        <div className='p-16' >
                            <div className="pb-16 flex">
                                <Typography className="h2 borderBtm" color="default">Customer Details</Typography>
                            </div>

                            <Typography className='w-6/12 m-16' variant='subtitle1'>
                                <div className='w-192 mb-16'>
                                    <InputLabel>Email ID</InputLabel>
                                    <span>johndoe@gmail.com</span>
                                </div>
                                <div className='flex flex-1 justify-between' >
                                    <InputLabel className='w-136 pb-8'>Owned Device</InputLabel>
                                    <InputLabel className='w-136 pb-8'>Device ID</InputLabel>
                                    <InputLabel className='w-136 pb-8'>Postcode</InputLabel>
                                </div>
                                <div className=''>
                                    <div className='flex justify-between'>
                                        <div className='w-136'>Device 1</div>
                                        <div className='w-136'>22345678</div>
                                        <div className='w-136'>3999</div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='w-136'>Device 2</div>
                                        <div className='w-136'>34562105</div>
                                        <div className='w-136'>4765</div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='w-136'>Device 3</div>
                                        <div className='w-136'>29876502</div>
                                        <div className='w-136'>5888</div>
                                    </div>
                                </div>
                            </Typography>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default CustomerDetailsPage; 