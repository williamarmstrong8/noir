import * as React from "react";
import { cn } from "cn";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex h-5 w-fit shrink-0 items-center rounded-lg border px-2 text-xs font-medium whitespace-nowrap",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
