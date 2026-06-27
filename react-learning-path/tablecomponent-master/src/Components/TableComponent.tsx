import React, { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Table, Select } from 'antd';
import ActionMenu from './ActionMenu';
import { ColumnsType } from 'antd/es/table';
import * as XLSX from 'xlsx';
import { Action } from '../Types/ActionTypes';
import { FetchDataResponse } from '../Types/FetchedDataType';
import { TableColumn } from '../Types/TableColumnType';
import { TableData } from '../Types/TableDataType';


// Defining the props for the GenericTable component
interface GenericTableProps<T> {
  columns: TableColumn<T>[];
  data: FetchDataResponse<TableData>;
  sortableColumns: number[];
  isExportable: boolean;
  isPageSizeChoosable: boolean;
  columnWidths?: Record<number, number>;
  numberOfColumnsToShow: number;
  hasAction?: boolean;
  showRowSelection?: boolean;
  excelFolderName?: string;
  actions: Action<T>[];
  fetchData: (currentPage: number, pageSize: number, orderBy: string, orderType: string) => Promise<FetchDataResponse<T>>;
  defaultPageSize?: number;
  excelDefaultSortField: string;
  excelDefaultSortOrder: string;
}

// Defining the GenericTable component
const GenericTable = <T extends TableData>({
  columns,
  data,
  sortableColumns,
  isExportable,
  isPageSizeChoosable,
  columnWidths,
  numberOfColumnsToShow: propNumberOfColumnsToShow,
  hasAction = true,
  showRowSelection = false, // Default to false if not provided
  excelFolderName = "tableData", //Default file name
  actions,
  fetchData,
  defaultPageSize = 10,
  excelDefaultSortField: defaultSortField,
  excelDefaultSortOrder: defaultSortOrder
}: GenericTableProps<T>) => {
  // State for pagination
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: defaultPageSize || 5,
    total: 0,
    pageSizeOptions: ['5', '10', '20', '50', '100']
  });
  const [numberOfColumnsToShow, setNumberOfColumnsToShow] = useState<number>(
    propNumberOfColumnsToShow || 6 // Using prop value or default to 6
  );
  const [pageSizeInput, setPageSizeInput] = useState('5'); // State for the page size input field
  const { Option } = Select;
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);

  // Fetch data and update pagination
  useEffect(() => {
    const fetchDataAndUpdatePagination = async () => {
      try {
        const { currentPage: currentPage, pageSize } = pagination;
        let orderBy: string = defaultSortField;
        let orderType = defaultSortOrder;

        const newData = await fetchData(currentPage, pageSize, orderBy, orderType);

        // Update pagination total based on the totalRecords from backend
        setPagination(prevPagination => ({
          ...prevPagination,
          total: newData.totalRecords,
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndUpdatePagination();
  }, [pagination.currentPage, pagination.pageSize, defaultSortField, defaultSortOrder]);

  // Handle table change
  const handleTableChange = async (pagination: any, sorter: any, filter : any) => {

    try {
      const { current: currentPage, pageSize } = pagination;
      let orderBy: string = defaultSortField || ''; // Default orderBy value as an empty string
      let orderType = defaultSortOrder; // Default orderType value

      // Check if sorter is provided and sortableColumns includes the sorted column index
      if (filter.order != undefined) {
        orderBy = filter.field.toString(); // Use sorter.field directly to get the column key
        orderType = filter.order === 'descend' ? 'desc' : 'asc'; // Determine the orderType based on sorter.order
      }

      await fetchData(currentPage, pageSize, orderBy, orderType);

      setPagination(pagination);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleRowSelectionChange = (selectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(selectedRowKeys as number[]);
  };


  // Handling export to Excel
  const handleExportToExcel = async () => {
    try {
      // Fetch all data from the API
      const allData = await fetchData(1, data.totalRecords, defaultSortField, defaultSortOrder);

      // Extracting column names and corresponding data from columns
      const excelData = allData.data.map((item: TableData) => { // Add type annotation for 'item'
        const rowData: { [key: string]: any } = {};
        columns.forEach(column => {
          rowData[column.title] = item[column.dataIndex as keyof TableData]; // Adjust type annotation for column data index
        });
        return rowData;
      });

      // Convert data to Excel format
      const worksheet = XLSX.utils.json_to_sheet(excelData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Table Data');

      // Trigger file download
      XLSX.writeFile(workbook, excelFolderName + '.xlsx');
    } catch (error) {
      console.error('Error exporting to Excel:', error);
    }
  };

  const handlePageSizeChange = (value: string) => {
    const newPageSize = parseInt(value, 10);
    setPagination(prevPagination => ({
      ...prevPagination,
      pageSize: newPageSize,
      current: 1, // Reset current page to 1 when page size changes
    }));
  };


  // Dynamically calculating numberOfColumnsToShow based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setNumberOfColumnsToShow(3);
      } else if (window.innerWidth >= 1000 && window.innerWidth < 1200) {
        setNumberOfColumnsToShow(4);
      } else {
        setNumberOfColumnsToShow(propNumberOfColumnsToShow || 6); // Use prop value or default to 6
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [propNumberOfColumnsToShow]);

  const expandedRowRender = (record: T) => {
    // Determine the number of columns to be displayed in the main table
    let expandedTableColumns: TableColumn<T>[] = [];

    expandedTableColumns = columnsConfig.slice(numberOfColumnsToShow);

    // Render the expanded table columns
    const expandedTable = (
      <table style={{ width: '100%' }}>
        <tbody>
          {expandedTableColumns.map((column, index) => {
            const rowStyle = index % 2 !== 0 ? { background: '#f5f5f5' } : {};

            return (
              <tr key={column.key} style={rowStyle}>
                <td style={{ fontWeight: 'bold', paddingLeft: '150px' }}>{column.title}</td>
                <td>{column.dataIndex ? record[column.dataIndex] as React.ReactNode : null}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );

    return expandedTable;
  };

  const rowSelection = showRowSelection
    ? {
      selectedRowKeys,
      onChange: handleRowSelectionChange,
    }
    : undefined;

  // Create columns configuration
  const columnsConfig: TableColumn<T>[] = [
    // Mapping the columns from the generic configuration
    ...columns.map((column: TableColumn<T>) => ({
      ...column,
      sorter: sortableColumns.includes(columns.indexOf(column)) ? column.sorter : undefined,
      width: (columnWidths ?? {})[columns.indexOf(column)] || column.width,
      dataIndex: column.dataIndex as keyof T,
    })),
  ];

  // Conditionally include the action column
  if (hasAction) {
    columnsConfig.unshift({
      title: 'Action',
      key: 'operation',
      render: (_, record) => (
        <Dropdown overlay={record && <ActionMenu actions={actions} record={record} />}>
          <a>
            Aksiyon <DownOutlined />
          </a>
        </Dropdown>
      ),
      width: 10,
    });
  }

  // Filter the columns based on the numberOfColumnsToShow prop
  const visibleColumns = columnsConfig.slice(0, numberOfColumnsToShow);

  // Render the table with the generic configuration
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', paddingTop: '80px', paddingLeft: '30px', paddingRight: '30px' }}>
        {isPageSizeChoosable && (
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', marginRight: '30px' }}>
            <label style={{ marginRight: '10px' }}>Veri Sayısı:</label>
            <Select
              value={pagination.pageSize.toString()}
              onChange={(value) => handlePageSizeChange(value.toString())}
              style={{ marginRight: '8px', width: '80px' }}
            >
              {pagination.pageSizeOptions.map(option => (
                <Option key={option} value={option}>{option}</Option>
              ))}
            </Select>
          </div>
        )}
        {isExportable && (
          <button
            style={{
              backgroundColor: '#1890ff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '8px 16px',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              marginLeft: 'auto',
            }}
            onClick={handleExportToExcel}
          >
            Excel'e Aktar
          </button>
        )}
      </div>
      <Table<T>
        columns={visibleColumns as ColumnsType<T>}
        rowSelection={rowSelection}
        dataSource={data.data as T[]}
        pagination={{
          ...pagination,
          showSizeChanger: false,
        }}
        onChange={handleTableChange}
        expandable={{
          expandedRowRender: expandedRowRender,
          defaultExpandedRowKeys: ['0'],
        }}
        locale={{
          emptyText: 'Veri bulunamadı',
          selectAll: 'Hepsini Seç',
          sortTitle: 'Sırala',
          triggerDesc: 'Azalan sıralama için tıklayın',
          triggerAsc: 'Artan sıralama için tıklayın',
          cancelSort: 'Sıralamayı iptal etmek için tıklayın',
        }}
      />
    </>
  );
};

export default GenericTable;