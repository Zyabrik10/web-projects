"use client";

type Props<T extends Record<string, unknown>> = Readonly<{
  array: T[];
  headers: Extract<keyof T, string>[];
}>;

export default function Table<T extends Record<string, unknown>>({
  array,
  headers,
}: Props<T>) {
  return (
    <table>
      <TableHeader headers={headers} />
      <TableBody array={array} headers={headers} />
    </table>
  );
}

type TableHeaderProps<T extends Record<string, unknown>> = Readonly<{
  headers: Extract<keyof T, string>[];
}>;

export function TableHeader<T extends Record<string, unknown>>({
  headers,
}: TableHeaderProps<T>) {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => {
          return <th key={index}>{header}</th>;
        })}
      </tr>
    </thead>
  );
}

type TableBodyProps<T extends Record<string, unknown>> = Readonly<{
  array: T[];
  headers: Extract<keyof T, string>[];
}>;

export function TableBody<T extends Record<string, unknown>>({
  array,
  headers,
}: TableBodyProps<T>) {
  return <tbody>
    {array.map((item, heighIndex)=>{
        return <tr>
            {headers.map((header)=>{
                return <></>
            })}
        </tr>
    })}
  </tbody>;
}
