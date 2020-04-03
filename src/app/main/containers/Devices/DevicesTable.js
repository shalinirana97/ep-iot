import React, { Component } from 'react';
import AgGridTable from "../../../agGrid/agGridTable";
import { withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TablePagination, TableRow, Checkbox } from '@material-ui/core';
import { FuseScrollbars, FuseUtils } from '@fuse';
import { withRouter } from 'react-router-dom';
import _ from '@lodash';
import { Link } from 'react-router-dom';
import DevicesTableHead from './DevicesTableHead';
import  { CustomPagination } from "../../components";

const styles = theme => ({
    layoutRoot: {}
});



class DevicesTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: {}
        }

    }


    componentDidMount = () => {
        fetch("https://pomber.github.io/covid19/timeseries.json")
            .then(response => response.json())
            .then(data => {
                this.createTableData(data);
            })
    }

    // This is for temporary use until we have API
    // Delete it when we have API's for implementation.
    createTableData = (data) => {
        let corona_data = data['India'];
        let tableData = {
            frameworkComponents: {
                actionButtonRender: ActionButtonRender,
            },
            columnDefs: [
                {
                    headerName: "Date Installed", field: "date", rowDrag: true,
                    checkboxSelection: true,
                    headerCheckboxSelection: true
                },
                { headerName: "Device Id", field: "recovered" },
                { headerName: "Installation Company", field: "confirmed" },
                { headerName: "NMI", field: "confirmed" },
                { headerName: "PostCode", field: "deaths" },
                { headerName: "Premium Validity", field: "date" },
                { headerName: "Actions", field: "actions", cellRenderer: 'actionButtonRender' }
            ],
            rowData: corona_data && corona_data.length && corona_data.map((item, index) => {
                return {
                    date: item.date,
                    confirmed: item.confirmed || 0,
                    deaths: item.deaths || 0,
                    recovered: item.recovered,
                    editFunction: this.editFunction
                }
            })
        }
        this.setState({ tableData });
    }

    editFunction(item) {
        console.log('tableRowData', item)
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

export default withStyles(styles, { withTheme: true })(DevicesTable);

function ActionButtonRender(item) {
    console.log('item', item)
    return <div>
<<<<<<< HEAD
        <Link className="font-medium" to="/devices/details">
            <i className="fa fa-edit edit-icon" onClick={() => item.data.editFunction(item.data)} />
        </Link>
           </div>
=======
        <i className="fa fa-edit edit-icon" onClick={() => item.data.editFunction(item.data)} />
    </div>
>>>>>>> dev-prashant
}
