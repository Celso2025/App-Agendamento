
import { Background } from '@react-navigation/elements';
import { View, Text, StyleSheet } from 'react-native-web';

export default function TarefaItem() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Tarefa 1</Text>
            <Text style={styles.data}> 03/04/2025</Text>
            <Text style={styles.categoria}>Categoria - estudo</Text>
            <View style={styles.status}>
                <Text style={styles.textostatus}>a cumprir</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({ 
    container: {
        width: '100%',
        height: 100,
        padding: 15,
        borderBottomWidth: 1,
    
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    data: {
        marginTop: 5,
        marginLeft: 3.5

    },
    categoria: {
        marginTop: 8
    },
    status: {
        backgroundColor: 'orange',
        width: 150,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    textostatus: {
        color: 'white'
    }
});