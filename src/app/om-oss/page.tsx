import { client } from "@/sanity/lib/client";
import { aboutInfoQuery, allEmployeesQuery } from "@/sanity/lib/queries";
import {
  AboutInfoQueryResult,
  AllEmployeesQueryResult,
} from "../../../sanity.types";
import EmployeeCard from "@/components/EmployeeCard";
import { Description, Title } from "@/components/ui/typography";

export const metadata = {
  title: "Om oss | Fairlight",
};

const OmOss = async () => {
  const aboutInfo = await client.fetch<AboutInfoQueryResult>(aboutInfoQuery);
  const employees = await client.fetch<AllEmployeesQueryResult>(
    allEmployeesQuery
  );

  if (!aboutInfo) {
    return null;
  }

  return (
    <div>
      <Title>{aboutInfo.title}</Title>
      <Description>{aboutInfo.description}</Description>
      <div className="flex flex-col md:flex-row md:mt-16">
        {employees.map((employee) => (
          <EmployeeCard key={employee._id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default OmOss;
