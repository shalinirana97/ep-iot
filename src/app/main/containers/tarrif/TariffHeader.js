import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import _ from '@lodash';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'app/store/actions';
import { Icon, Typography } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import TariffModal from './addTariffModal';

const styles = theme => ({
    layoutRoot: {}
});

class TariffHeader extends Component {

    constructor(props, context) {
        super(props);

    }

    render() {
        return (
            <div className="flex flex-1 w-full items-center justify-between p-24">

                <div className="flex items-center">

                    <FuseAnimate animation="transition.expandIn" delay={300}>
                        <Icon className="text-32 mr-0 sm:mr-12">monetization_on</Icon>
                    </FuseAnimate>

                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                        <Typography className="truncate sm:flex" variant="h5">Post Codes</Typography>
                    </FuseAnimate>
                </div>
            </div>
        );
    }
}


export default withStyles(styles, { withTheme: true })(TariffHeader);