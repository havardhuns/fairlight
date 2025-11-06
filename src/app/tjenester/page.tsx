import { client } from "@/sanity/lib/client";
import {
  aboutInfoQuery,
  allEmployeesQuery,
  allServicesQuery,
  servicesOverviewQuery,
} from "@/sanity/lib/queries";
import {
  AboutInfoQueryResult,
  AllEmployeesQueryResult,
  AllServicesQueryResult,
  ServicesOverviewQueryResult,
} from "../../../sanity.types";
import EmployeeCard from "@/components/EmployeeCard";
import { Description, Title } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Tjenester = async () => {
  const servicesOverview = await client.fetch<ServicesOverviewQueryResult>(
    servicesOverviewQuery
  );
  const services = await client.fetch<AllServicesQueryResult>(allServicesQuery);

  if (!servicesOverview) {
    return null;
  }

  return (
    <div>
      <Title>{servicesOverview.title}</Title>
      <Description>{servicesOverview.description}</Description>
      <div className="flex flex-col md:flex-row md:mt-8 flex-wrap">
        {services.map((service, i) => (
          <div key={i} className="w-full md:w-1/2">
            <Card className="my-2 md:m-6">
              <CardHeader className="flex flex-row items-center gap-4">
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-xl">{service.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tjenester;
