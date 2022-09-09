import { useState } from "react";
import { createStyles, Navbar, Group, Box, Title } from "@mantine/core";
import {
  IconLogout,
  IconDashboard,
  IconFiles,
  IconFileReport,
  IconNotes,
} from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

const data = [
  { link: "/", label: "Dashboard", icon: IconDashboard },
  { link: "/request", label: "Request", icon: IconFiles },
  { link: "/report", label: "Report", icon: IconFileReport },
  { link: "/application-dti", label: "DTI Applications", icon: IconNotes },
];

export default function Layout({ children }) {
  const { classes, cx } = useStyles();
  const router = useRouter();

  const links = data.map((item) => (
    <Link href={item.link} key={item.label} passHref>
      {router.pathname === item.link ? (
        <a
          className={cx(classes.link, {
            [classes.linkActive]: true,
          })}
        >
          <item.icon className={classes.linkIcon} stroke={1.5} />
          <span>{item.label}</span>
        </a>
      ) : (
        <a className={cx(classes.link)}>
          <item.icon className={classes.linkIcon} stroke={1.5} />
          <span>{item.label}</span>
        </a>
      )}
    </Link>
  ));

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar height={"100vh"} width={{ sm: 300 }} p="md">
        <Navbar.Section grow>
          <Group className={classes.header} position="apart">
            <Title>BizCheck</Title>
          </Group>
          {links}
        </Navbar.Section>

        <Navbar.Section className={classes.footer}>
          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Logout</span>
          </a>
        </Navbar.Section>
      </Navbar>
      <Box sx={{ flexGrow: 1, padding: 20 }}>{children}</Box>
    </Box>
  );
}
