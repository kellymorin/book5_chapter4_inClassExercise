import React, {Component} from 'react'

export default class AnimalList extends Component{

  animalOwners(animalId){
    let animalOwner = this.props.animalsOwners
    .filter(join => join.animalId === animalId)
    .map(join => this.props.owners.find(owner => owner.id === join.ownerId ).name)

    if (animalOwner.length === 0){
      animalOwner = ["no one"]
    }

    return animalOwner
  }

  render(){
    return(
      <section className="animals">
      {
        this.props.animals.map(animal =>
          <div key={animal.id}>
            {animal.name}
            <p>Owned by: {this.animalOwners(animal.id).join(" & ")}</p>
          </div>
        )
      }
      </section>
    )
  }
}