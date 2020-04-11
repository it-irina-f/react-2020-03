import React from "react";
import { render } from "react-dom";

import { ClickCounter } from "./ClickCounter";
import { HelloUser } from "./HelloUser";

render(<ClickCounter start={1} />, document.getElementById("root"));
