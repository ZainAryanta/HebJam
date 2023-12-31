import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "../../components";
import { fontType, colors } from "../../theme";
const Search = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />
      </View>
    </View>
  );
};
export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkgreen(),
  },
  header: {
    paddingHorizontal: 24,
    alignItems: "center",
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: "absolute",
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.gold(),
    backgroundColor: colors.darkgreen(0.9),
  },
});