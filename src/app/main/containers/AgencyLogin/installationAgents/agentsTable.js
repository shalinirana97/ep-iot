import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AgGridTable from "../../../../agGrid/agGridTable";
import { withStyles } from '@material-ui/core/styles';
import _ from '@lodash';
import { Link } from 'react-router-dom';
import { CustomPagination } from "../../../components";
import { FuseAnimate } from '@fuse';
import { Button, Icon } from '@material-ui/core';
import { data } from '../agents.json';

const styles = theme => ({
    layoutRoot: {}
});

var showPassword = false
class AgentsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: {},
            showPassword: false
        }

    }

    onGridReady = (params) => {
        this.gridApi = params.api;
    }

    // Function name : handleClickShowPassword or update rowDataItems
    // Parameters : id, item_index
    // Functionality :handleChange  It is user to only update the one row not the entire table render again.
    handleClickShowPassword = (item_index) => {
        var itemsToUpdate = [];
        this.gridApi.forEachNodeAfterFilterAndSort(function (rowNode, index) {
            if (item_index != rowNode.id) {
                return;
            } else {
                var data = rowNode.data;
                data.showPassword = !data.showPassword;
                data.password = data.password;
                itemsToUpdate.push(data)
            }
        });
        var res = this.gridApi.updateRowData({ update: itemsToUpdate });
    };

    componentDidMount = () => {
        this.createTableData(data);
    }

    createTableData = (data) => {
        const agentsData = data;
        let tableData = {
            frameworkComponents: {
                actionButtonRender: ActionButtonRender,
                actionStatusRender: ActionStatusRender,
                actionPasswordRender: ActionPasswordRender
            },
            columnDefs: [
                {
                    headerName: "Agent Name", field: "name"
                },
                { headerName: "Email ID", field: "email" },
                { headerName: "Mobile No.", field: "mobile" },
                { headerName: "Password", field: "showPassword", cellRenderer: 'actionPasswordRender' },
                { headerName: "Status", field: "status", cellRenderer: 'actionStatusRender' },
                { headerName: "Actions", field: "actions", cellRenderer: 'actionButtonRender' }
            ],
            rowData: agentsData && agentsData.length && agentsData.map((item, index) => {
                return {
                    // index:index,
                    name: item.name,
                    email: item.email || null,
                    mobile: item.mobile,
                    password: item.password,
                    status: item.status,
                    showPassword: false,
                    rowData: item,
                    editFunction: this.editFunction,
                    handleClickShowPassword: this.handleClickShowPassword
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
                <div className="flex items-center justify-end px-12 pt-20 bg-white">
                    <FuseAnimate animation="transition.slideRightIn" delay={300}>
                        <Button color="secondary" onClick={() => this.props.history.push('/installation-agent/create')} className="whitespace-no-wrap" variant="contained">
                            <span className="hidden sm:flex">Create</span>
                            <span className="flex sm:hidden">New</span>
                        </Button>
                    </FuseAnimate>
                </div>

                <AgGridTable
                    tableData={{
                        ...tableData,
                        frameworkComponents: {
                            actionButtonRender: ActionButtonRender,
                            actionStatusRender: ActionStatusRender,
                            actionPasswordRender: ActionPasswordRender
                        }
                    }}
                    resizable={true}
                    filter={true}
                    sortable={true}
                    rowDragManaged={true}
                    rowHeight={50}
                    height={'650px'}
                    onGridReady={this.onGridReady}
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
        agentsData: state.installerAgency.agencyData
    }
}


export default withStyles(styles, { withTheme: true })(withRouter(connect(mapStateToProps)(AgentsTable)));

function ActionButtonRender(item) {
    return <div>
        <Link className="font-medium icon_font" to="/installation-agent/details/25431">
            <i className="fa fa-edit" onClick={() => console.log('installation agent edit button clicked', item.data)} />
        </Link>
    </div>
}

function ActionStatusRender(item) {
    return <span >
        {
            item.value == true ? <span style={{ color: 'green' }}>Active</span> : <span style={{ color: 'red' }}>Inactive</span>
        }
    </span>
}

function ActionPasswordRender(item) {
    const { data = {} } = item;
    const { handleClickShowPassword, index } = data;
    // const { id = "" } = rowData;
    return <div className='flex items-center'>
        {data.showPassword ?
            <><span className='px-2'>{data.password}</span>
                <Icon className='cursor-pointer' onClick={() => handleClickShowPassword(item.rowIndex)} >visibility</Icon>
            </>
            :
            <><span className='iconPass px-2'>{data.password}</span>
                <Icon className='cursor-pointer' onClick={() => handleClickShowPassword(item.rowIndex)}>visibility_off</Icon>
            </>
        }
    </div>
}