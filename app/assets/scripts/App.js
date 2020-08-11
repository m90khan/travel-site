import "../sass/main.scss";

import { test } from "./test/index";
console.log(test);
alert(2);
if (module.hot) {
  module.hot.accept();
}
