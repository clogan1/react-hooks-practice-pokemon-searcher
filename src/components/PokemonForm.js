import React, { useState }  from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  })

  function manageFormData(e){
    let name = e.target.name
    let value = e.target.value

    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(){
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {front: formData.frontUrl, back: formData.backUrl}
    }

    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(newPokemon)
    })
      .then(res => res.json())
      .then(json => addPokemon(json))

    setFormData({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''})

  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={manageFormData}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={manageFormData}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={manageFormData}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={manageFormData}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;


