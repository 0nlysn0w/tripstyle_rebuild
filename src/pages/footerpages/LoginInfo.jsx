import React, { Component } from 'react';
import { Container, Image, Divider, Header } from 'semantic-ui-react'
import logininfo from '../../images/logininfo.png'

class LoginInfo extends Component {

        render() {
            return (
                <div>
                    <Divider hidden />
                    <Divider hidden />
                    <Container textAlign='center'>
                        <Header size='huge'>
                            How to login
                        </Header>
                        <Divider hidden />
                        <Image src={logininfo}></Image>
                        <Divider hidden />
                    </Container>
                </div>
            );
        }
    }
    

export default LoginInfo;