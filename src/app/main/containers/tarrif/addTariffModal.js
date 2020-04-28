import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {
    Button, Typography, Checkbox, FormGroup, FormLabel, FormControl, FormControlLabel, Icon,
    Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText
} from '@material-ui/core';
import { CustomRow, ErrorLabel } from '../../../../styles/customCss'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import moment from 'moment';

export default class TariffModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tariff_data: {
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
            isValidTime: false, type: '',
            weekdayIncomplete: false, weekdayOverlap: false,
            isValidWeekendTime: false, weekendType: '',
            weekendIncomplete: false, weekendOverlap:false
        }
    }

    handleClose = () => {
        const { modalTitle } = this.props;
        this.props.tariffModal(false, modalTitle);
    };

    addWeekdayRow(key) {
        let { weekday } = this.state.tariff_data
        weekday[key].push({ startTime: null, endTime: null })
        this.setState({ weekday })
    }

    removeWeekdayRow(data, key, title) {
        let { weekday } = this.state.tariff_data
        weekday[title].splice(key, 1)
        this.setState({ weekday })
    }

    addWeekendRow(key) {
        let { weekends } = this.state.tariff_data
        weekends[key].push({ startTime: null, endTime: null })
        this.setState({ weekends })
    }

    removeWeekendRow(data, key, title) {
        let { weekends } = this.state.tariff_data
        weekends[title].splice(key, 1)
        this.setState({ weekends })
    }

    handleInputChange(data, key) {
        let { tariff_data } = this.state
        tariff_data[key] = data
        this.setState({
            tariff_data
        })
    };

    handleWeekdayChange(data, index, key, title) {
        let { weekday } = this.state.tariff_data;
        const endTimeStamp = weekday[title][index].endTime !== null ? (moment(weekday[title][index].endTime).format('x')) : 0

        if (key === 'startTime' && (endTimeStamp !== 0 ? endTimeStamp > (weekday[title][index][key] = data) : true)) {
            weekday[title][index][key] = data
            this.setState({ isValidTime: false })

        } else if (key === 'endTime' && weekday[title][index].startTime !== null && moment(weekday[title][index].startTime).format('x') < moment(data).format('x')) {
            weekday[title][index][key] = data;
            this.setState({ isValidTime: false })
        } else {
            this.setState({
                isValidTime: true,
                type: title
            })
        }
        this.setState({
            weekday
        })
    };

    handleWeekendChange(data, index, key, title) {
        let { weekends } = this.state.tariff_data
        const endTimeStamp = weekends[title][index].endTime !== null ? (moment(weekends[title][index].endTime).format('x')) : 0

        if (key === 'startTime' && (endTimeStamp !== 0 ? endTimeStamp > (weekends[title][index][key] = data) : true)) {
            weekends[title][index][key] = data
            this.setState({ isValidWeekendTime: false })

        } else if (key === 'endTime' && weekends[title][index].startTime !== null && moment(weekends[title][index].startTime).format('x') < moment(data).format('x')) {
            weekends[title][index][key] = data;
            this.setState({ isValidWeekendTime: false })
        } else {
            this.setState({
                isValidWeekendTime: true,
                weekendType: title
            })
        }
        this.setState({
            weekends
        })
    };

    timevalidator() {
        let { tariff_data: { weekday, weekends }, weekdayIncomplete, weekendIncomplete, weekdayOverlap, weekendOverlap } = this.state
        if(weekdayIncomplete || weekendIncomplete){
            this.setState({weekdayIncomplete:false, weekendIncomplete:false})
        }

        // -----------------------------------weekdays Total Time validation---------------------------------------------------------
        let newWeekdayData = []

        weekday.peak.forEach((item, index) => {
            newWeekdayData.push(item);
        })

        weekday.offPeak.forEach((item, index) => {
            newWeekdayData.push(item);
        })

        weekday.shoulder.forEach((item, index) => {
            newWeekdayData.push(item);
        })

        newWeekdayData = newWeekdayData.sort((a, b) => a.startTime - b.startTime);

        let totalDifference = 0
        newWeekdayData.forEach((item, index) => {
            const startTimeStamp = moment(item.startTime).format('x')
            const endTimeStamp = moment(item.endTime).format('x')
            totalDifference = totalDifference + (moment.duration(endTimeStamp - startTimeStamp).asHours());
        })

        const totalWeekdayTime = (isNaN(totalDifference) ? 0 : totalDifference)

        if (totalWeekdayTime < 23.9833 || totalWeekdayTime > 24) {
            var elem = document.getElementById('weekdayTime');
            elem.scrollIntoView()
            this.setState({ weekdayIncomplete: true })
        }

        if (!weekdayIncomplete) {
            for (let i = 0; i < newWeekdayData.length - 1; i++) {
                if (moment(newWeekdayData[i].endTime).format('x') > moment(newWeekdayData[i + 1].startTime).format('x')) {
                    var elem = document.getElementById('weekdayTime');
                    elem.scrollIntoView()
                    this.setState({ weekdayOverlap: true })
                    break;
                } else {
                    this.setState({ weekdayOverlap: false })
                }
            }
        }


        //--------------------------------------weekends Total Time Validation----------------------------------------------
        let newWeekendData = []

        weekends.peak.forEach((item, index) => {
            newWeekendData.push(item);
        })

        weekends.offPeak.forEach((item, index) => {
            newWeekendData.push(item);
        })

        weekends.shoulder.forEach((item, index) => {
            newWeekendData.push(item);
        })

        newWeekendData = newWeekendData.sort((a, b) => a.startTime - b.startTime);

        let totalDifference2 = 0
        
        newWeekendData.forEach((item, index) => {
            const startTimeStamp = moment(item.startTime).format('x')
            const endTimeStamp = moment(item.endTime).format('x')
            totalDifference2 = totalDifference2 + (moment.duration(endTimeStamp - startTimeStamp).asHours());
        })

        const totalWeekendTime = (isNaN(totalDifference2) ? 0 : totalDifference2)

        if (totalWeekendTime < 23.9833 || totalWeekendTime > 24) {
            var elem = document.getElementById('weekendTime');
            elem.scrollIntoView()
            this.setState({ weekendIncomplete: true })
        }

        if (!weekendIncomplete) {
            for (let i = 0; i < newWeekendData.length - 1; i++) {
                if (moment(newWeekendData[i].endTime).format('x') > moment(newWeekendData[i + 1].startTime).format('x')) {
                    var elem = document.getElementById('weekendTime');
                    elem.scrollIntoView()
                    this.setState({ weekendOverlap: true })
                    break;
                } else {
                    this.setState({ weekendOverlap: false })
                }
            }
        }

        if (totalWeekdayTime >= 23.98333 && totalWeekendTime >= 23.98333) {
            this.handleTariffSubmit();
            this.setState({ weekendIncomplete: false, weekdayIncomplete: false })
        }
    }

    handleTariffSubmit() {
        console.log('formdata', this.state.tariff_data)

    }


    render() {
        const { openModal, modalTitle } = this.props;
        const { tariff_data: { postCode, timing, weekday, weekends }, isValidTime, type, weekdayIncomplete, weekdayOverlap,
            isValidWeekendTime, weekendType, weekendIncomplete, weekendOverlap } = this.state
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
                                            <FormLabel component="legend" id='weekdayTime' className='subHeadingColor'>Weekdays
                                            {weekdayIncomplete ?
                                                    <ErrorLabel >*Please complete 24 hours !</ErrorLabel>
                                                    : weekdayOverlap ?
                                                        <ErrorLabel >*Time can't be overlap !</ErrorLabel> : ''
                                                }</FormLabel>
                                            <Typography aria-label="position" className='w-full mt-10 flex justify-between'>
                                                <FormLabel className='labelWidth'>Peak</FormLabel>
                                                <div className='w-10/12 '>
                                                    {isValidTime && type == 'peak' && (
                                                        <ErrorLabel>! End time must be greater then start time</ErrorLabel>
                                                    )}
                                                    {weekday.peak.map((data, key) => {
                                                        return (
                                                            <CustomRow>

                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardTimePicker
                                                                        inputVariant="outlined"
                                                                        ampm={false}
                                                                        label='Start Time'
                                                                        name="startTime"
                                                                        value={data.startTime}
                                                                        onChange={(e) => this.handleWeekdayChange(e, key, 'startTime', 'peak')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        placeholder='00:00'
                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <KeyboardTimePicker
                                                                        inputVariant="outlined"
                                                                        ampm={false}
                                                                        label="End Time"
                                                                        name='endTime'
                                                                        value={data.endTime}
                                                                        onChange={(e) => this.handleWeekdayChange(e, key, 'endTime', 'peak')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        placeholder='00:00'
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
                                                    {isValidTime && type == 'offPeak' && (
                                                        <ErrorLabel>! End time must be greater then start time</ErrorLabel>
                                                    )}
                                                    {weekday.offPeak.map((data, index) => {
                                                        return (
                                                            <CustomRow>
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                                                    <KeyboardTimePicker
                                                                        label='Start Time'
                                                                        ampm={false}
                                                                        name="startTime"
                                                                        value={data.startTime}
                                                                        onChange={(e) => this.handleWeekdayChange(e, index, 'startTime', 'offPeak')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"
                                                                        placeholder='00:00'
                                                                        margin='dense'
                                                                        className='mx-12'

                                                                    />
                                                                    <KeyboardTimePicker
                                                                        label="End Time"
                                                                        ampm={false}
                                                                        name='endTime'
                                                                        value={data.endTime}
                                                                        onChange={(e) => this.handleWeekdayChange(e, index, 'endTime', 'offPeak')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"
                                                                        placeholder='00:00'
                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <Icon size='small' onClick={() => this.removeWeekdayRow(data, index, 'offPeak')}>clear</Icon>

                                                                </MuiPickersUtilsProvider>
                                                            </CustomRow>
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
                                                    {isValidTime && type == 'shoulder' && (
                                                        <ErrorLabel>! End time must be greater then start time</ErrorLabel>
                                                    )}
                                                    {weekday.shoulder.map((data, key) => {
                                                        return (
                                                            <CustomRow>
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardTimePicker
                                                                        label='Start Time'
                                                                        ampm={false}
                                                                        name="startTime"
                                                                        value={data.startTime}
                                                                        onChange={(e) => this.handleWeekdayChange(e, key, 'startTime', 'shoulder')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"
                                                                        placeholder='00:00'
                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <KeyboardTimePicker
                                                                        label="End Time"
                                                                        ampm={false}
                                                                        name='endTime'
                                                                        value={data.endTime}
                                                                        onChange={(e) => this.handleWeekdayChange(e, key, 'endTime', 'shoulder')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"
                                                                        placeholder='00:00'
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
                                            <FormLabel component="legend" id="weekendTime" className='subHeadingColor'>Weekends
                                            {weekendIncomplete ?
                                                    <ErrorLabel >*Please complete 24 hours !</ErrorLabel>
                                                :weekendOverlap ?<ErrorLabel>*Time can't be overlap !</ErrorLabel>:''
                                                }</FormLabel>
                                            <Typography aria-label="position" className='w-full flex mt-10 justify-between'>
                                                <FormLabel className='labelWidth'>Peak</FormLabel>
                                                <div className='w-10/12 '>
                                                    {isValidWeekendTime && weekendType == 'peak' && (
                                                        <ErrorLabel>! End time must be greater then start time</ErrorLabel>
                                                    )}
                                                    {weekends.peak.map((data, key) => {
                                                        return (
                                                            <CustomRow>
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardTimePicker
                                                                        label='Start Time'
                                                                        ampm={false}
                                                                        name="startTime"
                                                                        value={data.startTime}
                                                                        onChange={(e) => this.handleWeekendChange(e, key, 'startTime', 'peak')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"
                                                                        placeholder='00:00'
                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <KeyboardTimePicker
                                                                        label="End Time"
                                                                        ampm={false}
                                                                        name='endTime'
                                                                        value={data.endTime}
                                                                        onChange={(e) => this.handleWeekendChange(e, key, 'endTime', 'peak')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"
                                                                        placeholder='00:00'
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
                                                    {isValidWeekendTime && weekendType == 'offPeak' && (
                                                        <ErrorLabel>! End time must be greater then start time</ErrorLabel>
                                                    )}
                                                    {weekends.offPeak.map((data, key) => {
                                                        return (
                                                            <CustomRow>
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardTimePicker
                                                                        label='Start Time'
                                                                        ampm={false}
                                                                        name="startTime"
                                                                        value={data.startTime}
                                                                        onChange={(e) => this.handleWeekendChange(e, key, 'startTime', 'offPeak')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"
                                                                        placeholder='00:00'
                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <KeyboardTimePicker
                                                                        label="End Time"
                                                                        ampm={false}
                                                                        name='endTime'
                                                                        value={data.endTime}
                                                                        onChange={(e) => this.handleWeekendChange(e, key, 'endTime', 'offPeak')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"
                                                                        placeholder='00:00'
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
                                                    {isValidWeekendTime && weekendType == 'shoulder' && (
                                                        <ErrorLabel>! End time must be greater then start time</ErrorLabel>
                                                    )}
                                                    {weekends.shoulder.map((data, key) => {
                                                        return (
                                                            <CustomRow>
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardTimePicker
                                                                        label='Start Time'
                                                                        ampm={false}
                                                                        name="startTime"
                                                                        value={data.startTime}
                                                                        onChange={(e) => this.handleWeekendChange(e, key, 'startTime', 'shoulder')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"
                                                                        placeholder='00:00'
                                                                        margin='dense'
                                                                        className='mx-12'
                                                                    />
                                                                    <KeyboardTimePicker
                                                                        label="End Time"
                                                                        ampm={false}
                                                                        name='endTime'
                                                                        value={data.endTime}
                                                                        onChange={(e) => this.handleWeekendChange(e, key, 'endTime', 'shoulder')}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change time',
                                                                        }}
                                                                        inputVariant="outlined"
                                                                        placeholder='00:00'
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
                        <Button onClick={(e) => { timing == 'Flat' ? this.handleTariffSubmit(e) : this.timevalidator(e) }} color="secondary" variant='contained'>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div >
        );
    }
}