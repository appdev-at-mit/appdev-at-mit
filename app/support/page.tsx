"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
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
    subtitle: "Logo placement on sponsorship materials",
    bronze: "✅",
    silver: "✅",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "2",
    benefit: "Campus-wide publicity",
    subtitle: "Support and usage of company products on campus",
    bronze: "✅",
    silver: "✅",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "3",
    benefit: "Resume book access",
    subtitle: "Access to our talent pipeline for recruitment",
    bronze: "-",
    silver: "✅",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "4",
    benefit: "Flagship Initiative Co-Sponsor",
    subtitle: "Company-specific publicity and swag distribution",
    bronze: "-",
    silver: "-",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "5",
    benefit: "Host a company event",
    subtitle:
      "One per semester; Includes workshops, hackathons, speaker panels",
    bronze: "-",
    silver: "-",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "6",
    benefit: "Host multiple events",
    subtitle:
      "Up to three per semester with priority scheduling; Every additional event costs $200",
    bronze: "-",
    silver: "-",
    gold: "-",
    platinum: "✅",
  },
];

export default function Support() {
  return (
    <div className="flex flex-col items-center justify-center xl:mx-64 lg:mx-48 md:mx-32 mx-6 xl:my-20 my-10">
      <h1 className="text-4xl font-bold my-3 text-gray-800 text-center">
        Support Us ❤️
      </h1>

      <p className="mb-8 mt-2 text-gray-700 text-lg font-semibold text-center">
        Join us in making an impact on our communities.
      </p>

      <p className="xl:mx-32 lg:mx-24 md:mx-16 mx-6 mb-20 mt-2 text-gray-700 text-md text-center">
        <span className="font-bold">All sponsorship contributions</span> are
        directly reinvested into the club, supporting our mission to empower the
        community through technology. These funds enable us to conduct user
        research, obtain software licenses, and expand our outreach and
        marketing efforts.
      </p>

      <h2 className="text-3xl font-bold text-center"> Sponsorship Tiers </h2>

      <div className="w-full overflow-x-auto">
        <Table
          selectionMode="none"
          className="mb-8 mt-2 text-gray-700 text-md"
          isStriped
          cellPadding={24}
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
              <TableRow key={item.key} className="text-center">
                {(columnKey) => (
                  <TableCell className="text-center">
                    <div>
                      <p>{getKeyValue(item, columnKey)}</p>
                      {columnKey === "benefit" && (
                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                      )}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <p className="mt-8 text-center">
        We’re open to discussing further methods of collaboration - reach out to
        us at fullstack@mit.edu!
      </p>
    </div>
  );
}
