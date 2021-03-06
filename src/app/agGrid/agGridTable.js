import React, { Component } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { CustomPagination } from "../main/components";
import styled, { css } from 'styled-components';
import { Select, MenuItem, Paper, Icon, Input, Tooltip, Typography } from '@material-ui/core';


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
            searchText: '',
            defaultGridOptions: {
                rowDragManaged: this.props.rowDragManaged,
                animateRows: true,
                rowSelection: 'multiple',
                onSelectionChanged: this.onSelectionChanged,
                // enables pagination in the grid
                // pagination: true,
                // sets 10 rows per page (default is 100)
                paginationPageSize: 10,
                defaultColDef: {
                    sortable: this.props.sortable,
                    resizable: this.props.resizable || true,
                    filter: this.props.filter,
                },
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

    //-----Function for Searchbar---------------------
    handleChangeSearch(e) {
        this.setState({
            searchText: e.target.value
        })
    }

    clearFilters() {
        this.state.defaultGridOptions.api.setFilterModel(null);
        this.state.defaultGridOptions.api.onFilterChanged();
    }

    render() {
        const { tableData, rowHeight = 100, dataRenderWidth = true, reducePadding, isSearchBar, onGridReady = () => { }, height = '700px' } = this.props;

        return (
            <div className="ag-theme-material" style={{ height: height, width: '100%' }}>
                <TableList
                // reducePadding={reducePadding}
                >
                    {isSearchBar ?
                        <BtnPanelFilter>
                            <Typography >Filtered Devices</Typography>
                            <CountItem className='hidden sm:flex'>No. of results found: {tableData.rowData ? tableData.rowData.length : ''}</CountItem>
                        </BtnPanelFilter>
                        : <BtnPanelFilter>
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
                            <div className="flex items-center justify-between w-auto pr-0 pl-12 sm:px-12">
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

                                <Tooltip
                                    title="Clear filter"
                                    placement={'bottom-end'}
                                    enterDelay={300}
                                >
                                    <img onClick={() => this.clearFilters()} className="ml-4 customIconColor" width="30" src="https://img.icons8.com/windows/2x/clear-filters.png" alt="clearFilters" />
                                </Tooltip>
                            </div>
                        </BtnPanelFilter>
                    }

                    <AgGridReact
                        columnDefs={tableData.columnDefs}
                        rowData={tableData.rowData}
                        //   components={tableData.components}
                        clearFilters
                        frameworkComponents={tableData.frameworkComponents}
                        rowHeight={rowHeight}
                        defaultColDef={this.state.defaultColDef}
                        onFirstDataRendered={dataRenderWidth ? this.onFirstDataRendered : () => { }}
                        gridOptions={this.state.defaultGridOptions}
                        onGridReady={onGridReady}
                    >
                    </AgGridReact>
                </TableList>
            </div>
        );
    }
}

export default AgGridTable;