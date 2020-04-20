import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AgGridTable from "../../../../agGrid/agGridTable";
import { withStyles } from '@material-ui/core/styles';
import _ from '@lodash';
import { Link } from 'react-router-dom';
// import { CustomPagination } from "../../components";

const styles = theme => ({
    layoutRoot: {}
});



class NotificationDetailTable extends Component {
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
        const { tableContent } = this.props
        console.log('tablecontent', tableContent)
        let tableData = {
            frameworkComponents: {
                actionButtonRender: ActionButtonRender,
            },
            columnDefs: [
                { headerName: "Device Type", field: "deviceType",
                    checkboxSelection: true,
                    headerCheckboxSelection: true },
                { headerName: "Postcode", field: "postcode" },
                { headerName: "Installation Company", field: "company" },
                { headerName: "Date Installed Before", field: "dateBefore" },
                { headerName: "Electricity Distributor", field: "elecDistributor" },
                { headerName: "Premium", field: "premium" },
                { headerName: "No. of Adults", field: "adults" },
                { headerName: "No. of Child", field: "child" },
                { headerName: "Floors", field: "floors" },
                { headerName: "Solar", field: "solar" }
            ],
            rowData: tableContent && tableContent.length>0 && tableContent.map(item => {
                console.log('teim',item)
                return {
                    // deviceType: item.deviceType,
                    postcode: item.postcode || null,
                    // company: item.company,
                    // dateBefore: item.dateBefore,
                    // elecDistributor: item.elecDistributor,
                    // premium: item.premium,
                    adults: item.adults,
                    child: item.child,
                    floors: item.floors,
                    solar: item.solar,

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
                    isSearchBar= {true}
                />
                {/* <CustomPagination /> */}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}


export default withStyles(styles, { withTheme: true })(withRouter(connect(mapStateToProps)(NotificationDetailTable)));

function ActionButtonRender(item) {
    return <div>
        <Link className="font-medium icon_font" to="/installer-agency/details">
            <i className="fa fa-edit" onClick={() => console.log('installer agency edit button clicked',item.data)} />
        </Link>
    </div>
}
