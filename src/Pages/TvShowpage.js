import React, { useEffect, useState } from 'react';
import { Button, View, Text ,FlatList,Image,TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function TvShowPage({ navigation }) {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('airing_today');
    const [items, setItems] = useState([
        { label: 'Airing today', value: 'airing_today' },
        { label: 'On The Air', value: 'on_the_air' },
        { label: 'Popular', value: 'popular' },
        { label: 'Top Rated', value: 'top_rated' }
    ]);
  
    const getTvShows = async (tvtype) => {
       try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${tvtype}?api_key=941d2165e4e6095b081a95d47b61e6b0&language=en-US&page=1`);
        const json = await response.json();
        setData(json.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
        getTvShows(value);
    }, []);

    const renderItem = ({ item }) => {
        return (
            <View style={{flex:1,flexDirection:'row',padding:10,margin:10}}>
                <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
          }}
          style={{ width: 100, height: 100 ,marginRight:10}}
        />
        <View>
        <Text style={{fontSize:16,fontWeight:'bold'}}>{item.name}</Text>
        <Text style={{fontSize:15}}>Popularity {item.popularity}</Text>
        <Text style={{fontSize:15}}>Release date {item.release_date}</Text>
        <TouchableOpacity onPress={() => 
        
        navigation.navigate('Details', { movie: item })
        } 
        style={{width:160,height:40,backgroundColor:'#59d4ff',justifyContent:'center',alignItems:'center',borderRadius:5}}>
            <Text style={{color:'white'}}>More Details</Text>
        </TouchableOpacity>
      
        </View>
                
            </View>
        );
      };
  
  
    return (
      <View style={{ flex: 1}}>

<View style={{justifyContent:'center',alignItems:'center',padding:20}}>

<DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        onChangeValue={(value) => {
                          // alert(value);
                          getTvShows(value)
                        }}
                        containerStyle={{ width: 200 }}
                    />
                    </View>
         <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={renderItem}
        />
      </View>
    );
  }

  export default TvShowPage;