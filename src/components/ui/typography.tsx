import * as React from "react";

import { cn } from "@/lib/utils";

function Title({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "font-semibold text-2xl md:text-3xl lg:text-4xl mb-4",
        className
      )}
      {...props}
    />
  );
}

function SubTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "font-semibold text-lg md:text-xl lg:text-2xl mb-4",
        className
      )}
      {...props}
    />
  );
}

function Description({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-lg leading-relaxed md:text-lg lg:text-xl max-w-4xl text-gray-300 mb-4",
        className
      )}
      {...props}
    />
  );
}

function Body({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-base leading-relaxed md:text-md lg:text-lg max-w-4xl text-gray-300 mb-4",
        className
      )}
      {...props}
    />
  );
}

export { Title, SubTitle, Description, Body };
