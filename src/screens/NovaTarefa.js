import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function NovaTarefa () {
    return (

        <View>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Adicionar Tarefa</Text>
                <View style={styles.icone}></View>

            </View>
            <View style={styles.tarefa}>
                <Text>Nome da Tarefa</Text>

            </View>
            <View> 
                <TextInput
                style={styles.input}
                />
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
    
    tarefa: {
        margin: 15,
        fontWeight: 'bold'
    },
        
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15 
      },

    });



