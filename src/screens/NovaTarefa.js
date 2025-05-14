import { View, Text, StyleSheet, TextInput, TextDate, Touchable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function NovaTarefa() {

    const navigation = useNavigation();

    return (

        <View>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Adicionar Tarefa</Text>

            </View>
            <View style={styles.body}>
                <Text style={styles.texto}>Nome da Tarefa</Text>
                <TextInput style={styles.TextInput} />
                <Text style={styles.categoria}>Categoria da Tarefa</Text>
                <Picker style={styles.TextInput}>
                    <Picker.Item label="Estude" value="estude" />
                    <Picker.Item label="Trabalho" value="trabalho" />
                    <Picker.Item label="Reuniao" value="reuniao" />
                    <Picker.Item label="Prova" value="prova" />
                    <Picker.Item label="Aula" value="aula" />

                </Picker>

                <Text style={styles.texto}>Descricao da Tarefa</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='value'
                    multiline
                    numberOfLines={3}

                ></TextInput>
                <TextInput
                    style={styles.textDate}
                    placeholder='dd/mm/xxxx'
                />
                <View style={ styles.containerBotao}>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
                    <Text style={styles.botaoTexto}>Cancel</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoTexto}> Ok </Text> 
                </TouchableOpacity>
                </View>

            </View>

        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cabecalho: {
        backgroundColor: 'blue',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    titulo: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    body: {
        padding: 10
    },
    texto: {
        margin: 15,
        fontWeight: 'bold'
    },

    tarefa: {
        margin: 15,
        fontWeight: 'bold'
    

    },

    TextInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white'
    },

    categoria: {
        fontWeight: 'bold',
        margin: 20,
        

    },

    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 15

    },
    textDate: {
        height: 50,
        borderWidth: 3,
        borderColor: 'indigo',
        borderRadius: 5,
        margin: 20,
        marginVertical: 30,
        padding: 15,
        backgroundColor: 'white'
    },
    containerBotao: {
        flexDirection: 'row',
        justifyContent: 'end'
    },
    
    botao: {
        padding: 15,

    },

    botaoTexto: {
        color: 'indigo'
    }
});



