import { createStyles, Loader } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    color: theme.colors.gray[1],
  },
}));

function FullContentLoader() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Loader color={"orange"} size="xl" />
    </div>
  );
}

export default FullContentLoader;
