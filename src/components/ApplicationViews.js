import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


export default class ApplicationViews extends Component {
  state = {
    locations: [],
    animals: [],
    owners: [],
    animalsOwners: [],
    employees: [],
  }

  componentDidMount() {
    const newState = {}

    fetch("http://localhost:5002/animals")
        .then(r => r.json())
        .then(animals => newState.animals = animals)
        .then(() =>fetch("http://localhost:5002/employees").then(r => r.json()))
        .then(employees => newState.employees = employees)
        .then(() => fetch("http://localhost:5002/locations")
        .then(r => r.json()))
        .then(locations => newState.locations = locations)
        .then(() => fetch("http://localhost:5002/owners").then(r => r.json()))
        .then(owners => newState.owners = owners)
        .then(() => fetch("http://localhost:5002/animalsOwners").then(r => r.json()))
        .then(animalsOwners => newState.animalsOwners = animalsOwners)
        .then(() => this.setState(newState))
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} owners={this.state.owners} animalsOwners={this.state.animalsOwners}/>
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList owners={this.state.owners} />
        }} />
      </React.Fragment>
    )
  }
}