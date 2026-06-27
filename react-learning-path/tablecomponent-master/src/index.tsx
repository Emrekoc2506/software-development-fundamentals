import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GenericTable from './Components/TableComponent';
import columnsConfig from './Config/columnsConfig';
import { actionsConfig } from './Config/actionsConfig';
import { FetchDataResponse } from './Types/FetchedDataType';
import { TableData } from './Types/TableDataType';
import { fetchData } from './Utils/Utils';


const App = () => {
  // Set the initial state for data
  const [data, setData] = useState<FetchDataResponse<TableData>>({
    data: [],
    isSuccess: false,
    message: "",
    returnCode: -1,
    totalRecords: 0
  });


  const fetchDataAndUpdateState = async (currentPage: number, pageSize: number, orderBy: string, orderType: string): Promise<FetchDataResponse<TableData>> => {
    try {

      const newData = await fetchData(
        'https://localhost:44391/api/Data/GetList',
        currentPage,
        pageSize,
        orderBy,
        orderType
      );

      setData(newData);
      return newData; // Return the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to handle it elsewhere if needed
    }
  };

  return (
    <React.StrictMode>
      {/* Pass data and columnsConfig as props */}
      <GenericTable
        columns={columnsConfig}
        data={data} // Pass the data array as a prop
        sortableColumns={[0, 2, 3]}
        isExportable={true}
        isPageSizeChoosable={true}
        columnWidths={{ 1: 500 }}
        numberOfColumnsToShow={4}
        showRowSelection={true}
        hasAction={true}
        excelFolderName='users_table'
        actions={actionsConfig}
        fetchData={fetchDataAndUpdateState}
        // defaultPageSize={10}
        excelDefaultSortField='id'
        excelDefaultSortOrder='asc'
      />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
