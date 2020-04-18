import React from "react";
import { render } from "react-dom";

import { ClickCounter } from "./lesson3/ClickCounter";
import { HelloUser } from "./lesson3/HelloUser";

render(<ClickCounter start={1} />, document.getElementById("root"));
