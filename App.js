import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 140,
          height: 140,
          borderWidth: 15,
          borderRadius: 100,
          marginTop: 69,
          left: 125,
        }}
      ></View>
      <View style={styles.view1}>
        <Text style={styles.text1}>GROW</Text>
        <Text style={styles.text1}>YOUR BUSINESS</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text2}>
          We will help you to grow your business using
        </Text>
        <Text style={styles.text2}>online server</Text>
      </View>
      <View style={styles.view3}>
        <View style={styles.view4}>
          <Text style={styles.text4}>
            LOGIN
          </Text>
        </View>
        <View style={styles.view4}>
        <Text style={styles.text4}>
            SIGN UP
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00CCF9",
  },
  view1: {
    flex: 1,
  },
  view2: {
    flex: 1,
  },
  view3: {
    flex: 1,
    height: 48,
    width: '100%',
    flexDirection: "row",
    justifyContent:"space-around"
  },
  text1: {
    position: "relative",
    top: 50,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    fontFamily: " Arial, Helvetica, sans-serif",
  },
  text2: {
    position: "relative",
    top: 25,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    fontFamily: " Arial, Helvetica, sans-serif",
  },
  
  view4:{
    backgroundColor: 'yellow',
    height: 48,
    width: 120,
    borderRadius: 10,
    backgroundColor: '#E3C000',
  },
  text4:{
    textAlign: "center",
    position: "relative",
    top: 6,
    fontWeight: "bold",
    fontSize: 25

  },
 
});
