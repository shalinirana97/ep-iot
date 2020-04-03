import React, { Component } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { CustomPagination } from "../main/components";


class AgGridTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: {},
            defaultColDef: {
                sortable: this.props.sortable,
                filter: this.props.filter,
                resizable: this.props.resizable
            },
            defaultGridOptions: {
                rowDragManaged: this.props.rowDragManaged,
                animateRows: true,
                rowSelection: 'multiple',
                onSelectionChanged: this.onSelectionChanged,
                // enables pagination in the grid
                // pagination: true,
                // sets 10 rows per page (default is 100)
                paginationPageSize: 10,
            }
        }
    }

// Function Name : onSelectionChanged
// Parameters : params
//Functionality : We can find here the selected rows.

onSelectionChanged = (params) => {
    // All Seleted Rows Data are here
    const selected_rows = params && params.api && params.api.getSelectedRows();
}

// Function Name : onGridReady
// Parameters : params
//Functionality : Run initially when agGrid is mounted on DOM. 
onGridReady = (params) => {
    this.gridApi = params.api;
}

// Function Name : onFirstDataRendered
// Parameters : params
//Functionality : When data is initially loaded on table. This function call sizeColumsToFit ==> Adjust the column size to full width of table . 

onFirstDataRendered = (params) => {
    params.api.sizeColumnsToFit();
}

render() {
    const { tableData, rowHeight = 100, dataRenderWidth = true } = this.props;

    return (
        <div className="ag-theme-material jobs-container" style={{ height: '700px', width: '100%' }}>
            <AgGridReact
                columnDefs={tableData.columnDefs}
                rowData={tableData.rowData}
                //   components={tableData.components}
                frameworkComponents={tableData.frameworkComponents}
                rowHeight={rowHeight}
                defaultColDef={this.state.defaultColDef}
                onFirstDataRendered={dataRenderWidth ? this.onFirstDataRendered : () => { }}
                gridOptions={this.state.defaultGridOptions}
            >
            </AgGridReact>
        </div>
    );
}
}

export default AgGridTable;