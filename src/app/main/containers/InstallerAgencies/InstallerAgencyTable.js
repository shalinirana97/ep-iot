import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AgGridTable from "../../../agGrid/agGridTable";
import { withStyles } from '@material-ui/core/styles';
import _ from '@lodash';
import { Link } from 'react-router-dom';
import { CustomPagination } from "../../components";

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
        <Link className="font-medium icon_font" to="/installer-agency/details">
            <i className="fa fa-edit" onClick={() => console.log('installer agency edit button clicked', item.data)} />
        </Link>
    </div>
}
