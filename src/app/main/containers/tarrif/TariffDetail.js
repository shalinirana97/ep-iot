import React, { Component } from 'react';
import { connect } from "react-redux";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { Typography, Tooltip, Icon, FormLabel, Button, Fab } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TariffModal from './addTariffModal';
import { FuseAnimate } from '@fuse';
import DeleteAlertDialogSlide from '../../components/deleteAlert'

class TariffDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: '',
            openTariff: false,
            modalTitle: '',
            openDelete: false
        }
    }
    handleChangeTariffTariff = (data) => (event, isExpanded) => {
        this.setState({
            expanded: (isExpanded ? data : false),
        })
    }
    openTariffModel (modalFlag, titleKey) {

        this.setState({ openTariff: modalFlag, modalTitle: titleKey })
    }

    handleDeleteModal (deleteFlag) {
        this.setState({
            openDelete: deleteFlag
        })
    }

    render() {
        const { expanded } = this.state
        const { tariff_data } = this.props
        return (
            <React.Fragment>
                <div className="flex items-center justify-end ">
                    <FuseAnimate animation="transition.slideDownIn" delay={300}>
                        <Button className=" sm:flex cursor-pointer mb-10" variant="contained" color="secondary" onClick={() => this.openTariffModel(true, 'Add')}>
                            <Icon>add</Icon>Add New</Button>
                    </FuseAnimate>
                </div>
                {tariff_data.map((item, key) => {
                    return (
                        <ExpansionPanel expanded={expanded === item.postCode[key]} onChange={this.handleChangeTariffTariff(item.postCode[key])}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="key"
                            >
                                <Typography className='tariffHead'>{item.postCode}</Typography>
                            </ExpansionPanelSummary>

                            <ExpansionPanelDetails>
                                <Typography className='w-400'>
                                    <div className="flex items-center justify-between p-2">
                                        <FormLabel >Peak : </FormLabel><span>{item.peak}</span>
                                    </div>
                                    <div className="flex items-center justify-between p-2">
                                        <FormLabel>Off Peak : </FormLabel><span>{item.offPeak}</span>
                                    </div>
                                    <div className="flex items-center justify-between p-2">
                                        <FormLabel>Schedule : </FormLabel><span>{item.schedule}</span>
                                    </div>
                                    <div className="flex w-full pt-24 items-center justify-end">
                                        <Tooltip title="Edit">
                                            <Fab size="small" color="secondary" aria-label="edit" onClick={() => this.openTariffModel(true, 'Edit')}>

                                                <Icon>edit</Icon>
                                            </Fab>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <Fab size="small" color="secondary" aria-label="delete" className='ml-5' onClick={() => this.handleDeleteModal(true)} >
                                                <Icon>delete</Icon>
                                            </Fab>
                                        </Tooltip>
                                    </div>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )

                })}
                <TariffModal
                    tariffModal={()=>this.openTariffModel()}
                    openModal={this.state.openTariff}
                    modalTitle={this.state.modalTitle}
                />
                <DeleteAlertDialogSlide 
                deleteText='PostCode'
                handleDelete= {() => this.handleDeleteModal()}
                openDeleteModal = {this.state.openDelete}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tariff_data: state.tariffDetail.tariff_data
    }
}

export default connect(mapStateToProps)(TariffDetails)
