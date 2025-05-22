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
    await AsyncStorage.setItem(key, JSON.stringify(value));

}

const addData = async (task) => {
    const data = await getData()
    data.push(task)
    await setData(data)

}

export {
    getData,
    setData,
    addData
}