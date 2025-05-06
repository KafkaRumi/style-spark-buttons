
import React from "react";
import { MenuDropdown } from "@/components/ui/menu-dropdown";
import { Button } from "@/components/buttons/Button";
import { Plus } from "lucide-react";

const MenuDropdownExample = () => {
  const menuSections = [
    {
      id: "section1",
      title: "Menu header",
      items: [
        { id: "item1", label: "menu row", icon: <Plus className="h-4 w-4" /> },
        { id: "item2", label: "menu row", icon: <Plus className="h-4 w-4" /> },
        { id: "item3", label: "menu row", icon: <Plus className="h-4 w-4" /> },
      ],
    },
    {
      id: "section2",
      title: "Menu header",
      items: [
        { id: "item4", label: "menu row", icon: <Plus className="h-4 w-4" /> },
        { id: "item5", label: "menu row", icon: <Plus className="h-4 w-4" /> },
        { id: "item6", label: "menu row", icon: <Plus className="h-4 w-4" /> },
        { id: "item7", label: "menu row", icon: <Plus className="h-4 w-4" /> },
        { id: "item8", label: "menu row", icon: <Plus className="h-4 w-4" /> },
      ],
    },
  ];

  const customTrigger = (
    <Button variant="primary" isDropdown>
      Open Menu
    </Button>
  );

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <h1 className="text-2xl font-bold">Menu Dropdown Examples</h1>
      
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-lg font-semibold">Default Trigger</h2>
        <MenuDropdown sections={menuSections} />
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-lg font-semibold">Custom Button Trigger</h2>
        <MenuDropdown 
          sections={menuSections} 
          triggerButton={customTrigger} 
        />
      </div>
    </div>
  );
};

export default MenuDropdownExample;
