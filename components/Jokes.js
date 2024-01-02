import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

const Jokes = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getJokesApi();
        // console.log(res);
    }, [search])

    const getJokesApi = async () => {
        try {
            let response = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
            let json = await response.json();
            setData(json);
            // return json;
        } catch (error) {
            console.log(error);
        }
    }

    console.log("Jokes are:", data);

    const changeJokes = () => {
        console.log("Clicked");
        getJokesApi();
    }

    return (
        <View>
            <TextInput
                style={{
                    borderWidth: 1,
                    margin: 3,
                    height: 40,
                    width: 200,
                }}
                onChangeText={(text) => setSearch(text)}
                value={search} />
            {data.map((item) => <View style={{
                padding: 5,
                alignItems: "center"
            }}>
                <Text style={{
                    fontWeight: "bold",
                }} >{item.setup}</Text>
                <Text style={{
                    fontStyle: "italic"
                }} >{item.punchline}</Text>
            </View>)}
            <Pressable onPress={changeJokes}>
                <View style={{
                    backgroundColor: "green",
                    borderRadius: 5,
                    padding: 10,
                    alignItems: "center"

                }}>
                    <Text>Change Jokes</Text>
                </View>

            </Pressable>

        </View>
    )
}

export default Jokes

const styles = StyleSheet.create({

});