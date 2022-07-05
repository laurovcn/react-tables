import { useTable } from "react-table";

export function Table ({ columns, data }: any) {  
  
  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow      
    } = useTable({
    columns,
    data
    }); 
  
  return (
    <>
      <table className="w-full text-sm text-center"
          {...getTableProps()} >        
            <thead className="text-sm text-gray-100 uppercase bg-blue-500">
                {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                    <th className="text-md" {...column.getHeaderProps()}>
                        {column.render('Header')}
                    </th>
                    ))}
                </tr>
                ))}
            </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className="text-white border-b bg-gray-800 border-gray-700 odd:bg-white even:bg-gray-50 odd:bg-gray-800
            even:bg-gray-700  md:transition-all ease-in-out delay-10 hover:-translate-y-1 hover:scale-109 hover:bg-blue-500 duration-300" {...row.getRowProps()}>
            {row.cells.map((cell) => {
                return (
                <td className="px-6 py-4 border border-slate-600 dark:border-slate-600" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                </td>
                );
            })}
            </tr>
          );
          })}
        </tbody> 
      </table>        
  </>
  )
}