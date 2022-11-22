import { useForm } from "@mantine/form";
import {
  Button,
  Container,
  Group,
  Modal,
  NumberInput,
  Select,
  SimpleGrid,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { months } from "../consts";

interface CreateForestFireFormProps {}
interface CreateForestFireFormValues {
  DC: number;
  DMC: number;
  FFMC: number;
  ISI: number;
  RH: number;
  X: number;
  Y: number;
  area: number;
  day: string;
  month: string;
  rain: number;
  temp: number;
  wind: number;
}

function CreateIncidentForm() {
  const [opened, setOpened] = useState(false);
  const form = useForm<CreateForestFireFormValues>({
    initialValues: {
      DC: 0,
      DMC: 0,
      FFMC: 0,
      ISI: 0,
      RH: 0,
      X: 0,
      Y: 0,
      area: 0,
      day: "",
      month: "",
      rain: 0,
      temp: 0,
      wind: 0,
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Title order={2}>Incident Report</Title>}
        size={"xl"}
      >
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values);
          })}
        >
          <Stack spacing={"lg"}>
            <SimpleGrid cols={4}>
              <NumberInput label={"DC"} {...form.getInputProps("DC")} />
              <NumberInput label={"DMC"} {...form.getInputProps("DMC")} />
              <NumberInput label={"FFMC"} {...form.getInputProps("FFMC")} />
              <NumberInput label={"ISI"} {...form.getInputProps("ISI")} />

              <NumberInput label={"RH"} {...form.getInputProps("RH")} />
              <NumberInput label={"X"} {...form.getInputProps("X")} />
              <NumberInput label={"Y"} {...form.getInputProps("Y")} />
              <NumberInput label={"area"} {...form.getInputProps("area")} />
              <NumberInput label={"rain"} {...form.getInputProps("rain")} />
              <NumberInput label={"temp"} {...form.getInputProps("temp")} />
              <NumberInput label={"wind"} {...form.getInputProps("wind")} />
            </SimpleGrid>
            <Group position={"center"}>
              <Select
                data={["mon", "tue", "wen", "thu", "fri", "sat", "sun"]}
                label={"day"}
                {...form.getInputProps("day")}
              />
              <Select
                data={months}
                label={"month"}
                {...form.getInputProps("month")}
              />
            </Group>
            <Button
              color={"orange"}
              type={"submit"}
              onClick={() => setOpened(false)}
            >
              Register Incident
            </Button>
          </Stack>
        </form>
      </Modal>
      <Group position={"right"} my={"md"}>
        <Button
          variant={"gradient"}
          radius={"lg"}
          gradient={{ from: "orange", to: "yellow" }}
          onClick={() => setOpened(true)}
        >
          Firestarter
        </Button>
      </Group>
    </>
  );
}
export default CreateIncidentForm;
