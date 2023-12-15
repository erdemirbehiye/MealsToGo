import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-85205.cloudfunctions.net";
const localHost = "http://127.0.0.1:5001/mealstogo-85205/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
