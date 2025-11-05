import { client } from "@/sanity/lib/client";
import { aboutInfoQuery, allEmployeesQuery } from "@/sanity/lib/queries";
import {
  AboutInfoQueryResult,
  AllEmployeesQueryResult,
} from "../../../sanity.types";
import EmployeeCard from "@/components/EmployeeCard";
import { Title } from "@/components/ui/typography";

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
      <p className="text-lg leading-relaxed md:text-lg lg:text-xl max-w-4xl text-secondary-foreground mb-4">
        {aboutInfo.description}
      </p>
      <div className="flex flex-col md:flex-row md:mt-16">
        {employees.map((employee) => (
          <EmployeeCard key={employee._id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default OmOss;
