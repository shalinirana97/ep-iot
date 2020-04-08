import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AgGridTable from "../../../agGrid/agGridTable";
import { withStyles } from '@material-ui/core/styles';
import _ from '@lodash';
import { Link } from 'react-router-dom';
import { CustomPagination } from "../../components";

const styles = theme => ({
    layoutRoot: {}
});



class CustomersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: {}
        }

    }


    componentDidMount = () => {
        this.createTableData();
    }

    createTableData = () => {
        const { agency_data } = this.props
        let tableData = {
            frameworkComponents: {
                actionButtonRender: ActionButtonRender,
            },
            columnDefs: [
                { headerName: "Email ID", field: "email", filter: 'agTextColumnFilter', cellStyle: {cursor: 'pointer'} },
                { headerName: "Name", field: "name", filter: 'agTextColumnFilter', cellStyle: { cursor: 'pointer' } },
                { headerName: "Postcode", field: "postcode", filter: 'agNumberColumnFilter', cellStyle: { cursor: 'pointer' } },
                { headerName: "Device ID", field: "deviceId", filter: 'agNumberColumnFilter', cellStyle: { cursor: 'pointer' } },
                { headerName: "Actions", field: "actions", cellRenderer: 'actionButtonRender' }
            ],
            rowData: agency_data && agency_data.length && agency_data.map((item, index) => {
                return {
                    name: item.name,
                    email: item.email || null,
                    postcode: item.postcode || '-',
                    deviceId: item.deviceId || '-',
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
            <React.Fragment>
                <AgGridTable
                    tableData={{
                        ...tableData,
                        frameworkComponents: {
                            actionButtonRender: ActionButtonRender
                        }
                    }}
                    resizable={true} 
                    sortable={true}
                    rowDragManaged={true}
                    rowHeight={50}
                />
                <CustomPagination />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        agency_data: state.installerAgency.agencyData
    }
}


export default withStyles(styles, { withTheme: true })(withRouter(connect(mapStateToProps)(CustomersTable)));

function ActionButtonRender(item) {
    return <div>
        <Link className="font-medium icon_font" to="/customer/details">
            <i className="fa fa-edit" onClick={() => console.log('customers edit button clicked',item.data)} />
        </Link>
    </div>
}
