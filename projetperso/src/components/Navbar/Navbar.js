import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    state = { activeItem: 'Home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item
                        name='Home'
                        active={activeItem === 'Home'}
                        onClick={this.handleItemClick}
                        href='/'
                    />
                    <Menu.Item
                        name='Concerts'
                        active={activeItem === 'Concerts'}
                        onClick={this.handleItemClick}
                        href='/allconcerts'
                    />
                    <Menu.Item
                        name='Profil'
                        active={activeItem === 'Profil'}
                        onClick={this.handleItemClick}
                        href='/user/:id'
                    />
                </Menu>
            </Segment>
        )
    }
}
