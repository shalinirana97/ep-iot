import React from 'react';
import ReactTelephoneInput from "react-telephone-input";
import 'react-telephone-input/css/default.css'
export default class TelephoneInput extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        const { className = "", onChange, inputProps = {}, value, flagsImagePath } = this.props;

        return (
            <ReactTelephoneInput
                value={value}
                className={className}
                defaultCountry="au"
                flagsImagePath={flagsImagePath}
                onChange={onChange}
                inputProps={inputProps}
                preferredCountries={["au", "ca", "us"]}
            />
        );
    }
}