import React, { Component } from 'react';
import AgGridTable from "../../../agGrid/agGridTable";
import { withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TablePagination, TableRow, Checkbox } from '@material-ui/core';
import { FuseScrollbars, FuseUtils } from '@fuse';
import { withRouter } from 'react-router-dom';
import _ from '@lodash';
import DevicesTableHead from './DevicesTableHead';

const styles = theme => ({
    layoutRoot: {}
});



class InstalledDevicesTable extends Component {
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
                    headerName: "Date", field: "date", rowDrag: true,
                    checkboxSelection: true,
                    headerCheckboxSelection : true
                },
                { headerName: "Confirmed", field: "confirmed" },
                { headerName: "Death", field: "deaths" },
                { headerName: "Recovered", field: "recovered" },
                { headerName: "Actions", field: "actions", cellRenderer: 'actionButtonRender' }
            ],
            rowData: corona_data && corona_data.length && corona_data.map((item, index) => {
                return {
                    date: item.date,
                    confirmed: item.confirmed || 0,
                    deaths: item.deaths || 0,
                    recovered: item.recovered
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
                />
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(InstalledDevicesTable);

function ActionButtonRender(item) {
    return <div>
             <i className="fa fa-edit edit-icon" />
           </div>
}