import React from 'react';
import { Platform } from 'react-native';
import { Button, Header, Left, Right, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

HeaderStyle = {
    color: '#000',
    fontSize: 24,
    width: 270,
    right: Platform.OS !== 'ios' ? 40 : null,
};

export default function CrossPlatformHeader({ title, backCallback }) {
    return (
        <Header transparent>
            <Left>
                {backCallback && (
                    <Button transparent onPress={backCallback}>
                        <Icon
                            name="chevron-back-outline"
                            style={{ fontSize: 22 }}
                        />
                    </Button>
                )}
            </Left>
            <Body>
                <Title style={HeaderStyle}>{title}</Title>
            </Body>
            <Right />
        </Header>
    );
}