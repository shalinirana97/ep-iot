import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {
    Button, Typography, Checkbox, FormGroup, FormLabel, FormControl, FormControlLabel, Icon,
    Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText
} from '@material-ui/core';
import { CustomRow } from '../../../../styles/customCss'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import moment from 'moment';

export default class TariffModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            terrif_data: {
                postCode: '',
                timing: {},
                weekday: {
                    peak: [{ startTime: null, endTime: null }],
                    offPeak: [{ startTime: null, endTime: null }],
                    shoulder: [{ startTime: null, endTime: null }]

                },
                weekends: {
                    peak: [{ startTime: null, endTime: null }],
                    offPeak: [{ startTime: null, endTime: null }],
                    shoulder: [{ startTime: null, endTime: null }]

                }
            },
            isValidTime: false
        }
    }

    handleClose = () => {
        const { modalTitle } = this.props;
        this.props.tariffModal(false, modalTitle);
    };

    addWeekdayRow(key) {
        let { weekday } = this.state.terrif_data
        weekday[key].push({ startTime: null, endTime: null })
        this.setState({ weekday })
    }

    removeWeekdayRow(data, key, title) {
        let { weekday } = this.state.terrif_data
        weekday[title].splice(key, 1)
        this.setState({ weekday })
    }

    addWeekendRow(key) {
        let { weekends } = this.state.terrif_data
        weekends[key].push({ startTime: null, endTime: null })
        this.setState({ weekends })
    }

    removeWeekendRow(data, key, title) {
        let { weekends } = this.state.terrif_data
        weekends[title].splice(key, 1)
        this.setState({ weekends })
    }

    handleInputChange(data, key) {
        let { terrif_data } = this.state
        terrif_data[key] = data
        this.setState({
            terrif_data
        })
    };

    handleWeekdayChange(data, index, key, title) {
        let { weekday } = this.state.terrif_data
        const newTimestamp = moment(data).format('x')

        const peakLength = weekday.peak.length - 1;
        const offPeakLength = weekday.offPeak.length - 1;
        const shoulderLength = weekday.shoulder.length - 1;
        const starPeakTimeStamp = moment(weekday.peak[peakLength].startTime).format('x')
        const peakTimeStamp = moment(weekday.peak[peakLength].endTime).format('x')
        const startOffTimeStamp = moment(weekday.offPeak[offPeakLength].startTime).format('x')
        const endOffTimeStamp = moment(weekday.offPeak[offPeakLength].endTime).format('x')

        if (title === 'offPeak' && weekday.peak[peakLength].endTime !== null) {
            if (key === 'endTime' && weekday.offPeak[offPeakLength].startTime !== null && startOffTimeStamp < newTimestamp) {
                weekday[title][index][key] = data

            }
            else if (key === 'startTime' && peakTimeStamp < newTimestamp) {
                weekday[title][index][key] = data
                this.setState({ isValidTime: false })

            } else {
                console.log('please fill offpeak start time first')
            }
        } else if (title === 'offPeak') {
            this.setState({ isValidTime: true })

        } else if (title === 'shoulder' && peakTimeStamp < startOffTimeStamp) {
            if (key === 'endTime' && weekday.shoulder[shoulderLength].startTime < newTimestamp && starPeakTimeStamp < newTimestamp) {
                weekday[title][index][key] = data

            }
            else if (key === 'startTime' && peakTimeStamp < newTimestamp && endOffTimeStamp < newTimestamp) {
                weekday[title][index][key] = data
                this.setState({ isValidTime: false })

            } else {
                console.log('please fill shoulder start time first')
            }
        } else if (title === 'shoulder') {
            console.log('shoulder time must be grater than peak & offpeak time')

        } else if (title === 'peak' && key === 'endTime' && weekday.peak[peakLength].startTime !== null && starPeakTimeStamp < newTimestamp) {
            weekday[title][index][key] = data

        } else if (title === 'peak' && key === 'startTime') {
            weekday[title][index][key] = data

        }
        else {
            console.log('please fill peak start time first')

        }
        this.setState({
            weekday
        })

    };

    handleWeekendChange(data, index, key, title) {
        let { weekends } = this.state.terrif_data
        weekends[title][index][key] = data
        this.setState({
            weekends
        })
    };


    render() {
        const { openModal, modalTitle } = this.props;
        const { postCode, timing, weekday, weekends } = this.state.terrif_data
        const scroll = 'paper'

        return (

            <div>
                <Dialog
                    open={openModal}
                    onClose={this.handleClose}
                    scroll={scroll}
                    maxWidth={"lg"}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">{modalTitle} Tariff</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            // ref={descriptionElementRef}
                            // className='px-12'
                            tabIndex={-1}
                        >
                            <Typography className='flex justify-between items-center'>
                                <TextField
                                    label="Post Codes"
                                    className="w-6/12 pr-12"
                                    value={postCode}
                                    variant='outlined'
                                    size='small'
                                    margin='dense'
                                    onChange={(e) => this.handleInputChange(e.target.value, 'postCode')}

                                />
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Timing</FormLabel>
                                    <FormGroup aria-label="position" row>
                                        <FormControlLabel
                                            value="Flat"
                                            control={<Checkbox color="primary" />}
                                            label="Flat Rate"
                                            labelPlacement="end"
                                            checked={timing === 'Flat'}
                                            onChange={(e) => this.handleInputChange(e.target.value, 'timing')}
                                        />
                                        <FormControlLabel
                                            value="Variable"
                                            control={<Checkbox color="primary" />}
                                            label="Variable"
                                            checked={timing === 'Variable'}
                                            labelPlacement="end"
                                            onChange={(e) => this.handleInputChange(e.target.value, 'timing')}
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Typography>
                            {timing === 'Variable' && (
                                <React.Fragment>
                                    <Typography className='my-24'>
                                        <FormControl component="fieldset" className='w-full'>
                                            <FormLabel component="legend" className='subHeadingColor'>Weekdays</FormLabel>
                                            <Typography aria-label="position" className='w-full mt-10 flex justify-between'>
                                                <FormLabel className='labelWidth'>Peak</FormLabel>
                                                <div className='w-10/12 '>
                                                    {weekday.peak.map((data, key) => {
                                                        return (
                                                            <CustomRow>
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardTimePicker
                                                                        inputVariant="outlined"

                                                                        label='Start Time'
                                                                        name="startTime"
                                                                        value={data.startTime}
                                                                        onChange={(e) => this.handleWeekdayChange(e, key, 'startTime', 'peak')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        placeholder='--:-- AM/PM'
                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <KeyboardTimePicker
                                                                        inputVariant="outlined"

                                                                        label="End Time"
                                                                        name='endTime'
                                                                        value={data.endTime}
                                                                        onChange={(e) => this.handleWeekdayChange(e, key, 'endTime', 'peak')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <Icon size='small' onClick={() => this.removeWeekdayRow(data, key, 'peak')}>clear</Icon>

                                                                </MuiPickersUtilsProvider>
                                                            </CustomRow>
                                                        )
                                                    })}
                                                    <Typography className='flex justify-end items-center addIconDivWidth'>
                                                        <Icon size='smal' onClick={() => this.addWeekdayRow('peak')} style={{ color: '#00A78D' }}>add_circle_outline</Icon>
                                                    </Typography>
                                                </div>
                                            </Typography>
                                            <br />
                                            <Typography aria-label="position" className='w-full flex justify-between'>
                                                <FormLabel className='labelWidth'>Off Peak</FormLabel>
                                                <div className='w-10/12 '>
                                                    {weekday.offPeak.map((data, index) => {
                                                        return (
                                                            <React.Fragment>
                                                                {
                                                                    this.state.isValidTime && (
                                                                        <div>
                                                                            'Please fill peak time first'</div>)}
                                                                <CustomRow>
                                                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                                                        <KeyboardTimePicker
                                                                            label='Start Time'
                                                                            // error={this.state.isValidTime && true}
                                                                            // helperText={this.state.isValidTime && ('fill peak time first')}
                                                                            name="startTime"
                                                                            value={data.startTime}
                                                                            onChange={(e) => this.handleWeekdayChange(e, index, 'startTime', 'offPeak')}
                                                                            KeyboardButtonProps={{
                                                                                'aria-label': 'change time',
                                                                            }}
                                                                            inputVariant="outlined"

                                                                            margin='dense'
                                                                            className='mx-12'

                                                                        />
                                                                        <KeyboardTimePicker
                                                                            label="End Time"
                                                                            name='endTime'
                                                                            value={data.endTime}
                                                                            onChange={(e) => this.handleWeekdayChange(e, index, 'endTime', 'offPeak')}
                                                                            KeyboardButtonProps={{
                                                                                'aria-label': 'change time',
                                                                            }}
                                                                            inputVariant="outlined"

                                                                            margin='dense'
                                                                            className='mx-12'
                                                                        />
                                                                        <Icon size='small' onClick={() => this.removeWeekdayRow(data, index, 'offPeak')}>clear</Icon>

                                                                    </MuiPickersUtilsProvider>
                                                                </CustomRow>
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                    <Typography className='flex justify-end items-center addIconDivWidth'>
                                                        <Icon size='small' onClick={() => this.addWeekdayRow('offPeak')} style={{ color: '#00A78D' }}>add_circle_outline</Icon>
                                                    </Typography>
                                                </div>
                                            </Typography>
                                            <br />

                                            <Typography aria-label="position" className='w-full flex justify-between'>
                                                <FormLabel className='labelWidth'>Shoulder</FormLabel>
                                                <div className='w-10/12 '>
                                                    {weekday.shoulder.map((data, key) => {
                                                        return (
                                                            <CustomRow>
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardTimePicker
                                                                        label='Start Time'
                                                                        name="startTime"
                                                                        value={data.startTime}
                                                                        onChange={(e) => this.handleWeekdayChange(e, key, 'startTime', 'shoulder')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"

                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <KeyboardTimePicker
                                                                        label="End Time"
                                                                        name='endTime'
                                                                        value={data.endTime}
                                                                        onChange={(e) => this.handleWeekdayChange(e, key, 'endTime', 'shoulder')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"

                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <Icon size='small' onClick={() => this.removeWeekdayRow(data, key, 'shoulder')}>clear</Icon>

                                                                </MuiPickersUtilsProvider>
                                                            </CustomRow>
                                                        )
                                                    })}
                                                    <Typography className='flex justify-end items-center addIconDivWidth'>
                                                        <Icon size='small' onClick={() => this.addWeekdayRow('shoulder')} style={{ color: '#00A78D' }}>add_circle_outline</Icon>
                                                    </Typography>
                                                </div>
                                            </Typography>
                                        </FormControl>
                                    </Typography>

                                    <Typography className='my-24'>
                                        <FormControl component="fieldset" className='w-full'>
                                            <FormLabel component="legend" className='subHeadingColor'>Weekends</FormLabel>
                                            <Typography aria-label="position" className='w-full flex mt-10 justify-between'>
                                                <FormLabel className='labelWidth'>Peak</FormLabel>
                                                <div className='w-10/12 '>
                                                    {weekends.peak.map((data, key) => {
                                                        return (
                                                            <CustomRow>
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardTimePicker
                                                                        id="peak"
                                                                        label='Start Time'
                                                                        name="startTime"
                                                                        value={data.startTime}
                                                                        onChange={(e) => this.handleWeekendChange(e, key, 'startTime', 'peak')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"

                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <KeyboardTimePicker
                                                                        id="time-picker"
                                                                        label="End Time"
                                                                        name='endTime'
                                                                        value={data.endTime}
                                                                        onChange={(e) => this.handleWeekendChange(e, key, 'endTime', 'peak')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"

                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <Icon size='small' onClick={() => this.removeWeekendRow(data, key, 'peak')}>clear</Icon>

                                                                </MuiPickersUtilsProvider>
                                                            </CustomRow>
                                                        )
                                                    })}
                                                    <Typography className='flex justify-end items-center addIconDivWidth'>
                                                        <Icon size='small' onClick={() => this.addWeekendRow('peak')} style={{ color: '#00A78D' }}>add_circle_outline</Icon>
                                                    </Typography>
                                                </div>
                                            </Typography>
                                            <br />
                                            <Typography aria-label="position" className='w-full flex justify-between'>
                                                <FormLabel className='labelWidth '>Off Peak</FormLabel>
                                                <div className='w-10/12 '>
                                                    {weekends.offPeak.map((data, key) => {
                                                        return (
                                                            <CustomRow>
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardTimePicker
                                                                        id="peak"
                                                                        label='Start Time'
                                                                        name="startTime"
                                                                        value={data.startTime}
                                                                        onChange={(e) => this.handleWeekendChange(e, key, 'startTime', 'offPeak')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"

                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <KeyboardTimePicker
                                                                        id="time-picker"
                                                                        label="End Time"
                                                                        name='endTime'
                                                                        value={data.endTime}
                                                                        onChange={(e) => this.handleWeekendChange(e, key, 'endTime', 'offPeak')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"

                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <Icon size='small' onClick={() => this.removeWeekendRow(data, key, 'offPeak')}>clear</Icon>

                                                                </MuiPickersUtilsProvider>
                                                            </CustomRow>
                                                        )
                                                    })}
                                                    <Typography className='flex justify-end items-center addIconDivWidth'>
                                                        <Icon size='small' onClick={() => this.addWeekendRow('offPeak')} style={{ color: '#00A78D' }}>add_circle_outline</Icon>
                                                    </Typography>
                                                </div>
                                            </Typography>
                                            <br />

                                            <Typography aria-label="position" className='w-full flex justify-between'>
                                                <FormLabel className='labelWidth '>Shoulder</FormLabel>
                                                <div className='w-10/12 '>
                                                    {weekends.shoulder.map((data, key) => {
                                                        return (
                                                            <CustomRow>
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardTimePicker
                                                                        id="peak"
                                                                        label='Start Time'
                                                                        name="startTime"
                                                                        value={data.startTime}
                                                                        onChange={(e) => this.handleWeekendChange(e, key, 'startTime', 'shoulder')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"

                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <KeyboardTimePicker
                                                                        id="time-picker"
                                                                        label="End Time"
                                                                        name='endTime'
                                                                        value={data.endTime}
                                                                        onChange={(e) => this.handleWeekendChange(e, key, 'endTime', 'shoulder')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"

                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <Icon size='small' onClick={() => this.removeWeekendRow(data, key, 'shoulder')}>clear</Icon>

                                                                </MuiPickersUtilsProvider>
                                                            </CustomRow>
                                                        )
                                                    })}
                                                    <Typography className='flex justify-end items-center addIconDivWidth'>
                                                        <Icon size='small' onClick={() => this.addWeekendRow('shoulder')} style={{ color: '#00A78D' }}>add_circle_outline</Icon>
                                                    </Typography>
                                                </div>
                                            </Typography>
                                        </FormControl>
                                    </Typography>
                                </React.Fragment>
                            )}

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions className='p-24'>
                        <Button onClick={this.handleClose} color="primary" variant='outlined' className='mx-8'>
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="secondary" variant='contained'>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div >
        );
    }
}