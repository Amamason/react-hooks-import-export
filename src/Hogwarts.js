import React from "react";
import whoseHouse from "./houses/HagridsHouse";
import HooflePoof from "./houses/Hufflepuff";
import * as GryffFunctions from "./houses/Gryffindor";
import Hufflepuff from "./houses/Hufflepuff";
import HagridsHouse from "./houses/HagridsHouse";

GryffFunctions.colors();
// => 'Scarlet and Gold'

GryffFunctions.gryffMascot();
// => 'The Lion'

GryffFunctions.values();
// => ReferenceError: values is not defined

export default function Hogwarts() {
  whoseHouse();

  return (
    <div>
      <Hufflepuff />
      <HagridsHouse />

      {/*
				Will render `NOBODY CARES ABOUT US`, even though we renamed `Hufflepuff`
				to `HooflePoof`
			*/}
    </div>
  );
}
