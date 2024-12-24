"use client";
import React from "react";
import Link from "next/link";
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
    benefit: "Logo on website",
    subtitle: "",
    bronze: "✅",
    silver: "✅",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "2",
    benefit: "Resume book access",
    subtitle: "",
    bronze: "✅",
    silver: "✅",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "3",
    benefit: "Company feature in our monthly newsletter",
    subtitle: "",
    bronze: "✅",
    silver: "✅",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "4",
    benefit: "Logo on club t-shirts",
    subtitle: "",
    bronze: "-",
    silver: "✅",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "5",
    benefit: "Advertisement at our events",
    subtitle:
      "",
    bronze: "-",
    silver: "✅",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "6",
    benefit: "Option to host 1 event",
    subtitle:
      "",
    bronze: "-",
    silver: "-",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "7",
    benefit: "Distribution of company swag",
    subtitle:
      "",
    bronze: "-",
    silver: "-",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "8",
    benefit: "Logo on club banner",
    subtitle:
      "",
    bronze: "-",
    silver: "-",
    gold: "✅",
    platinum: "✅",
  },
  {
    key: "9",
    benefit: "Option to host up to 5 events",
    subtitle:
      "",
    bronze: "-",
    silver: "-",
    gold: "-",
    platinum: "✅",
  },
  {
    key: "10",
    benefit: "Unlimited coffee chat slots with our members",
    subtitle:
      "",
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
                      {/* {columnKey === "benefit" && (
                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                      )} */}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Link href="/sponsorship_packet.pdf">
                <button className="bg-white text-gray-700 text-lg border-2 border-gray-700 w-50 px-3 py-2 rounded-full font-medium hover:border-dark-blue hover:text-dark-blue transition-colors duration-300">
                  View Sponsorship Packet
                </button>
              </Link>
      <p className="mt-8 text-center">
        To sponsor, reach out to us at contact@mitfullstack.org!
      </p>
    </div>
  );
}
