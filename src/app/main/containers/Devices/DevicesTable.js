import React, { Component } from 'react';
import AgGridTable from "../../../agGrid/agGridTable";
import { withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TablePagination, TableRow, Checkbox } from '@material-ui/core';
import { FuseScrollbars, FuseUtils } from '@fuse';
import { withRouter } from 'react-router-dom';
import _ from '@lodash';
import { Link } from 'react-router-dom';
import  { CustomPagination } from "../../components";
import moment from 'moment'

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
                { headerName: "Date Installed", field: "date"  },
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
        // console.log('tableRowData', item)
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
                    filter={true}
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

export default withStyles(styles, { withTheme: true })(DevicesTable);

function ActionButtonRender(item) {
    return <div >
        <Link className="font-medium icon_font" to="/device/details/5643870021">
            <i className="fa fa-edit " onClick={() => item.data.editFunction(item.data)} />
        </Link>
           </div>
}
