import React from 'react';
import { View, Image, Text } from 'react-native';

const ImageCard = () => (
    <View style={styles.container}>
        <Image 
            /*
             * dari URL
            */
            //source={{uri: 'https://images.unsplash.com/uploads/1413142095961484763cf/d141726c?dpr=1&auto=compress,format&fit=crop&w=568&h=379&q=80&cs=tinysrgb&crop='}} 
            
            /*
             * dari local file
            */
            source={require('../img/01.jpeg')}
            style={styles.image}
        />
        <View style={styles.cardBottomInfo}>
            <View style={styles.authorContainer}>
                <Image style={styles.authorImage} source={require('../img/01.jpeg')} />
                <Text style={styles.authorName}>Muh Isfhani</Text>
            </View>
            <View>

            </View>
        </View>
    </View>
);

const styles = {
    container: {
        margin: 15
    },
    image: {
        width: null,
        height: 200
    },
    cardBottomInfo: {
        backgroundColor: '#fff'
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    authorImage: {
        width: 25,
        height: 25,
        borderRadius: 50
    },
    authorName: {
        marginLeft: 10,
        fontWeight: 'bold'
        
    }
}

export default ImageCard;
