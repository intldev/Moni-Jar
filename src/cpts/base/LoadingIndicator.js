import React from "react";
import { ActivityIndicator } from "react-native";

export default function LoadingIndicator(props) {
  const { isLoading, activityProps } = props;
  if (isLoading) return <ActivityIndicator {...activityProps} />;

  return null;
}
