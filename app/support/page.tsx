'use client'
import React from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue
} from "@nextui-org/table";

const columns = [
  {
    key: "benefit",
    label: "Benefit ✨",
  },
  {
    key: "bronze",
    label: "Bronze",
  },
  {
    key: "silver",
    label: "Silver",
  },
  {
    key: "gold",
    label: "Gold",
  },
  {
    key: "platinum",
    label: "Platinum",
  },
];

const rows = [
  {
    key: "1",
    benefit: "Recognition on our website",
    bronze: "✅",
    silver: "✅",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "2",
    benefit: "Campus-wide marketing & publicity",
    bronze: "✅",
    silver: "✅",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "3",
    benefit: "Access to our mailing list",
    bronze: "-",
    silver: "✅",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "4",
    benefit: "Resume book access",
    bronze: "-",
    silver: "✅",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "5",
    benefit: "1 Company-specific event per year",
    bronze: "-",
    silver: "✅",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "6",
    benefit: "Multiple company-specific events per year",
    bronze: "-",
    silver: "✅",
    gold: "✅",
    platinum: "✅",
  },
];

export default function Support() {
    return (
      <div className="flex flex-col items-center justify-center">

        <h1 className="text-4xl font-bold my-3 text-gray-800">Support Us ❤️</h1>

        <p className="mb-8 mt-2 text-gray-700 text-md">Join our mission in building community & fostering growth.</p>

        <h2 className="text-3xl font-bold"> Sponsorship Tiers </h2>

        <Table
          selectionMode="none"
          className="mb-8 mt-2 text-gray-700 text-md"
          isStriped
          cellPadding={24}
          width={10}
        >
  <TableHeader columns={columns}>
    {(column) => (
      <TableColumn
        key={column.key}
        className="text-md text-question text-center font-bold min-w-48"
      >
        {column.label}
      </TableColumn>
    )}
  </TableHeader>
  <TableBody items={rows}>
    {(item) => (
      <TableRow
        key={item.key}
        className="text-center"
      >
        {(columnKey) => (
          <TableCell className="text-center">
            {getKeyValue(item, columnKey)}
          </TableCell>
        )}
      </TableRow>
    )}
  </TableBody>
</Table>

<p> We’re open to discussing further methods of collaboration - reach out to us at fullstack@mit.edu! </p>
       
      </div>

      
    )
  }
  