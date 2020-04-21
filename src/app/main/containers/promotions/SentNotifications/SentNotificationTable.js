import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AgGridTable from "../../../../agGrid/agGridTable";
import { withStyles } from '@material-ui/core/styles';
import _ from '@lodash';
import { Link } from 'react-router-dom';
import { FuseAnimate } from '@fuse';
import { CustomPagination } from "../../../components";
import { IconButton,Icon, Button } from '@material-ui/core';
import DeleteAlertDialogSlide from '../../../components/deleteAlert'

const styles = theme => ({
    layoutRoot: {}
});



class SentNotificationTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: {},
            openDelete:false
        }

    }


    componentDidMount = () => {
        this.createTableData();
    }

    createTableData = () => {
        const { sent_data } = this.props
        let tableData = {
            frameworkComponents: {
                actionButtonRender: ActionButtonRender,
                actionIconRender: ActionIconRender,
            },
            columnDefs: [
                { headerName: "Notification Name", field: "name" },
                { headerName: "No. of Customers", field: "customers" },
                { headerName: "Executed", field: "executed", cellRenderer: 'actionIconRender' },
                { headerName: "Actions", field: "actions", cellRenderer: 'actionButtonRender' }
            ],
            rowData: sent_data && sent_data.length && sent_data.map((item, index) => {
                return {
                    name: item.name,
                    customers: item.customers || 0,
                    executed: item.executed,
                    editFunction: this.editFunction
                }
            })
        }
        this.setState({ tableData });
    }

    render() {
        const {
            tableData
        } = this.state;

        return (
            <div>
                <div className="flex items-center justify-end px-12 py-20 bg-white">
                    <FuseAnimate animation="transition.slideRightIn" delay={300}>
                        <Button color="secondary" onClick={() => this.props.history.push('/promotion/create-notification')} className="whitespace-no-wrap" variant="contained">
                            <span className="hidden sm:flex">Create</span>
                            <span className="flex sm:hidden">New</span>
                        </Button>
                    </FuseAnimate>
                </div>

                <AgGridTable
                    tableData={{
                        ...tableData,
                        frameworkComponents: {
                            actionButtonRender: ActionButtonRender,
                            actionIconRender: ActionIconRender,
                        }
                    }}
                    resizable={true}
                    filter={true}
                    sortable={true}
                    rowDragManaged={true}
                    rowHeight={50}
                />
                <CustomPagination />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sent_data: state.promotions.sentData
    }
}


export default withStyles(styles, { withTheme: true })(withRouter(connect(mapStateToProps)(SentNotificationTable)));

function ActionButtonRender(item) {
    return <div>
        <Link className="font-medium icon_font" to="/promotion/create-notification">
            <i className="fa fa-edit" onClick={() => console.log('installer agency edit button clicked', item.data)} />
        </Link>
    </div>
}

function ActionIconRender(item) {
    return <span >
        {
            item.value == "Yes" ? <i className='listIcon fa fa-check-circle' style={{ color: 'green' }} /> : <i className='listIcon fa fa-times-circle' style={{ color: 'red' }} />
        }
    </span>
}


