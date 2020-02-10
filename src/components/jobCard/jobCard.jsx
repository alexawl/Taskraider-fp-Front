import React, { Component } from 'react'
import { CardContainer, Logo, JobTitle, JobLocation } from './styles';



class JobCard extends Component {

    render() {
        return (
            <CardContainer className="container">
                <div className="row">
                    <div className="col-12 col-sm-4 col-md-2">
                        <div className="row">
                            <div className="col col-12">
                                <Logo src={this.props.job.company.logo} />
                            </div>
                            <div className="col col-12 text-center">
                                <span>{this.props.job.company.name}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col col-12 col-sm-8 col-md-10">

                        <div className="row">
                            <div className="col-12 align-self-start">
                                <JobTitle>
                                    {this.props.job.title}
                                </JobTitle>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-12 col-sm-12 align-self-start">
                                <JobLocation>
                                    {this.props.job.experience}
                                </JobLocation>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-12 col-sm-12 align-self-start">
                                <JobLocation>
                                    {this.props.job.locations[0].location.text}
                                </JobLocation>
                            </div>
                        </div>
                    </div>

                </div>


            </CardContainer>
        )
    }

}

export default JobCard