import React, { useState } from 'react';
import { TableHead, TableSortLabel, TableCell, TableRow, Tooltip } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const rows = [

    {
        id: 'postcode',
        align: 'left',
        disablePadding: false,
        label: 'Post Code',
        sort: true,
    },
    {
        id: 'timing',
        align: 'left',
        disablePadding: false,
        label: 'Timing',
        sort: true,
    },
    {
        id: 'actions',
        align: 'left',
        disablePadding: false,
        label: 'Actions',
        sort: false,
    },
    {
        id: 'icon',
        align: 'left',
        disablePadding: false,
        label: 'Icon',
        sort: false,
    }
];

const useStyles = makeStyles(theme => ({
    actionsButtonWrapper: {
        background: theme.palette.background.paper
    }
}));

const TariffTablehead = (props) => {
    const classes = useStyles(props);
    const [selectedProductsMenu, setSelectedProductsMenu] = useState(null);

    const createSortHandler = property => event => {
        props.onRequestSort(event, property);
    };

    function openSelectedProductsMenu(event) {
        setSelectedProductsMenu(event.currentTarget);
    }

    function closeSelectedProductsMenu() {
        setSelectedProductsMenu(null);
    }

    return (
        <TableHead>
            <TableRow className="h-52 bgTableHead">
                {rows.map(row => {
                    return (
                        <TableCell
                            key={row.id}
                            align={row.align}
                            padding={row.disablePadding ? 'none' : 'default'}
                            sortDirection={props.order.id === row.id ? props.order.direction : false}
                        >
                            {row.sort && (
                                // <Tooltip
                                //     title="Sort"
                                //     placement={row.align === "right" ? 'bottom-end' : 'bottom-start'}
                                //     enterDelay={300}
                                // >
                                    <TableSortLabel
                                        active={props.order.id === row.id}
                                        direction={props.order.direction}
                                        onClick={createSortHandler(row.id)}
                                    >
                                        {row.label}
                                    </TableSortLabel>
                                // </Tooltip>
                                
                            )}

                            {row.id === 'actions' && (row.label)}
                        </TableCell>
                    );
                }, this)}
            </TableRow>
        </TableHead>
    );
}

export default TariffTablehead;
