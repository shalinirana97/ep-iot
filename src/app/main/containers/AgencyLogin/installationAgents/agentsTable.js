import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AgGridTable from "../../../../agGrid/agGridTable";
import { withStyles } from '@material-ui/core/styles';
import _ from '@lodash';
import { Link } from 'react-router-dom';
import { CustomPagination } from "../../../components";
import { FuseAnimate } from '@fuse';
import { Button } from '@material-ui/core';
import {data} from '../agents.json';

const styles = theme => ({
    layoutRoot: {}
});



class AgentsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: {}
        }

    }


    componentDidMount = () => {
        this.createTableData(data);
    }

    createTableData = (data) => {
        const agentsData  = data;
        let tableData = {
            frameworkComponents: {
                actionButtonRender: ActionButtonRender,
                actionStatusRender: ActionStatusRender
            },
            columnDefs: [
                {
                    headerName: "Agent Name", field: "name"
                },
                { headerName: "Email ID", field: "email" },
                { headerName: "Mobile No.", field: "mobile" },
                { headerName: "Password", field: "password" },
                { headerName: "Status", field: "status", cellRenderer:'actionStatusRender' },
                { headerName: "Actions", field: "actions", cellRenderer: 'actionButtonRender' }
            ],
            rowData: agentsData && agentsData.length && agentsData.map((item, index) => {
                return {
                    name: item.name,
                    email: item.email || null,
                    mobile: item.mobile,
                    password:item.password,
                    status:item.status,
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
                            actionStatusRender: ActionStatusRender
                        }
                    }}
                    resizable={true}
                    filter={true}
                    sortable={true}
                    rowDragManaged={true}
                    rowHeight={50}
                    height={'650px'}
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
            item.value ==true ? <span style={{ color: 'green' }}>Active</span> : <span style={{ color: 'red' }}>Inactive</span>
        }
    </span>
}
