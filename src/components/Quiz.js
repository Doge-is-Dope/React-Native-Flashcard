import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import theme, { color, dimen, pallette, typography } from "../theme";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import Card from "./Card";
import QuizResult from "./QuizResult";

const Quiz = (props) => {
  const [score, setScore] = useState(0);
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const { deck, navigation } = props;

  const handleResponseSelect = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionNo(currentQuestionNo + 1);
    setShowAnswer(false);
  };

  const handleFlipCard = () => {
    setShowAnswer(!showAnswer);
  };

  const handleRestart = () => {
    setCurrentQuestionNo(0);
    setScore(0);
  };

  const handleOnBackToDeck = () => {
    navigation.navigate("Deck");
  };

  const handleNotification = async () => {
    // user has completed at least one quiz for today
    await clearLocalNotification();
    setLocalNotification();
  };

  if (currentQuestionNo === deck.questions.length) {
    handleNotification();

    return (
      <QuizResult
        total={deck.questions.length}
        score={score}
        handleOnBackToDeck={handleOnBackToDeck}
        handleRestart={handleRestart}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionNo}>
        {currentQuestionNo + 1} / {deck.questions.length}
      </Text>

      <View style={styles.cardContainer}>
        <Card
          card={deck.questions[currentQuestionNo]}
          handleFlipCard={handleFlipCard}
          showAnswer={showAnswer}
        />
      </View>

      <View style={styles.answerBtnContainer}>
        <RoundButton correct handleOnPress={() => handleResponseSelect(true)} />
        <RoundButton handleOnPress={() => handleResponseSelect(false)} />
      </View>
    </View>
  );
};

const RoundButton = ({ correct, handleOnPress }) => {
  if (correct) {
    return (
      <TouchableOpacity
        style={{ ...styles.answerBtn, backgroundColor: pallette.correct }}
        onPress={handleOnPress}
      >
        <AntDesign name="like2" size={24} color="black" />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={{ ...styles.answerBtn, backgroundColor: pallette.incorrect }}
        onPress={handleOnPress}
      >
        <AntDesign name="dislike2" size={24} color="black" />
      </TouchableOpacity>
    );
  }
};

const mapStateToProps = (decks, ownProps) => {
  const { deckId } = ownProps.route.params;
  const deck = decks[deckId];
  return { deck };
};

export default connect(mapStateToProps)(Quiz);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },

  questionNo: {
    ...typography.regular,
    marginTop: dimen.appMargin,
    marginHorizontal: dimen.appMargin,
    alignSelf: "flex-start",
  },
  cardContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: dimen.appMargin,
    marginBottom: 40,
  },
  answerBtnContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginHorizontal: 32,
  },
  answerBtn: {
    padding: 16,
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});
