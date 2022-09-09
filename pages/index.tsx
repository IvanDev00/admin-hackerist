import Layout from "@/components/layout/Layout";
import {
  createStyles,
  Group,
  Paper,
  Text,
  ThemeIcon,
  SimpleGrid,
  Table,
  Stack,
} from "@mantine/core";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons";
import FirebaseCrud from "lib/firebase/crud";
import CollectionNames from "lib/firebase/colNames";
import byLocationData from "Data/byLocationData.json";
import industriesData from "Data/industriesData.json";
const BusinessOwner = FirebaseCrud(CollectionNames.BUSINESS_OWNER);
const Application = FirebaseCrud(CollectionNames.APPLICATION);

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

async function read(id: any) {
  try {
    const data = await BusinessOwner.read(id);
    console.log(data);
    alert(JSON.stringify(data));
  } catch (error) {
    alert(error);
  }
}
async function listCityAndNumberOfBusiness() {
  try {
    const data = await BusinessOwner.readAll();

    let listCity = {};

    for (let i in data) {
      if (!(data[i].city in listCity)) {
        listCity[data[i].city] = 1;
      } else {
        listCity[data[i].city] = listCity[data[i].city] + 1;
      }
    }
    return listCity;
    console.log(data);
    alert(JSON.stringify(data));
  } catch (error) {
    alert(error);
  }
}

async function totalNumberBusiness() {
  try {
    const data = await BusinessOwner.readAll();
    return data.length;
    console.log(data);
    alert(JSON.stringify(data));
  } catch (error) {
    alert(error);
  }
}

async function verifiedNumber() {
  try {
    const data = await BusinessOwner.readAll();

    let verifiedData = {
      bir: {
        numberVerified: 0,
        numberUnverified: 0,
      },
      dti: {
        numberVerified: 0,
        numberUnverified: 0,
      },
      mayor: {
        numberVerified: 0,
        numberUnverified: 0,
      },
    };

    for (let i in data) {
      if (data[i].bir_valid) {
        verifiedData.bir.numberVerified = verifiedData.bir.numberVerified + 1;
      } else {
        verifiedData.bir.numberUnverified =
          verifiedData.bir.numberUnverified + 1;
      }

      if (data[i].dti_valid) {
        verifiedData.dti.numberVerified = verifiedData.dti.numberVerified + 1;
      } else {
        verifiedData.dti.numberUnverified =
          verifiedData.dti.numberUnverified + 1;
      }

      if (data[i].mayor_valid) {
        verifiedData.mayor.numberVerified =
          verifiedData.mayor.numberVerified + 1;
      } else {
        verifiedData.mayor.numberUnverified =
          verifiedData.mayor.numberUnverified + 1;
      }
    }
    return verifiedData;
    console.log(data);
    alert(JSON.stringify(verifiedData));
  } catch (error) {
    alert(error);
  }
}

async function listIndustriesAndNumberOfBusiness() {
  try {
    const data = await BusinessOwner.readAll();

    let listIndustry = {};

    for (let i in data) {
      if (!(data[i].typeOfBusiness in listIndustry)) {
        listIndustry[data[i].typeOfBusiness] = 1;
      } else {
        listIndustry[data[i].typeOfBusiness] =
          listIndustry[data[i].typeOfBusiness] + 1;
      }
    }
    return listIndustry;
    console.log(data);
    alert(JSON.stringify(data));
  } catch (error) {
    alert(error);
  }
}

async function listApplicationAndNumber() {
  try {
    const data = await Application.readAll();

    let listApplication = {};

    for (let i in data) {
      if (!(data[i].applicationTo in listApplication)) {
        listApplication[data[i].applicationTo] = 1;
      } else {
        listApplication[data[i].applicationTo] =
          listApplication[data[i].applicationTo] + 1;
      }
    }
    return listApplication;
    console.log(data);
    alert(JSON.stringify(data));
  } catch (error) {
    alert(error);
  }
}

async function listMarketPlaceAndNumber() {
  try {
    const data = await BusinessOwner.readAll();

    let listApplication = {
      lazada: 0,
      shoppee: 0,
      facebook: 0,
      website: 0,
    };

    for (let i in data) {
      if (data[i].facebookPage !== "") {
        listApplication.facebook = listApplication.facebook + 1;
      }
      if (data[i].shoppeePage !== "") {
        listApplication.shoppee = listApplication.shoppee + 1;
      }
      if (data[i].lazadaPage !== "") {
        listApplication.lazada = listApplication.lazada + 1;
      }
      if (data[i].website !== "") {
        listApplication.website = listApplication.facebook + 1;
      }
    }
    return listApplication;
    console.log(data);
    alert(JSON.stringify(data));
  } catch (error) {
    alert(error);
  }
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
  const location = byLocationData.map((element) => (
    <tr key={element.id}>
      <td>{element.locationByCity}</td>
      <td>{element.numberOfBusiness}</td>
    </tr>
  ));

  const industry = industriesData.map((element) => (
    <tr key={element.id}>
      <td>{element.industries}</td>
      <td>{element.numberOfBusiness}</td>
    </tr>
  ));

  return (
    <Layout>
      <h1>Dashboard</h1>
      <Stack spacing={60}>
        <StatsGridIcons
          data={[
            { title: "DTI Appoved", value: "20" },
            { title: "DTI Non Verified", value: "10" },
            { title: "BIR Approved", value: "30" },
            { title: "BIR Non Verified", value: "30" },
            { title: "Mayor's Permit Approved", value: "30" },
            { title: "Mayor's Permit Non Verified", value: "30" },
            { title: "Pending Application", value: "30" },
            { title: "Approved Application", value: "30" },
            { title: "Rejected Application", value: "30" },
          ]}
        />
        <Table highlightOnHover sx={{ overflowX: "auto" }}>
          <thead>
            <tr>
              <th>Location of Business by City</th>
              <th>Number of Businesses</th>
            </tr>
          </thead>
          <tbody>{location}</tbody>
        </Table>
        <Table highlightOnHover sx={{ overflowX: "auto" }}>
          <thead>
            <tr>
              <th>Business Industries</th>
              <th>Number of Businesses</th>
            </tr>
          </thead>
          <tbody>{industry}</tbody>
        </Table>
      </Stack>
    </Layout>
  );
}
