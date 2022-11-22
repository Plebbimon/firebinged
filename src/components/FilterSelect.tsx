import { useState } from "react";
import { Group, Select, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";

interface FilterSelectProps {
  onChange: (e: any) => void;
}

export function FilterSelect({ onChange }: FilterSelectProps) {
  const filters = [
    { label: "Area", value: "area" },
    { label: "Month", value: "month" },
    { label: "Day", value: "day" },
    { label: "Temp", value: "temp" },
    { label: "Rain", value: "rain" },
    { label: "Wind", value: "wind" },
    { label: "Relative Humidity", value: "RH" },
  ];
  const [selectedFilter, setSelectedFilter] = useState<string | null>("area");

  function handleChange(e: string | null) {
    setSelectedFilter(e);
    onChange(e);
  }

  return (
    <Group>
      <Text transform="uppercase" color={"gray"} weight="bold">
        Order data by:
      </Text>
      <Select
        data={filters}
        value={selectedFilter}
        onChange={handleChange}
        rightSection={<IconChevronDown size={14} />}
        rightSectionWidth={30}
      />
    </Group>
  );
}
