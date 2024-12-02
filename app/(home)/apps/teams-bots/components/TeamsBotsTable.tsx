"use client";

import DataTable from "@/components/custom/DataTable";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Settings } from "lucide-react";
import Link from "next/link";
import { Tables } from "@/database.types";

const columns: ColumnDef<Tables<"bots">>[] = [
  {
    id: "name",
    header: "Name",
    cell: ({ row }) => row.original.name,
  },
  {
    id: "createAt",
    header: "Create At",
    cell: ({ row }) => row.original.created_at,
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => (
      <Button size="sm" asChild variant="default" color="primary">
        <Link href={`/apps/teams-bots/${row.original.id}`}>
          <Settings />
        </Link>
      </Button>
    ),
  },
];

interface DataTableProps {
  data: Tables<"bots">[];
}

export default function TeamsBotsTable({ data }: DataTableProps) {
  return <DataTable columns={columns} data={data} />;
}
