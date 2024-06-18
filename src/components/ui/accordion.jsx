import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { PlusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border border-gray-400 rounded-xl px-[6vw] tablet:px-[4vw]", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 text-white items-start justify-between h-[30vw] tablet:h-[25vw] duration-500 ease-out [&[data-state=open]]:h-[20vw] tablet:[&[data-state=open]]:h-[15vw] text-[5vw] tablet:text-[3.5vw] [&[data-state=open]]:text-[6vw] tablet:[&[data-state=open]]:text-[4vw] py-[6vw] tablet:py-[4vw] aeonik transition-all [&[data-state=open]>svg]:rotate-45 [&[data-state=open]>svg]:scale-[120%]",
        className
      )}
      {...props}>
      {children}
      <PlusIcon className="h-6 w-6 tablet:h-10 tablet:w-10 shrink-0 text-white transition-transform duration-500 ease-out"/>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-[4vw] tablet:text-[3vw] transition-all text-white data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-[6vw] pt-0 space-y-[3vw]", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
