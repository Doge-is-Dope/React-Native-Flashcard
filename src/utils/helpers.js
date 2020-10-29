import AsyncStorage from "@react-native-community/async-storage";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

const NOTIFICATION_KEY = "Flashcards:notifications";

export const clearLocalNotification = async () => {
  await AsyncStorage.removeItem(NOTIFICATION_KEY);
  Notifications.cancelAllScheduledNotificationsAsync();
};

export const setLocalNotification = async () => {
  const item = await AsyncStorage.getItem(NOTIFICATION_KEY);
  const data = JSON.parse(item);

  if (data === null) {
    const permissionsNotifications = await Permissions.askAsync(
      Permissions.NOTIFICATIONS
    );
    if (permissionsNotifications.status === "granted") {
      Notifications.cancelAllScheduledNotificationsAsync();

      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate());
      tomorrow.setHours(0);
      tomorrow.setMinutes(15);

      // schedule notification everyday at 8:00 am
      Notifications.scheduleNotificationAsync({
        content: {
          title: "Time to study",
          body: "👋 don't forget to study today!",
        },
        trigger: {
          hour: 8,
          minute: 0,
          // seconds: 60,
          repeats: true,
        },
      });

      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
    } else {
      console.log("status", permissionsNotifications.status);
    }
  }
};

export const dummyData = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

import { pallette } from "../theme";
// Return random color
export const getRandomColor = () => {
  const rgb = [255, 0, 0];
  rgb[0] = Math.round(Math.random() * 255);
  rgb[1] = Math.round(Math.random() * 255);
  rgb[2] = Math.round(Math.random() * 255);

  const brightness = Math.round(
    (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
      1000
  );
  const textColor = brightness > 125 ? pallette.regularText : "white";
  const backgroundColor = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
  return { textColor, backgroundColor };
};
