
import React, { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/buttons/Button";

export type MenuItemType = {
  id: string;
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};

export type MenuSectionType = {
  id: string;
  title?: string;
  items: MenuItemType[];
};

interface MenuDropdownProps {
  sections: MenuSectionType[];
  triggerButton?: React.ReactNode;
  align?: "start" | "center" | "end";
  className?: string;
}

export const MenuDropdown = ({
  sections,
  triggerButton,
  align = "end",
  className,
}: MenuDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultTrigger = (
    <Button variant="default" size="icon" isDropdown>
      <MoreHorizontal className="h-4 w-4" />
    </Button>
  );

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        {triggerButton || defaultTrigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className={cn("min-w-[220px] bg-white p-1", className)}
      >
        {sections.map((section, sectionIndex) => (
          <React.Fragment key={section.id}>
            {section.title && (
              <div className="px-2 py-1.5 text-sm font-semibold">
                {section.title}
              </div>
            )}
            {section.items.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => {
                  if (item.onClick) {
                    item.onClick();
                    setIsOpen(false);
                  }
                }}
                className="flex items-center gap-2 py-2 px-2 text-sm cursor-pointer"
              >
                {item.icon}
                <span>{item.label}</span>
              </DropdownMenuItem>
            ))}
            {sectionIndex < sections.length - 1 && <DropdownMenuSeparator />}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
