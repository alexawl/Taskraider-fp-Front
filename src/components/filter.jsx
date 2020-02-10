import React, { Component } from 'react';

class Filter extends Component {


    handleInputChange = (event) => {
        const target = event.target;
        const name = this.props.filter.name;
        const option = target.value;
        const checked = target.checked;

        this.props.handleFilterClick(name, option, checked);
    }



    render() {


        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-group-item">
                        <div className="card-header">
                            <h6>{this.props.filter.name} </h6>
                        </div>
                        <div className="filter-content">
                            <div className="card-body">

                                {this.props.filter.options.map(option => (
                                    <label key={option} className="form-check">
                                        <input
                                            className="form-check-input"
                                            type={this.props.filter.type}
                                            value={option}
                                            name={this.props.filter.name}
                                            defaultChecked={option.checked}
                                            onChange={this.handleInputChange}
                                        />

                                        <span className="form-check-label">
                                            {option}
                                        </span>
                                    </label>

                                ))}

                            </div>
                        </div>
                    </div>
                </div>


            </React.Fragment>
        )
    }

}

export default Filter;