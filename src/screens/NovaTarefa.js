import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function NovaTarefa () {
    return (

        <View>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Adicionar Tarefa</Text>

            </View> 
            <View style={styles.body}>
                <Text style={styles.texto}>Nome da Tarefa</Text>
                <TextInput style={styles.TextInput}/>
                <Text style={styles.categoria}>Categoria da Tarefa</Text>
                <TextInput style={styles.TextInput}
                     placeholder='Selecione a categoria'/>
            

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
        borderRadius: 15,
        backgroundColor: 'white' 
      },
    
    categoria: {
        fontWeight: 'bold',
        margin: 15
      },
      

    });



