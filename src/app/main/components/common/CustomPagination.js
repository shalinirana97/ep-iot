import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";


const theme = createMuiTheme();

class CustomPagination extends Component{
    constructor(props) {
        super(props);
        this.state = { offset: 0 };
      }
     
      handleClick = (offset) => {
        this.setState({ offset });
        // Hit API for server side rendering from here
      }
         
    render(){
        return(
            <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Pagination
              limit={10}
              offset={this.state.offset}
              total={100}
              currentPageColor='secondary'
              onClick={(e, offset) => this.handleClick(offset)}
            />
          </MuiThemeProvider>
        )
    }
}

export default CustomPagination;