import { ApplicationForm, ContactForm } from "@prisma/client";
import {
  TableRow,
  TableHeaderCell,
  TableCell,
  Table,
  TableHead,
  TableBody,
  Text,
} from "@tremor/react";

type DataProps = {
  applicationForms?: ApplicationForm[];
  contactForms?: ContactForm[];
};

const tableHeaders = {
  applicationForms: [
    { label: "UUID", accessor: "id" },
    { label: "Package", accessor: "package" },
    { label: "Program Type", accessor: "programType" },
    { label: "Why USA?", accessor: "whyUSA" },
    { label: "Academic Interests", accessor: "academicInterests" },
    { label: "Full Name", accessor: "fullName" },
    { label: "Email", accessor: "email" },
    { label: "Phone", accessor: "phone" },
    { label: "Citizenship", accessor: "citizenship" },
    { label: "University", accessor: "university" },
    { label: "Major", accessor: "major" },
    { label: "GPA", accessor: "gpa" },
    { label: "Extracurriculars", accessor: "extracurricular" },
    { label: "English Proficiency", accessor: "englishProficiency" },
    { label: "TOEFL/IELTS", accessor: "toeflIelts" },
    { label: "Familiar with GRE?", accessor: "gre" },
  ],
  contactForms: [
    { label: "UUID", accessor: "id" },
    { label: "Full Name", accessor: "fullName" },
    { label: "Email", accessor: "email" },
    { label: "Phone", accessor: "phone" },
    { label: "Question", accessor: "question" },
  ],
};

export default function DataRecordsTable(data: DataProps) {
  const isApplicationForm = data.applicationForms !== undefined;
  const isContactForm = data.contactForms !== undefined;

  const renderTableHeader = () => {
    const headers =
      tableHeaders[isApplicationForm ? "applicationForms" : "contactForms"];

    if (headers) {
      return (
        <TableRow>
          <TableHeaderCell className="dark:text-gray-300 text-center">
            #
          </TableHeaderCell>
          {headers.map((header) => (
            <TableHeaderCell
              className="dark:text-gray-300 text-center"
              key={header.label}
            >
              {header.label}
            </TableHeaderCell>
          ))}
        </TableRow>
      );
    } else {
      return null;
    }
  };

  const renderTableRow = (datum: any, index: number) => {
    const headers =
      tableHeaders[isApplicationForm ? "applicationForms" : "contactForms"];

    return (
      <TableRow key={datum.id}>
        <TableCell className="w-fit max-w-[350px] border text-center">
          <Text className="dark:text-gray-300">{index + 1}</Text>
        </TableCell>
        {headers.map((header, index) => (
          <TableCell
            className="w-fit max-w-[350px] border text-center"
            key={index}
          >
            <Text className="dark:text-gray-300">{datum[header.accessor]}</Text>
          </TableCell>
        ))}
      </TableRow>
    );
  };

  return (
    <Table className="overflow-x-auto">
      <TableHead>{renderTableHeader()}</TableHead>
      <TableBody>
        {isApplicationForm &&
          data.applicationForms?.map((datum, index) =>
            renderTableRow(datum, index)
          )}
        {isContactForm &&
          data.contactForms?.map((datum, index) =>
            renderTableRow(datum, index)
          )}
      </TableBody>
    </Table>
  );
}
