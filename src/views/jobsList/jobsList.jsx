import React, { Component } from 'react';
import JobCard from '../../components/jobCard/jobCard';
import Filter from '../../components/filter';
import { ContainerFilter, ContainerList } from './styles';

class JobList extends Component {

    //TODO actually filter

    constructor() {
        super();
        this.state = {
            jobs: [],
            filteredJobs: [],
            loaded: false,
            selectedFilters: {
                experience: [],
                company: [],
                city: []
            }
        }
    }



    componentDidMount = async () => {
        const jobs = await this.fetchJobs();
        console.log(jobs)
        this.setState({ jobs, loaded: true, filteredJobs: jobs })
    }

    fetchJobs = async (params) => {
        const queryParams = params ? params : "";
        try {
            let jobs = await fetch('/api/jobs' + queryParams, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            });
            return await jobs.json();

        } catch (error) {
            console.log(error)
        }
    }

    createFilterObject = jobs => {

        //filter by experience level
        const filterByExp = {
            name: "Experience",
            type: "checkbox",
            options: [...new Set(jobs.map(job => job.experience))]
        }

        //filter by company
        const filterByCompany = {
            name: "Company",
            type: "checkbox",
            options: [...new Set(jobs.map(job => job.company.name))]
        }

        //filter by location
        const filterByLocation = {
            name: "City",
            type: "checkbox",
            options: [...new Set(jobs.filter(job => job.locations[0].location.text).map(j => j.locations[0].location.text))]
        }

        return [filterByExp, filterByCompany, filterByLocation]
    }

    handleFilterClick = (name, option, selected) => {

        let selectedFilters = [];
        switch (name) {
            case "Experience":
                selectedFilters = this.state.selectedFilters
                selected ? selectedFilters.experience.push(option) : selectedFilters.experience.splice(selectedFilters.experience.indexOf(option), 1);
                this.setState(selectedFilters);
                break;
            case "Company":
                selectedFilters = this.state.selectedFilters
                selected ? selectedFilters.company.push(option) : selectedFilters.company.splice(selectedFilters.company.indexOf(option), 1);
                this.setState(selectedFilters);
                break;
            case "City":
                selectedFilters = this.state.selectedFilters
                selected ? selectedFilters.city.push(option) : selectedFilters.city.splice(selectedFilters.city.indexOf(option), 1);
                this.setState(selectedFilters);
                break;
            default: return
        }
    }


    filterJobs = (jobs, filters) => {
        let filteredJobs = jobs;

        //by experience
        if (filters.experience.length > 0) {
            filteredJobs = filteredJobs.filter(job => filters.experience.includes(job.experience))
        }

        //by company
        if (filters.company.length > 0) {
            filteredJobs = filteredJobs.filter(job => filters.company.includes(job.company.name))
        }

        //by city
        if (filters.city.length > 0) {
            filteredJobs = filteredJobs.filter(job => filters.city.includes(job.locations[0].location.text))
        }

        return filteredJobs;
    }

    renderJobCardList = () => {
        const filteredJobs = this.filterJobs(this.state.jobs, this.state.selectedFilters);
        return (
            filteredJobs.map(job => (
                <div key={job.id}
                    className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <JobCard job={job} />
                </div>
            ))
        )
    }

    renderTombstones = () => {
        return "no jobs"
    }


    render() {
        const filters = this.state.loaded ? this.createFilterObject(this.state.jobs) : [];
        return (
            <div className="container-fluid">
                <ContainerFilter>
                    {this.state.loaded ? filters.map(filter => (

                        <Filter key={filter.name} handler={this.handleFilterClick} filter={filter} handleFilterClick={this.handleFilterClick} />

                    ))
                        :
                        ""
                    }
                </ContainerFilter>

                <ContainerList className="container">
                    <div className="row"> {this.state.loaded ?
                        this.renderJobCardList()
                        :
                        this.renderTombstones()
                    }
                    </div>
                </ContainerList>

            </div>
        )
    }
}
export default JobList