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
        const { customer_data } = this.props
        let tableData = {
            frameworkComponents: {
                actionButtonRender: ActionButtonRender,
            },
            columnDefs: [
                { headerName: "Email ID", field: "email" },
                { headerName: "Name", field: "name" },
                { headerName: "Postcode", field: "postcode" },
                { headerName: "Device ID", field: "deviceId" },
                { headerName: "Actions", field: "actions", cellRenderer: 'actionButtonRender' }
            ],
            rowData: customer_data && customer_data.length && customer_data.map((item, index) => {
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
                <div className='flex flex-1 items-center justify-end'>
                    <CustomPagination />
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customer_data: state.customers.customerData
    }
}


export default withStyles(styles, { withTheme: true })(withRouter(connect(mapStateToProps)(CustomersTable)));

function ActionButtonRender(item) {
    return <div>
        <Link className="font-medium icon_font" to="/customer/details/107653221">
            <i className="fa fa-edit" onClick={() => console.log('customers edit button clicked',item.data)} />
        </Link>
    </div>
}
