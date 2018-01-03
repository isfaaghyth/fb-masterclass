import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './components/Header';
import ImageCard from './components/ImageCard';

const App = () => (
    <View>
        <Header title='isfaaghyth'/>
        <ImageCard />
        <ImageCard />
        <ImageCard />
    </View>
);

AppRegistry.registerComponent('fbcircle', ()=> App);
