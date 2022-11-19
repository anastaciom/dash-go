import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import HeaderCustom from "../components/HeaderCustom";
import SidebarCustom from "../components/SidebarCustom";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },

  xaxis: {
    type: "datetime",
    axiosBorder: {
      color: theme.colors.gray[600],
    },
    axiosTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-03-13T00:00:00.000Z",
      "2022-03-18T00:00:00.000Z",
      "2022-03-25T00:00:00.000Z",
      "2022-04-22T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series = [
  {
    name: "series1",
    data: [31, 222, 312, 21],
  },
];

export default function Dashboard() {
  return (
    <Flex as="main" direction="column" h="100vh" w="100vw">
      <HeaderCustom />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SidebarCustom />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={["4", "8"]} pb="4" bgColor="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>

          <Box p={["4", "8"]} pb="4" bgColor="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
