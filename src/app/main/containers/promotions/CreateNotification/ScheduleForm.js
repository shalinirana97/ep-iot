import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {
    Button, Typography, FormLabel, FormControl, FormControlLabel, Icon } from '@material-ui/core';
import { CustomRow } from '../../../../../styles/customCss'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';

export default class ScheduleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule:[{ date:null, time:null}]
            }
    }

    addScheduleRow() {
        let { schedule } = this.state
        schedule.push({ date: null, time: null })
        this.setState({ schedule })
    }

    removeScheduleRow(key) {
    let { schedule } = this.state
    schedule.splice(key, 1)
    this.setState({ schedule })
    }

    handleScheduleChange(data, index, key) {
        let { schedule } = this.state
        schedule[index][key] = data
        this.setState({
            schedule
        }, () => this.sendScheduleDetails())
    };

    sendScheduleDetails(){
        const { schedule} = this.state;
            this.props.scheduleData(schedule)
    }

    render() {
        const { openModal, modalTitle } = this.props;
        const { schedule } = this.state
        return (

                <Typography className='m-20'>
                    <FormControl component="fieldset" className='w-full'>
                        <FormLabel component="legend" className='h3 borderBtm'>Schedule</FormLabel>
                        <Typography aria-label="position" className='w-full mt-10 flex justify-between'>
                            <div className='w-10/12 '>
                                {schedule.map((data, key) => {
                                    return (
                                        <CustomRow>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    inputVariant="outlined"
                                                    label='Date'
                                                    name="date"
                                                    disablePast={true}
                                                    value={data.date}
                                                    onChange={(e) => this.handleScheduleChange(e, key, 'date')}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                    rifmFormatter='dd/mm/yyyy'
                                                    margin='dense'
                                                />
                                                <KeyboardTimePicker
                                                    inputVariant="outlined"
                                                    ampm={false}
                                                    label="Time"
                                                    name='time'
                                                    value={data.time}
                                                    onChange={(e) => this.handleScheduleChange(e, key, 'time')}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change time',
                                                    }}
                                                    margin='dense'
                                                />
                                                <Icon size='small' onClick={() => this.removeScheduleRow(data, key)}>clear</Icon>

                                            </MuiPickersUtilsProvider>
                                        </CustomRow>
                                    )
                                })}
                                <Typography className='flex justify-end items-center addIconDivWidth'>
                                <Icon size='smal' onClick={() => this.addScheduleRow()} style={{ color: '#00A78D' }}>add_circle_outline</Icon>
                                </Typography>
                            </div>
                        </Typography>
                        <br />
                    </FormControl>
                </Typography>
        );
    }
}