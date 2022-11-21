import {useForm} from "@mantine/form";
import {Button, Container, Group, Modal, NumberInput, SimpleGrid, TextInput} from "@mantine/core";
import {useState} from "react";


interface CreateForestFireFormProps {

}
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
                title="Introduce yourself!"
                size={"xl"}
            >
                <form onSubmit={form.onSubmit((values) => {
                    console.log(values);
                })}>
                    <SimpleGrid cols={4}>
                        <NumberInput label={"DC"} {...form.getInputProps("DC")}/>
                        <NumberInput label={"DMC"} {...form.getInputProps("DMC")}/>
                        <NumberInput label={"FFMC"} {...form.getInputProps("FFMC")}/>
                        <NumberInput label={"ISI"} {...form.getInputProps("ISI")}/>

                        <NumberInput label={"RH"} {...form.getInputProps("RH")}/>
                        <NumberInput label={"X"} {...form.getInputProps("X")}/>
                        <NumberInput label={"Y"} {...form.getInputProps("Y")}/>
                        <NumberInput label={"area"} {...form.getInputProps("area")}/>
                    </SimpleGrid>
                    <Group>
                        <TextInput label={"day"} {...form.getInputProps("day")}/>
                        <TextInput label={"month"} {...form.getInputProps("month")}/>
                        <NumberInput label={"rain"} {...form.getInputProps("rain")}/>
                        <NumberInput label={"temp"} {...form.getInputProps("temp")}/>
                        <NumberInput label={"wind"} {...form.getInputProps("wind")}/>
                    </Group>
                    <Button type={"submit"} onClick={() => setOpened(false)}>Register Incident</Button>
                </form>
            </Modal>
            <Group position={"right"} my={"md"}>
            <Button variant={"gradient"} radius={"lg"} gradient={{ from: 'orange', to: 'yellow' }} onClick={() => setOpened(true)}>Firestarter</Button>
            </Group>
        </>
    )


}
export default CreateIncidentForm;