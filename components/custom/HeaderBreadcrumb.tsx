"use client";

import { NAV_CONFIGS, NavItem } from "@/app/config/nav";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Fragment } from "react";

export default function HeaderBreadcrumb() {
  const pathname = usePathname();
  const paths: string[] = [];
  if (pathname === "/") {
    paths.push("/");
  } else {
    pathname
      .split("/")
      .filter(Boolean)
      .forEach((path) => {
        paths.push(`${paths[paths.length - 1] ?? ""}/${path}`);
      });
  }

  const flatNavItems: NavItem[] = [];
  NAV_CONFIGS.forEach((item) => {
    flatNavItems.push(item);
    if (item.items) {
      item.items.forEach((subItem) => {
        flatNavItems.push(subItem);
      });
    }
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths.map((path, index) => (
          <Fragment key={path}>
            <BreadcrumbItem>
              {pathname !== path ? (
                <BreadcrumbLink href={path} className={`hidden md:block`}>
                  {flatNavItems.find((item) => item.url === path)?.title}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>
                  {flatNavItems.find((item) => item.url === path)?.title}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < paths.length - 1 && (
              <BreadcrumbSeparator className="hidden md:block" />
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
