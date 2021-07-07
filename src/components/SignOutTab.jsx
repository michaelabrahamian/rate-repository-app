import React from "react";

import useSignOut from "../hooks/useSignOut";
import AppBarTab from "./AppBarTab";

const SignOutTab = () => {
  const signOut = useSignOut();
  const handleSignOut = async () => {
    await signOut();
  };

  return <AppBarTab title="Sign out" onPress={handleSignOut} />;
};

export default SignOutTab;
