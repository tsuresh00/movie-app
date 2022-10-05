import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function SearchPage({ navigation }) {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [text, onChangeText] = React.useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('movie');
    const [items, setItems] = useState([
        { label: 'Movie', value: 'movie' },
        { label: 'Multi', value: 'multi' },
        { label: 'Tv', value: 'tv' }
    ]);

    const getMovies = async () => {
        try {

            const response = await fetch(`https://api.themoviedb.org/3/search/${value}?api_key=941d2165e4e6095b081a95d47b61e6b0&language=en-US&query=${text}&page=1`);
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        //   getMovies();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', padding: 10, margin: 10 }}>
                <Image
                    source={{
                        uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                    }}
                    style={{ width: 100, height: 100, marginRight: 10 }}
                />
                <View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title?item.title:item.name}</Text>
                    <Text style={{ fontSize: 15 }}>Popularity {item.popularity}</Text>
                    <Text style={{ fontSize: 15 }}>Release date {item.release_date}</Text>
                    <TouchableOpacity onPress={() =>

                        navigation.navigate('Details', { movie: item })
                    }
                        style={{ width: 160, height: 40, backgroundColor: '#59d4ff', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                        <Text style={{ color: 'white' }}>More Details</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    };


    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 10,height:200 }}>
                <Text style={{ fontSize: 18, paddingLeft: 10, fontWeight: 'bold' }}>Search Movie/Tv Show name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="i.e,James Bond,CSI"

                />

                <Text style={{ fontSize: 18, paddingLeft: 10, fontWeight: 'bold' }}>Choose Search Type</Text>
                <View style={{ flex: 1, flexDirection: 'row', padding: 20 ,}}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        containerStyle={{ width: 150 }}
                    />

                    <TouchableOpacity onPress={() => {

                        if (text == "") {
                            setError(true)
                        }
                        else{
                            getMovies()
                        }
                    }
                    }
                        style={{ width: 160, height: 50, backgroundColor: '#59d4ff', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginLeft: 20 }}>
                        <Text style={{ color: 'white' }}>Search</Text>
                    </TouchableOpacity>
                </View>
                {
                    text==""?
                <Text style={{marginTop:30,paddingLeft:20,color:'red'}}>Movie/Tv show nameis required</Text>:null
}

            </View>
            {/* <Text>{JSON.stringify(data)}</Text> */}
            {/* <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        /> */}
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default SearchPage;