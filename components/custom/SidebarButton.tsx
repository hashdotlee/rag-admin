"use client";

import { usePathname } from "next/navigation";
import { SidebarMenuButton } from "../ui/sidebar";

export default function SidebarButton({
  href,
  title,
  ...props
}: React.ComponentProps<typeof SidebarMenuButton> & {
  href: string;
  title: string;
}) {
  const path = usePathname();
  return (
    <SidebarMenuButton asChild isActive={path === href} {...props}>
      <a href={href}>{title}</a>
    </SidebarMenuButton>
  );
}
