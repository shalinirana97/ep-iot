import React, { Component } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { CustomPagination } from "../main/components";
import styled, { css } from 'styled-components';
import { Select, MenuItem, Paper, Icon, Input } from '@material-ui/core';


const BtnPanelFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(170, 162, 162, 0.295);
  padding: 20px 10px;
  background-color: white
`

const CountItem = styled.span`
  color: black;

  &:last-child {
    margin-left: 10px;
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

    .ag-header-row-column {
        background-color: #f2f2f2
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
            filteredList: 0,
            searchText:'',
            defaultColDef: {
                sortable: this.props.sortable,
                resizable: this.props.resizable,
                // filter: this.props.filter,
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
            },

        }
    }

    handleChange = (event) => {
        this.setState({ filteredList: event.target.value })
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

    handleChangeSearch(e){
        this.setState({
            searchText: e.target.value
        })
    }

    render() {
        const { tableData, rowHeight = 100, dataRenderWidth = true, reducePadding } = this.props;
        return (
            <div className="ag-theme-material" style={{ height: '700px', width: '100%' }}>
                <TableList
                    reducePadding={reducePadding}
                >
                    <BtnPanelFilter>
                        <Paper className="flex flex-1 items-center w-full max-w-512 px-8 py-4 rounded-8 sm:px-12" elevation={1}>

                            <Icon className="mr-8" color="action">search</Icon>

                            <Input
                                placeholder="Search"
                                className="flex flex-1"
                                disableUnderline
                                fullWidth
                                value={this.state.searchText}
                                inputProps={{
                                    'aria-label': 'Search'
                                }}
                                onChange={(e) => this.handleChangeSearch(e)}
                            />
                        </Paper>
                        <div className="flex items-center justify-center pr-0 pl-12 sm:px-12">
                            <CountItem className="flex items-center sm:flex" >
                                <span className="px-4" >Show: </span>
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
                            <CountItem className='hidden sm:flex'>Total: {tableData.rowData ? tableData.rowData.length : ''}</CountItem>
                        </div>
                    </BtnPanelFilter>

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
                </TableList>
            </div>
        );
    }
}

export default AgGridTable;