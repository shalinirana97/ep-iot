import React, { Component } from 'react';
import { Typography, InputLabel, Button, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

class AgencyDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agencyData: []
        }

    }

    render() {
        return (
            <div className="p-16 sm:p-24 max-w-2xl w-full">
                <div className='deviceRoot'>
                    <Paper className='deviceCol'>
                        <div className='p-16'>
                            <div className="pb-16 flex items-center">
                                <Typography className="h2 borderBtm" color="default">Company Details</Typography>
                            </div>
                            <Typography className='flex w-full items-start m-16' variant='subtitle1'>
                                <div className='w-136' >
                                    <InputLabel >Agency Name</InputLabel>
                                    <span>Dolore Magna</span>
                                </div>
                                <div className='w-192'>
                                    <InputLabel>Email ID</InputLabel>
                                    <span>magna123@gmail.com</span>
                                </div>
                                <div className='w-360'>
                                    <InputLabel>Address</InputLabel>
                                    <span>13th street, Brockton Avenue, New York 162001 </span>
                                </div>
                            </Typography>
                        </div>
                        <Divider />

                        {/* ------------------------------------Device Access detail container--------------------------------------------- */}
                        <div className='p-16' >
                            <div className="pb-16 flex">
                                <Typography className="h2 borderBtm" color="default">Installer Agents</Typography>
                            </div>

                            <Typography className='w-5/12 m-16' variant='subtitle1'>
                                <div className='w-full flex flex-1 justify-between' >
                                    <InputLabel className='pb-8'>Email ID</InputLabel>
                                    <InputLabel className='w-136 pb-8'>Name</InputLabel>
                                </div>
                                <div className='w-full'>
                                    <div className='flex justify-between'>
                                        <div className='w-136'>johndoe@gmail.com</div>
                                        <div className='w-136'>John Doe</div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='w-136'>abc123@gmail.com</div>
                                        <div className='w-136'>Moron Joseph</div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='w-136'>xyz123@gmail.com</div>
                                        <div className='w-136'>Jack</div>
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

export default AgencyDetailsPage; 