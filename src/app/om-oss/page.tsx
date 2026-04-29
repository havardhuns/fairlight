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
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-rose-400" />
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-400">
            Om oss
          </p>
        </div>
        <Title>{aboutInfo.title}</Title>
        <Description>{aboutInfo.description}</Description>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-12">
        {employees.map((employee) => (
          <EmployeeCard key={employee._id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default OmOss;
