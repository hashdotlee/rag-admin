import * as React from "react";

import { NAV_CONFIGS } from "@/app/config/nav";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SearchForm } from "./SearchForm";
import SidebarButton from "./SidebarButton";
import { SidebarSwitcher } from "./SidebarSwitcher";

const data = {
  options: ["Teams Bot"],
  navMain: NAV_CONFIGS,
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarSwitcher
          options={data.options}
          defaultOption={data.options[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items?.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarButton href={item.url} title={item.title} />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
