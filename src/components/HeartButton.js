import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

class HeartButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoved: false
        }
    }

    render() {
        return (
            <Image/>
        );
    }
}

export default HeartButton;