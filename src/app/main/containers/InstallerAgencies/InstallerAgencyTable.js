import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AgGridTable from "../../../agGrid/agGridTable";
import { withStyles } from '@material-ui/core/styles';
import _ from '@lodash';
import { Link } from 'react-router-dom';
import { CustomPagination } from "../../components";
import { FuseAnimate } from '@fuse';
import { Button } from '@material-ui/core';

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
                    headerName: "Agency Name", field: "name"
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
            <React.Fragment>
                <div className="flex items-center justify-end px-12 pt-20 bg-white">
                    <FuseAnimate animation="transition.slideRightIn" delay={300}>
                        <Button color="secondary" onClick={() => this.props.history.push('/installer-agency/detail')} className="whitespace-no-wrap" variant="contained">
                            <span className="hidden sm:flex">Create</span>
                            <span className="flex sm:hidden">New</span>
                        </Button>
                    </FuseAnimate>
                </div>

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

const mapStateToProps = (state) => {
    return {
        agency_data: state.installerAgency.agencyData
    }
}


export default withStyles(styles, { withTheme: true })(withRouter(connect(mapStateToProps)(InstallerTable)));

function ActionButtonRender(item) {
    return <div>
        <Link className="font-medium icon_font" to="/installer-agency/detail/25431">
            <i className="fa fa-edit" onClick={() => console.log('installer agency edit button clicked', item.data)} />
        </Link>
    </div>
}
