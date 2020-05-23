import React, { useState, useEffect } from "react";
import { isLoggedIn } from "@/api/auth";
import { Redirect } from "react-router-dom";

enum CheckState {
  initiated,
  succeed,
  failed,
}

export const authorizedOnlyHoc = <Props extends object>(
  Component: React.ComponentType<Props>,
  redirectPath = "/"
) => (props: Props) => {
  const [isAuthorized, setIsAuthorized] = useState(CheckState.initiated);

  useEffect(() => {
    (async () => {
      const isAuthorized = await isLoggedIn();
      setIsAuthorized(isAuthorized ? CheckState.succeed : CheckState.failed);
    })();
  }, []);

  if (isAuthorized === CheckState.initiated) {
    return <div>loader...</div>;
  }

  if (isAuthorized === CheckState.failed) {
    return <Redirect to={redirectPath} />;
  }

  return <Component {...props} />;
};
