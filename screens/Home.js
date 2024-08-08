import * as React from 'react'
import {Text,View,ScrollView,StyleSheet,Image} from 'react-native'
import { useEffect,useState } from 'react'
import styles,{colors} from '../assets/styles'
import { SearchBar } from 'react-native-screens'


//importing components
import HomeHeader from '../components/HomeHeader'

//constants
const sections = ['Starters', 'Mains', 'Desserts', 'Drinks'];

const Separator = () => <View style={menuStyles.separator}></View>
const Item = ({ name, price, description, image }) => {
    return (
        <View style={menuStyles.itemContainer}>
            <View style={{ flex: 0.9 }}>
                <Text style={menuStyles.cardTitle}>{name}</Text>
                <Text style={menuStyles.cardParagraph} numberOfLines={2}>{description}</Text>
                <Text style={menuStyles.highlightedText}>${price}</Text>
            </View>
            <Image
                source={{ uri: image }}
                resizeMode='contain'
                accessible={true}
                accessibilityLabel={'Menu item image'}
                style={menuStyles.cardImage}
            />
        </View>
    );
}


export default function Home({navigation}){


    //app logic section

    //the rendering section of the list
    const renderItem = ({ item }) => <Item name={item.name} price={item.price} description={item.description} image={item.imageFileName} />


    //hooks
    const [imageText, setImageText] = React.useState('');
    const [imagePath, setImagePath] = React.useState('');
    const [menuItems, setMenuItems] = React.useState([]);

    const [filterSelections, setFilterSelections] = React.useState(
        sections.map(() => false)
    );

    //search bar hooks
    const [searchBarText, setSearchBarText] = React.useState('');
    const [query, setQuery] = React.useState('');

    function goToProfile() {
        navigation.navigate('user Profile');
    }
    function goToHome() {
    }




    //handelers
    const handleSearchChange = (text) => {
        setSearchBarText(text);
        debouncedLookup(text);
    };

    //======rendering section=======
    return(
        <View style={{ flex: 1,
            paddingVertical: 40,
            paddingHorizontal: 20,
            backgroundColor: 'white'}}>

                <HomeHeader imagePath={imagePath} imageText={imageText} goToProfile={goToProfile} />

                <View style={stylesOhome.heroSection}>
                <Text style={stylesOhome.heroTitle}>Little Lemon</Text>
                <Text style={styles.subTitle}>Chicago</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                    <Text style={styles.lead}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
                    <Image
                        source={require('../assets/Hero image.png')}
                        resizeMode='contain'
                        accessible={true}
                        accessibilityLabel={'Chef cooking in little lemon'}
                        style={stylesOhome.heroImage}
                    />
                </View>
                <SearchBar
                    placeholder="Search"
                    placeholderTextColor={colors.secondaryDarkGrey}
                    onChangeText={handleSearchChange}
                    value={searchBarText}
                    style={stylesOhome.searchBar}
                    iconColor={colors.secondaryDarkGrey}
                    inputStyle={{ color: colors.secondaryDarkGrey }}
                    elevation={0}
                />
            </View>


        </View>
    );

}

const stylesOhome = StyleSheet.create({
    heroSection: {
        padding: 20,
        paddingHorizontal: 10,
        backgroundColor: colors.primaryGreen,
    },
    heroTitle: {
        fontWeight: 'medium',
        fontSize: 40,
        color: colors.primaryYellow
    },
    heroImage: {
        width: 140,
        height: 150,
        borderRadius: 16,
    },
    searchBar: {
        marginVertical: 10,
        backgroundColor: 'white',
        shadowRadius: 0,
        shadowOpacity: 0,
        borderRadius: 8,
    },
})