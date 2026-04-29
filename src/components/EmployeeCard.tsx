import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { AllEmployeesQueryResult } from "../../sanity.types";
import { imageUrlFor } from "@/utils/image";

export interface EmployeeCardProps {
  employee: AllEmployeesQueryResult[number];
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  return (
    <Card className="flex-1">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src={imageUrlFor(employee.photo).url()} alt={employee.name ?? ""} />
          <AvatarFallback>{employee.name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{employee.name}</CardTitle>
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mt-1">
            {employee.title}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {employee.description}
        </p>
        <a
          href={`mailto:${employee.email}`}
          className="text-sm text-rose-400 hover:underline underline-offset-4 mt-3 block transition-colors"
        >
          {employee.email}
        </a>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
