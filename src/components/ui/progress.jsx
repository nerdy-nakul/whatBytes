"use client";

import React, { useState, useEffect } from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef(
  ({ className, value, color, bgColor, ...props }, ref) => {
    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          `relative h-3 w-full overflow-hidden rounded-full ${bgColor}`,
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={`h-full w-full flex-1 transition-all ${color}`}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    );
  }
);

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
