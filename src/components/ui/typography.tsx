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

export { Title };
