import React from 'react';
import { Icon, Typography, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { FuseAnimate } from '@fuse';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function DetailPageHeader(props) {
    const { pageTitle, detailTitle, subTitle, pageRoute, headerIcon } = props;
    const mainTheme = useSelector(({ fuse }) => fuse.settings.mainTheme);
    const searchText = '';
    return (
        <div className="flex flex-1 w-full items-center justify-between p-24">

            <div className="flex flex-1 flex-col justify-center sm:items-start">
                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                    <Typography className="normal-case flex items-center sm:mb-12" component={Link} role="button" to={pageRoute} color="inherit">
                        <Icon className="mr-4 text-20">arrow_back</Icon>
                                    {pageTitle}
                    </Typography>
                </FuseAnimate>
                
                <div className="flex items-center max-w-full">
                    <FuseAnimate animation="transition.expandIn" delay={300}>
                        {headerIcon ?
                            <Icon className="text-32 mr-0 sm:mr-12">{headerIcon}</Icon>
                            :<img className="w-32 sm:w-48 mr-8 sm:mr-16 rounded" src="assets/images/ecommerce/product-image-placeholder.png" alt={pageTitle} />
                        }           
                    </FuseAnimate>
                    <div className="flex flex-col min-w-0">
                        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                            <Typography className="text-16 sm:text-20 truncate">
                                {detailTitle}
                            </Typography>
                        </FuseAnimate>
                        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                            <Typography variant="caption">{subTitle} Details</Typography>
                        </FuseAnimate>
                    </div>
                </div>
                {/* <div className="flex items-center">

                    <FuseAnimate animation="transition.expandIn" delay={300}>
                        <Icon className="text-20 mr-0 sm:mr-12">description</Icon>
                    </FuseAnimate>

                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                        <Typography className="text-20 sm:text-20 truncate items-center">Details</Typography>
                    </FuseAnimate>
                </div> */}

                {/* <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                        <Typography variant="caption">
                                            {'From ' + order.customer.firstName + ' ' + order.customer.lastName}
                                        </Typography>
                                    </FuseAnimate> */}

            </div>
        </div>
    );
}

export default DetailPageHeader;
