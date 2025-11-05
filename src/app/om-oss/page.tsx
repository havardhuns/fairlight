import { client } from "@/sanity/lib/client";
import { aboutInfoQuery, allEmployeesQuery } from "@/sanity/lib/queries";
import {
  AboutInfoQueryResult,
  AllEmployeesQueryResult,
} from "../../../sanity.types";
import EmployeeCard from "@/components/EmployeeCard";

const OmOss = async () => {
  const aboutInfo = await client.fetch<AboutInfoQueryResult>(aboutInfoQuery);
  const employees = await client.fetch<AllEmployeesQueryResult>(
    allEmployeesQuery
  );

  if (!aboutInfo) {
    return null;
  }

  return (
    <div className="my-8">
      <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-4">
        {aboutInfo.title}
      </h1>
      <p className="text-lg leading-relaxed md:text-lg lg:text-xl max-w-4xl text-secondary-foreground">
        {aboutInfo.description}
      </p>
      <div className="flex">
        {employees.map((employee) => (
          <EmployeeCard key={employee._id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default OmOss;
