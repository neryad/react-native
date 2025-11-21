import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const index = () => {
  const {
    formula,
    buildNumber,
    prevNumber,
    clean,
    toggleSing,
    deleteLast,
    divideOperation,
    addOperation,
    subtractOperation,
    multiplyOperation,
    calculateSubResult,
    calculateResult,
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variants="h1">{formula}</ThemeText>

        {formula === prevNumber ? (
          <ThemeText variants="h2"> </ThemeText>
        ) : (
          <ThemeText variants="h2">{prevNumber}</ThemeText>
        )}
      </View>
      {/** Botnotes */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={clean}
          blackText
          color={Colors.lightGray}
          label="C"
        />
        <CalculatorButton
          onPress={toggleSing}
          blackText
          color={Colors.lightGray}
          label="+/-"
        />
        <CalculatorButton
          onPress={deleteLast}
          blackText
          color={Colors.lightGray}
          label="del"
        />
        <CalculatorButton
          onPress={divideOperation}
          color={Colors.orange}
          label="/"
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("7")} label="7" />
        <CalculatorButton onPress={() => buildNumber("8")} label="8" />
        <CalculatorButton onPress={() => buildNumber("9")} label="9" />
        <CalculatorButton
          onPress={multiplyOperation}
          color={Colors.orange}
          label="X"
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("4")} label="4" />
        <CalculatorButton onPress={() => buildNumber("5")} label="5" />
        <CalculatorButton onPress={() => buildNumber("6")} label="6" />
        <CalculatorButton
          onPress={subtractOperation}
          color={Colors.orange}
          label="-"
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("1")} label="1" />
        <CalculatorButton onPress={() => buildNumber("2")} label="2" />
        <CalculatorButton onPress={() => buildNumber("3")} label="3" />
        <CalculatorButton
          onPress={addOperation}
          color={Colors.orange}
          label="+"
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber("0")}
          label="0"
          doubleSize
        />
        <CalculatorButton onPress={() => buildNumber(".")} label="." />
        {/* <CalculatorButton onPress={() => console.log("a")} label="=" /> */}
        <CalculatorButton
          onPress={calculateResult}
          color={Colors.orange}
          label="="
        />
      </View>
    </View>
  );
};

export default index;
