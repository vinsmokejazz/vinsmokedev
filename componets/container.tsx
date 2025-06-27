import React from 'react'
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string;
}) => {
  return (
    <div className={cn("max-w-4xl w-full mx-auto bg-white dark:bg-black p-4 md:p-10", className)}>
      {children}
    </div>
  )
}

export default Container
