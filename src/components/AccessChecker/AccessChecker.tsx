import React, { ReactNode, FC } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { ToDoState } from "@/AppStore";
import { CheckState } from "@/components/Auth/reducer";

const mapStateToProps = ({ login }: ToDoState) => ({
  ...login,
});

export interface Props extends ReturnType<typeof mapStateToProps> {
  children: ReactNode;
  redirectPath?: string;
}

export const AccessCheckerComponent: FC<Props> = ({
  children,
  status,
  redirectPath = "/auth",
}) => {
  if (status === CheckState.initiated) {
    return <div>Загрузка данных...</div>;
  }

  if (status === CheckState.failed) {
    return <Redirect to={redirectPath} />;
  }

  return <>{children}</>;
};

export const AccessChecker = connect(mapStateToProps)(AccessCheckerComponent);
