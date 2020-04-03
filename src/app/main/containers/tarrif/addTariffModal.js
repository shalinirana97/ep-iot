import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import './tariff.scss';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';

export default class TariffModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            terrif_data: {
                postCode: '',
                peak: new Date(),
                offPeak: new Date(),
                schedule: new Date(),
            }
        }
    }

    handleClose = () => {
        const { modalTitle } = this.props;
        this.props.tariffModal(false, modalTitle);
    };

    handleDataChange(data, key) {

        let { terrif_data } = this.state
        terrif_data[key] = data
        this.setState({
            terrif_data
        })
    };

    render() {
        const { openModal, modalTitle } = this.props;
        const { peak, offPeak, schedule, postCode } = this.state.terrif_data

        return (

            <div>
                <Modal
                    aria-labelledby="tariff-modal-title"
                    aria-describedby="tariff-modal-description"
                    className="flex justify-center w-full items-center"
                    open={openModal}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={openModal}>
                        <div className="w-400 bg-white py-12 px-16 ">
                            <h2 id="tariff-modal-title">{modalTitle} Tariff</h2>
                            <div id="tariff-modal-description">
                                <TextField
                                    label="Post Codes"
                                    id="mui-theme-provider-outlined-input"
                                    className="mt-8"
                                    value={postCode}
                                    onChange={(e) => this.handleDataChange(e.target.value,'postCode')}
                                    fullWidth
                                />
                                <br />

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardTimePicker
                                        margin="normal"
                                        id="peak"
                                        name='peak'
                                        label="Peak"
                                        value={peak}
                                        onChange={(e) => this.handleDataChange(e, 'peak')}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                        fullWidth
                                    />
                                    <KeyboardTimePicker
                                        margin="normal"
                                        id="time-picker"
                                        label="Off Peak"
                                        name='offPeak'
                                        value={offPeak}
                                        onChange={(e) => this.handleDataChange(e, 'offPeak')}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                        fullWidth
                                    />
                                    <KeyboardTimePicker
                                        margin="normal"
                                        id="schedule"
                                        name="schedule"
                                        label="Schedule"
                                        value={schedule}
                                        onChange={(e) => this.handleDataChange(e, 'schedule')}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                        fullWidth
                                    />
                                </MuiPickersUtilsProvider>
                                <br />
                                <div className="flex justify-end">
                                    <Button className="w-128 mx-8" variant="contained" color="secondary">Save</Button>
                                    <Button className="w-128" variant="contained" color="primary" onClick={this.handleClose}>Cancel</Button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div >
        );
    }
}