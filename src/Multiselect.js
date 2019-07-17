import React, { Component } from 'react';
import  MultiSelectReact  from 'multi-select-react';

class Multiselect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            multiSelect: []
        };
    }

    render() {
        const selectedOptionsStyles = {
            color: "#3c763d",
            backgroundColor: "#dff0d8"
        };
        const optionsListStyles = {
            backgroundColor: "#dff0d8",
            color: "#3c763d"
        };
        return (
            <MultiSelectReact
                options={this.state.multiSelect}
                optionClicked={this.optionClicked.bind(this)}
                selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
                selectedOptionsStyles={selectedOptionsStyles}
                optionsListStyles={optionsListStyles} />
        );
    }

    optionClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
    }
    selectedBadgeClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
    }
}

export default Multiselect;