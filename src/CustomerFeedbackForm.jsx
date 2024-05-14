import MuiForms from "mui-forms";

import healthSchema from "./health.json"
import fourwheelerSchema from "./fourwheeler.json"

export default function () {
  return (
    <div>
      <MuiForms
        config={{
          variant: "outlined",
          size: "small",
          gapY: 2,
          tabs: {
            disabled: ["requirements", "previous_policy"]
          }
        }}
        schema={fourwheelerSchema}
        onSubmit={(data) => {
          console.log(data);
        }}
        onError={console.log}
        onNext={console.log}
      />
    </div>
  );
}
