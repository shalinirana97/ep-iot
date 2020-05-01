import React, { Component } from 'react';
import { Typography, InputLabel, Button, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CreateInstallerAgencyPage from './createAgency';

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
        {/*----------------------------------------------company details--------------------------------------------------------- */}
                    <Paper className='deviceCol'>
                        <CreateInstallerAgencyPage routeMatch={this.props.routeMatch} />
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