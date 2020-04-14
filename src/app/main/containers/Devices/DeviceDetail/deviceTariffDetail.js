import React, { Component } from 'react';
import { Typography, Button, FormLabel, Icon, Input, InputLabel } from '@material-ui/core';
import { FuseAnimate, FusePageCarded } from '@fuse';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import './device.scss'

class DeviceTariff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editFlag: false,
            formData: {
                distributor: 'ABC Distributor',
                retailer: 'XYZ Retailer',
                weekday: {
                    peak: '10.00-12.00 ',
                    peakTime: '09.00-11.00',
                    offPeak: '10.00-12.00',
                    offTime: '09.00-11.00',
                    shoulder: '10.0-11.01',
                    shoulderTime: '09:00-11:00',
                    dailyCharge: '$10',
                    discount: '5%'
                },
                weekend: {
                    peak: '10.00-12.00 ',
                    peakTime: '09.00-11.00',
                    offPeak: '10.00-12.00',
                    offTime: '09.00-11.00',
                    shoulder: '10.0-11.01',
                    shoulderTime: '09:00-11:00',
                    dailyCharge: '$8',
                    discount: '7%'
                }
            }
        }

    }

    editToggle = (item) => {
        this.setState({
            editFlag: !this.state.editFlag
        })
    }

    handleInputChange(text, key) {
        let { formData } = this.state;
        if(key == 'weekday'){
            formData.weekday[text.target.name] = text.target.value;
            this.setState({
                formData
            })  
        } else if (key == 'weekend') {
            formData.weekend[text.target.name] = text.target.value;
            this.setState({
                formData
            })
        } else{
            formData[text.target.name] = text.target.value;
            this.setState({
                formData
            })
        }
        
    }

    render() {
        const { editFlag, formData: { distributor, retailer, weekday, weekend } } = this.state

        return (
            <div className='p-16'>
                <div className="pb-16 flex items-center items-center">
                    <Typography className="h2 borderBtm" >Tariff Details</Typography>
                    <Icon onClick={this.editToggle} className='ml-4'>edit</Icon>
                </div>
                <Typography className='flex w-full items-center' variant='subtitle1'>
                    <div className='w-1/4 m-16' >
                        <InputLabel >Electricity distributor</InputLabel>
                        {editFlag ?
                            <Input name='distributor' value={distributor} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                            : <div className='pt-8' >{distributor}</div>
                        }
                    </div>
                    <div className='w-1/4 m-16'>
                        <InputLabel>Electricity Retailer</InputLabel>
                        {editFlag ?
                            <Input name='retailer' value={retailer} onChange={(e) => this.handleInputChange(e)} inputProps={{ 'aria-label': 'description' }} />
                            : <div className='pt-8' >{retailer}</div>
                        }
                    </div>
                </Typography>

                <Typography variant='subtitle1'>
                    <div className='mb-4 mx-16' style={{ color: '#00A78D' }}>Weekday </div>
                </Typography>

                <Typography className='w-full flex items-start' variant='subtitle1'>
                    <div className='mx-16'>
                        <div >Peak </div>
                        <div className=' flex items-center' >
                            <FormLabel className='w-88' >Rate </FormLabel>
                            {editFlag ?
                                <Input className='w-128' name='peak' value={weekday.peak} onChange={(e) => this.handleInputChange(e,'weekday')} inputProps={{ 'aria-label': 'description' }} />
                                : <div className='w-auto'>{weekday.peak}</div>
                            }

                        </div>
                        <div className='flex items-center'>
                            <FormLabel className='w-88'>Time </FormLabel>
                            {editFlag ?
                                <Input className='w-128' name='peakTime' value={weekday.peakTime} onChange={(e) => this.handleInputChange(e,'weekday')} inputProps={{ 'aria-label': 'description' }} />
                                : <div className='w-auto'>{weekday.peakTime}</div>
                            }
                        </div>
                    </div>

                    <div className='mx-16'>
                        <div >Off Peak </div>
                        <div className=' flex items-center' >
                            <FormLabel className='w-88' >Rate </FormLabel>
                            {editFlag ?
                                <Input className='w-128' name='offPeak' value={weekday.offPeak} onChange={(e) => this.handleInputChange(e,'weekday')} inputProps={{ 'aria-label': 'description' }} />
                                : <div className='w-auto'>{weekday.offPeak}</div>
                            }

                        </div>
                        <div className='flex items-center'>
                            <FormLabel className='w-88'>Time </FormLabel>
                            {editFlag ?
                                <Input className='w-128' name='offTime' value={weekday.offTime} onChange={(e) => this.handleInputChange(e,'weekday')} inputProps={{ 'aria-label': 'description' }} />
                                : <div className='w-auto'>{weekday.offTime}</div>
                            }
                        </div>
                    </div>

                    <div className='mx-16'>
                        <div >Shoulder </div>
                        <div className=' flex items-center' >
                            <FormLabel className='w-88' >Rate </FormLabel>
                            {editFlag ?
                                <Input className='w-128' name='shoulder' value={weekday.shoulder} onChange={(e) => this.handleInputChange(e,'weekday')} inputProps={{ 'aria-label': 'description' }} />
                                : <div className='w-auto'>{weekday.shoulder}</div>
                            }

                        </div>
                        <div className='flex items-center'>
                            <FormLabel className='w-88'>Time </FormLabel>
                            {editFlag ?
                                <Input className='w-128' name='shoulderTime' value={weekday.shoulderTime} onChange={(e) => this.handleInputChange(e,'weekday')} inputProps={{ 'aria-label': 'description' }} />
                                : <div className='w-auto'>{weekday.shoulderTime}</div>
                            }
                        </div>
                    </div>
                    <div className='mx-16'>
                        <div >Daily charge </div>
                        {editFlag ?
                            <Input className='w-88' name='dailyCharge' value={weekday.dailyCharge} onChange={(e) => this.handleInputChange(e,'weekday')} inputProps={{ 'aria-label': 'description' }} />
                            : <FormLabel className='w-64' >{weekday.dailyCharge}</FormLabel>
                        }
                    </div>
                    <div className='mx-16'>
                        <div >Discount </div>
                        {editFlag ?
                            <Input className='w-88' name='discount' value={weekday.discount} onChange={(e) => this.handleInputChange(e,'weekday')} inputProps={{ 'aria-label': 'description' }} />
                            : <FormLabel className='w-64' >{weekday.discount}</FormLabel>
                        }
                    </div>
                </Typography>


                <Typography variant='subtitle1'>
                    <div className='mb-4 mx-16' style={{ color: '#00A78D' }}>Weekend </div>
                </Typography>

                <Typography className='w-full flex items-start' variant='subtitle1'>
                    <div className='mx-16'>
                        <div >Peak </div>
                        <div className=' flex items-center' >
                            <FormLabel className='w-88' >Rate </FormLabel>
                            {editFlag ?
                                <Input className='w-128' name='peak' value={weekend.peak} onChange={(e) => this.handleInputChange(e,'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                : <div className='w-auto'>{weekend.peak}</div>
                            }

                        </div>
                        <div className='flex items-center'>
                            <FormLabel className='w-88'>Time </FormLabel>
                            {editFlag ?
                                <Input className='w-128' name='peakTime' value={weekend.peakTime} onChange={(e) => this.handleInputChange(e,'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                : <div className='w-auto'>{weekend.peakTime}</div>
                            }
                        </div>
                    </div>

                    <div className='mx-16'>
                        <div >Off Peak </div>
                        <div className=' flex items-center' >
                            <FormLabel className='w-88' >Rate </FormLabel>
                            {editFlag ?
                                <Input className='w-128' name='offPeak' value={weekend.offPeak} onChange={(e) => this.handleInputChange(e,'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                : <div className='w-auto'>{weekend.offPeak}</div>
                            }

                        </div>
                        <div className='flex items-center'>
                            <FormLabel className='w-88'>Time </FormLabel>
                            {editFlag ?
                                <Input className='w-128' name='offTime' value={weekend.offTime} onChange={(e) => this.handleInputChange(e,'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                : <div className='w-auto'>{weekend.offTime}</div>
                            }
                        </div>
                    </div>

                    <div className='mx-16'>
                        <div > Shoulder </div>
                        <div className=' flex items-center' >
                            <FormLabel className='w-88' >Rate </FormLabel>
                            {editFlag ?
                                <Input className='w-128' name='shoulder' value={weekend.shoulder} onChange={(e) => this.handleInputChange(e,'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                : <div className='w-auto'>{weekend.shoulder}</div>
                            }

                        </div>
                        <div className='flex items-center'>
                            <FormLabel className='w-88'>Time </FormLabel>
                            {editFlag ?
                                <Input className='w-128' name='shoulderTime' value={weekend.shoulderTime} onChange={(e) => this.handleInputChange(e,'weekend')} inputProps={{ 'aria-label': 'description' }} />
                                : <div className='w-auto'>{weekend.shoulderTime}</div>
                            }
                        </div>
                    </div>

                    <div className='mx-16'>
                        <div  >Daily charge </div>
                        {editFlag ?
                            <Input className='w-88' name='dailyCharge' value={weekend.dailyCharge} onChange={(e) => this.handleInputChange(e,'weekend')} inputProps={{ 'aria-label': 'description' }} />
                            : <FormLabel className='w-auto' >{weekend.dailyCharge}</FormLabel>
                        }
                    </div>
                    <div className='mx-16'>
                        <div >Discount </div>
                        {editFlag ?
                            <Input className='w-88' name='discount' value={weekend.discount} onChange={(e) => this.handleInputChange(e,'weekend')} inputProps={{ 'aria-label': 'description' }} />
                            : <FormLabel className='w-auto' >{weekend.discount}</FormLabel>
                        }
                    </div>
                </Typography>
            </div>
        )
    }
}

export default DeviceTariff; 