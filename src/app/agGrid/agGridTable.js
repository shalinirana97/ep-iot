import React, { Component } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { CustomPagination } from "../main/components";
import styled, { css } from 'styled-components';
import { Select, MenuItem } from '@material-ui/core';


const BtnPanelFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid rgba(170, 162, 162, 0.295);
  padding: 20px;
  background-color: white
`

const CountItem = styled.span`
  color: black;

  &:first-child {
    margin-right: 10px;
  }
  
  .MuiOutlinedInput-input{
      padding: 6px 20px 6px 6px;
  }

  .MuiSelect-iconOutlined {
    right: 0px;
    }
`

const TableList = styled.div`
  width: 100%;
  height: calc(100% - 49px);

  .ag-header {
    color: black !important;
    font-weight: 400 !important;

    .ag-icon-filter {
      color: #00A78D;
    }

    ${(props) => props.reducePadding && css`
      .ag-header-cell {
        padding-left: 10px;
        padding-right: 10px;
      }
    `}
  }
`


class AgGridTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: {},
            filteredList: 0 ,
            defaultColDef: {
                sortable: this.props.sortable,
                resizable: this.props.resizable,
                // filter: this.props.filter,
            },
            defaultGridOptions: {
                rowDragManaged: this.props.rowDragManaged,
                animateRows: true,
                rowSelection: 'single',
                onSelectionChanged: this.onSelectionChanged,
                // enables pagination in the grid
                // pagination: true,
                // sets 10 rows per page (default is 100)
                paginationPageSize: 10,
            },
            
        }
    }

    handleChange = (event) => {
        this.setState({ filteredList: event.target.value})
    };

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
        const { tableData, rowHeight = 100, dataRenderWidth = true, reducePadding} = this.props;
        return (
            <div className="ag-theme-material " style={{ height: '700px', width: '100%' }}>
                <TableList
                    reducePadding={reducePadding}
                >
                    <BtnPanelFilter>
                        <div className="counts-ctn">
                            <CountItem>
                                <span>Show: </span>
                                <Select
                                    value={this.state.filteredList}
                                    onChange={this.handleChange}
                                    variant='outlined'
                                >
                                    <MenuItem >
                                        <em>Select</em>
                                    </MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={25}>25</MenuItem>
                                    <MenuItem value={50}>50</MenuItem>
                                </Select>
                            </CountItem>
                            <CountItem>Total: {tableData.rowData ? tableData.rowData.length : ''}</CountItem>
                        </div>
                    </BtnPanelFilter>

                    <AgGridReact
                        columnDefs={tableData.columnDefs}
                        rowData={tableData.rowData}
                        //   components={tableData.components}
                        floatingFilter
                        frameworkComponents={tableData.frameworkComponents}
                        rowHeight={rowHeight}
                        defaultColDef={this.state.defaultColDef}
                        onFirstDataRendered={dataRenderWidth ? this.onFirstDataRendered : () => { }}
                        gridOptions={this.state.defaultGridOptions}
                    >
                    </AgGridReact>
                </TableList>
            </div>
        );
    }
}

export default AgGridTable;