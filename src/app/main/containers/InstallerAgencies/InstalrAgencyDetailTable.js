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



class InstallerTable extends Component {
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
                {
                    headerName: "Agency Name", field: "name", rowDrag: true,
                    checkboxSelection: true,
                    headerCheckboxSelection: true
                },
                { headerName: "Email ID", field: "email" },
                { headerName: "Actions", field: "actions", cellRenderer: 'actionButtonRender' }
            ],
            rowData: agency_data && agency_data.length && agency_data.map((item, index) => {
                return {
                    name: item.name,
                    email: item.email || null,
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
                <AgGridTable
                    tableData={{
                        ...tableData,
                        frameworkComponents: {
                            actionButtonRender: ActionButtonRender
                        }
                    }}
                    resizable={true}
                    filter={true}
                    sortable={true}
                    rowDragManaged={true}
                    rowHeight={40}
                />
                <CustomPagination />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        agency_data: state.installerAgency.agencyData
    }
}


export default withStyles(styles, { withTheme: true })(withRouter(connect(mapStateToProps)(InstallerTable)));

function ActionButtonRender(item) {
    return <div>
        <Link className="font-medium" to="/device/details">
            <i className="fa fa-edit edit-icon" onClick={() => console.log('installer edit button clicked')} />
        </Link>
    </div>
}
