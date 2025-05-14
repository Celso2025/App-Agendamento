import AsyncStorage from "@react-native-async-storage/async-storage";

const key = 'teaks';

const getData = async () => {
    let data = JSON.parse(await AsyncStorage.getItem(key));

    if (data == null) {
        data = []
        setData(data)
    }
    return data
}

const setData = async (value) => {

}

export {
    getData,
    setData
}