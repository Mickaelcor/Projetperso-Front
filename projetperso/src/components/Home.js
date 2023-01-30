// Page Acceuil

import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import Login from './Login'
import Register from './Register'




function Home() {


    return (
        <div>

            <div className="bg-red-500">Hello</div>
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                        <Login />
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                        <Button content='Sign up' icon='signup' size='big' href="/register" />
                    </Grid.Column>
                </Grid>

                <Divider vertical>Or</Divider>
            </Segment>

        </div>
    )
}

export default Home