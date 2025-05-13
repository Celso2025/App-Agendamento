import AsyncStorage from "@react-native-async-storage/async-storage";

const key = 'teaks';

const getData = async () => {
    let data = JSON.parse(await AsyncStorage.getItem(key));

    if (data == null) {
        data = []
        Setdata(data)
    }
    return data
}

const Setdata = async (value) => {
    
}