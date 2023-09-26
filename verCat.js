import React, { useState } from "react";
import { View, Image, TextInput, Button } from "react-native";
import getCat from './getCat';

export function VerCat() {
    const [cat, setCat] = useState()
    const [breed, setBreed] = useState("")

    const getCatByBreed = async () => {
        try {
            const catData = await getCat(breed)

            if (catData && catData.url) {
                setCat(catData)
            } else {
                console.error("Gato não encontrado para a raça:", breed)
            }
        } catch (error) {
            console.error("Erro ao carregar gato:", error)
        }
    };

    return (
        <View>
            {cat && (
                <Image
                    source={{ uri: cat.url  }}
                    style={{ width: 200, height: 200, margin: 10 }}
                />
            )}
            <TextInput
                style={{ borderColor: "black", borderWidth: 1, width: 200, height: 35, margin: 10, padding: 10 }}
                placeholder="Digite a raça do gato"
                onChangeText={(text) => setBreed(text)}
                value={breed}
            />
            <Button title="Gerar" onPress={getCatByBreed} />
        </View>
    );
}
