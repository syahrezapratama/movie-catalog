import React from 'react';
import {Wrapper, Content, Text} from './Hero.styled';

export default function Hero(props) {
    return (
        <Wrapper image={props.image}>
            <Content>
                <Text>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </Text>
            </Content>
        </Wrapper>
    )
}