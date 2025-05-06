
import React from "react";
import { Button } from "@/components/buttons/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  // Icon placeholder component for demonstration
  const IconPlaceholder = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold">Style Spark Button Library</h1>
        
        <Tabs defaultValue="variants" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="variants">Variants</TabsTrigger>
            <TabsTrigger value="states">States</TabsTrigger>
            <TabsTrigger value="sizes">Sizes</TabsTrigger>
            <TabsTrigger value="icons">With Icons</TabsTrigger>
            <TabsTrigger value="dropdown">Dropdown Buttons</TabsTrigger>
          </TabsList>
          
          {/* Button Variants Section */}
          <TabsContent value="variants">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>Different button styles for different purposes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-sm">Default</h3>
                    <Button>Button</Button>
                    <Button className="bg-opacity-80">Button</Button>
                    <Button className="bg-opacity-60">Button</Button>
                    <Button isDisabled>Button</Button>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-sm">Primary</h3>
                    <Button variant="primary">Button</Button>
                    <Button variant="primary" className="bg-opacity-80">Button</Button>
                    <Button variant="primary" className="bg-opacity-60">Button</Button>
                    <Button variant="primary" isDisabled>Button</Button>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-sm">Danger</h3>
                    <Button variant="danger">Button</Button>
                    <Button variant="danger" className="bg-opacity-80">Button</Button>
                    <Button variant="danger" className="bg-opacity-60">Button</Button>
                    <Button variant="danger" isDisabled>Button</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Button States Section */}
          <TabsContent value="states">
            <Card>
              <CardHeader>
                <CardTitle>Button States</CardTitle>
                <CardDescription>Different button states based on interaction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-sm">Default</h3>
                    <Button>Default</Button>
                    <Button className="ring-2 ring-blue-500">Focus</Button>
                    <Button className="hover:bg-gray-300">Hover</Button>
                    <Button className="active:bg-gray-400">Active</Button>
                    <Button isDisabled>Disabled</Button>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-sm">Primary</h3>
                    <Button variant="primary">Default</Button>
                    <Button variant="primary" className="ring-2 ring-blue-300">Focus</Button>
                    <Button variant="primary" className="hover:bg-blue-700">Hover</Button>
                    <Button variant="primary" className="active:bg-blue-800">Active</Button>
                    <Button variant="primary" isDisabled>Disabled</Button>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-sm">Ghost</h3>
                    <Button variant="ghost">Default</Button>
                    <Button variant="ghost" className="ring-2 ring-blue-500">Focus</Button>
                    <Button variant="ghost" className="hover:bg-gray-100">Hover</Button>
                    <Button variant="ghost" className="active:bg-gray-200">Active</Button>
                    <Button variant="ghost" isDisabled>Disabled</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Button Sizes Section */}
          <TabsContent value="sizes">
            <Card>
              <CardHeader>
                <CardTitle>Button Sizes</CardTitle>
                <CardDescription>Different button sizes for various contexts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex flex-wrap items-end gap-4">
                    <Button size="lg">Large</Button>
                    <Button>Default</Button>
                    <Button size="sm">Small</Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex flex-wrap items-end gap-4">
                    <Button variant="primary" size="lg">Large</Button>
                    <Button variant="primary">Default</Button>
                    <Button variant="primary" size="sm">Small</Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex flex-wrap items-end gap-4">
                    <Button variant="ghost" size="lg">Large</Button>
                    <Button variant="ghost">Default</Button>
                    <Button variant="ghost" size="sm">Small</Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex flex-wrap items-end gap-4">
                    <Button variant="danger" size="lg">Large</Button>
                    <Button variant="danger">Default</Button>
                    <Button variant="danger" size="sm">Small</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Button with Icons Section */}
          <TabsContent value="icons">
            <Card>
              <CardHeader>
                <CardTitle>Buttons With Icons</CardTitle>
                <CardDescription>Buttons enhanced with icons for better context</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <h3 className="font-medium">Left Icon</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button leftIcon={<IconPlaceholder />}>Default</Button>
                      <Button variant="primary" leftIcon={<IconPlaceholder />}>Primary</Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="ghost" leftIcon={<IconPlaceholder />}>Ghost</Button>
                      <Button variant="danger">Danger (No Icon)</Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button size="sm" leftIcon={<IconPlaceholder />}>Small</Button>
                      <Button size="lg" leftIcon={<IconPlaceholder />}>Large</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <h3 className="font-medium">Icon Only</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button size="icon" aria-label="Add item">
                        <IconPlaceholder />
                      </Button>
                      <Button variant="primary" size="icon" aria-label="Add item">
                        <IconPlaceholder />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="ghost" size="icon" aria-label="Add item">
                        <IconPlaceholder />
                      </Button>
                      <Button variant="danger" size="icon" aria-label="Add item">
                        Danger
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button size="iconSm" aria-label="Add item">
                        <IconPlaceholder />
                      </Button>
                      <Button variant="primary" size="iconSm" aria-label="Add item">
                        <IconPlaceholder />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Dropdown Buttons Section */}
          <TabsContent value="dropdown">
            <Card>
              <CardHeader>
                <CardTitle>Dropdown Buttons</CardTitle>
                <CardDescription>Buttons with dropdown indicators for menus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <h3 className="font-medium">Default Dropdown</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button isDropdown>Button</Button>
                      <Button variant="primary" isDropdown>Button</Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="ghost" isDropdown>Button</Button>
                      <Button variant="danger">Danger (No Dropdown)</Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button size="sm" isDropdown>Small</Button>
                      <Button size="lg" isDropdown>Large</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <h3 className="font-medium">Icon + Dropdown</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button leftIcon={<IconPlaceholder />} isDropdown>Button</Button>
                      <Button variant="primary" leftIcon={<IconPlaceholder />} isDropdown>Button</Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="ghost" leftIcon={<IconPlaceholder />} isDropdown>Button</Button>
                      <Button variant="danger">Danger (No Icon/Dropdown)</Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button size="sm" leftIcon={<IconPlaceholder />} isDropdown>Small</Button>
                      <Button size="lg" leftIcon={<IconPlaceholder />} isDropdown>Large</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* All In One Preview Section */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">All Button Styles</h2>
          <div className="grid grid-cols-1 gap-12 rounded-lg border bg-white p-6 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="font-medium">Default Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button isDisabled>Default</Button>
                <Button variant="primary" isDisabled>Primary</Button>
                <Button variant="danger" isDisabled>Danger</Button>
                <Button variant="ghost" isDisabled>Ghost</Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-medium">Icon Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button leftIcon={<IconPlaceholder />}>Default</Button>
                <Button variant="primary" leftIcon={<IconPlaceholder />}>Primary</Button>
                <Button variant="danger">Danger (No Icon)</Button>
                <Button size="icon">
                  <IconPlaceholder />
                </Button>
                <Button variant="primary" size="icon">
                  <IconPlaceholder />
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-medium">Dropdown Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button isDropdown>Default</Button>
                <Button variant="primary" isDropdown>Primary</Button>
                <Button variant="danger">Danger (No Dropdown)</Button>
                <Button leftIcon={<IconPlaceholder />} isDropdown>With Icon</Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-medium">Button Sizes</h3>
              <div className="flex items-end flex-wrap gap-3">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
