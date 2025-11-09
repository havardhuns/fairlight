import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AllEmployeesQueryResult } from "../../sanity.types";
import { imageUrlFor } from "@/utils/image";
import { Button } from "./ui/button";

export interface EmployeeCardProps {
  employee: AllEmployeesQueryResult[number];
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  return (
    <Card className="my-2 md:m-6">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={imageUrlFor(employee.photo).url()} alt="Image" />
          <AvatarFallback>{employee.name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{employee.name}</CardTitle>
          <CardDescription className="text-lg">
            {employee.title}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-secondary-foreground text-xl">
          {employee.description}
        </p>
        <Button variant="link" asChild className="mt-4 p-0">
          <a href={`mailto:${employee.email}`}>{employee.email}</a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
