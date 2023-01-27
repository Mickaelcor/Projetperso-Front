// Page ajout de concert

import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, } from 'semantic-ui-react'


class NewConcert extends Component {
    render() {
        return (
            <div> <h1>Ajouter un Concert</h1>
                <Form action="http://localhost:5001/api/newconcert" method="post">
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Input}
                            label='Titre du Spectacle'
                            placeholder='titre du spectacle'
                            name='titre'
                        />
                        <Form.Field
                            control={Input}
                            label='Artiste'
                            placeholder='artiste'
                            name='artiste'
                        />
                        <Form.Field
                            control={Input}
                            label='Date début concert'
                            placeholder='Date'
                            name='date_debut'
                            type='Date'
                        />
                        <Form.Field
                            control={Input}
                            label='Date fin concert'
                            placeholder='Date'
                            name='date_fin'
                            type='Date'
                        />
                        <Form.Field
                            control={Input}
                            label='Nombre de place'
                            placeholder='50'
                            name='nbr_place'
                            type='Number'
                        />
                        <Form.Field
                            control={Input}
                            label='Reference'
                            placeholder='XXXX'
                            name='reference'
                        />
                    </Form.Group>
                    <Form.Field
                        control={TextArea}
                        label='Description'
                        placeholder='description...'
                        name='description'
                    />
                    <Form.Field
                        control={Checkbox}
                        label='I agree to the Terms and Conditions'
                    />
                    <Form.Field control={Button}>Enregistrer</Form.Field>
                </Form>
            </div>
        )
    }
}

export default NewConcert