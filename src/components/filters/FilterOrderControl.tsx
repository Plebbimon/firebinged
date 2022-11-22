import { useState } from "react";
import { SegmentedControl } from "@mantine/core";

interface FilterOrderControlProps {
  onChange: (e: any) => void;
}

export function FilterOrderControl({ onChange }: FilterOrderControlProps) {
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  function handleChange(e: "asc" | "desc") {
    setOrder(e);
    onChange(e);
    console.log(e);
  }

  return (
    <SegmentedControl
      size={"xs"}
      data={[
        { label: "Ascending", value: "asc" },
        { label: "Descending", value: "desc" },
      ]}
      value={order}
      onChange={handleChange}
    />
  );
}
