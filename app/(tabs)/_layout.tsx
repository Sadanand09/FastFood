import { Redirect, Slot } from "expo-router";

export default function _Layout() {
    const isAhthenticated = false;
    if (!isAhthenticated) return <Redirect href="/sign-in"/>
  return <Slot />;
}
