//importing important components
import { Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

//importing other components here



//main code of file

export default function Profile(){
    const name = AsyncStorage.getItem("name")
    

    return(
        <>
        
        <Text>profile sections</Text>
        
        </>
    );

}