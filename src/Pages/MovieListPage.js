import React, { useEffect, useState } from 'react';
import { Button, View, Text,Image } from 'react-native';


function MovieDetailPage({route,navigation }) {

    const { movie } = route.params; 

  
    return (
      <View style={{ flex: 1, alignItems: 'center', padding:20 }}>

        <Text style={{fontSize:22,fontWeight:'bold',marginBottom:20}}>{movie.title}</Text>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
          style={{ width: 250, height: 250 ,marginRight:10}}
        />

        <Text style={{padding:15,fontSize:16}}>{movie.overview}</Text>

        <Text style={{fontSize:15}}>Popularity: {movie.popularity} | Release date: {movie.release_date}</Text>

      
      </View>
    );
  }

  export default MovieDetailPage;