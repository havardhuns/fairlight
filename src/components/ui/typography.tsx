import * as React from "react";

import { cn } from "@/lib/utils";

function Title({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "font-display font-normal text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight tracking-tight",
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
        "font-display font-normal text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight tracking-tight",
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
        "text-base md:text-lg lg:text-xl max-w-4xl text-muted-foreground mb-4 leading-relaxed",
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
        "text-sm md:text-base lg:text-lg max-w-4xl text-muted-foreground mb-4 leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Title, SubTitle, Description, Body };
