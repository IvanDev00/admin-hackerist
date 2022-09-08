import Layout from "@/components/layout/Layout";
import {
  createStyles,
  Group,
  Paper,
  Text,
  ThemeIcon,
  SimpleGrid,
} from "@mantine/core";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl * 1.5,
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface StatsGridIconsProps {
  data: { title: string; value: string }[];
}

export function StatsGridIcons({ data }: StatsGridIconsProps) {
  const { classes } = useStyles();
  const stats = data.map((stat) => {
    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group position="apart">
          <div>
            <Text
              color="dimmed"
              transform="uppercase"
              weight={700}
              size="xs"
              className={classes.label}
            >
              {stat.title}
            </Text>
            <Text weight={700} size="xl">
              {stat.value}
            </Text>
          </div>
          <ThemeIcon
            color="gray"
            variant="light"
            sx={(theme) => ({
              color: theme.colors.teal[6],
            })}
            size={38}
            radius="md"
          >
            <IconArrowUpRight size={28} stroke={1.5} />
          </ThemeIcon>
        </Group>
      </Paper>
    );
  });

  return (
    <div className={classes.root}>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {stats}
      </SimpleGrid>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <div>
        <StatsGridIcons
          data={[
            { title: "sample", value: "value" },
            { title: "sample", value: "value" },
            { title: "sample", value: "value" },
          ]}
        />
      </div>
    </Layout>
  );
}
