import { TableColumn } from "../Types/TableColumnType";
import TruncatedTooltip from '../Components/TruncatedTooltip';
import React from 'react';


const columnsConfig: TableColumn<any>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Platform',
    dataIndex: 'platform',
    key: 'platform',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text: string) => (
      <TruncatedTooltip text={String(text)} maxLength={30} style={{ fontStyle: 'italic', fontWeight: 'bold' }} />
    ),
  },
  {
    title: 'Version',
    dataIndex: 'version',
    key: 'version',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text: string) => (
      <span style={{ fontStyle: 'italic' }}>
        {text}
      </span>
    ),
  },
  {
    title: 'Upgrade Num',
    dataIndex: 'upgradeNum',
    key: 'upgradeNum',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Creator",
    dataIndex: 'creator',
    key: 'creator',
    sorter: (a, b) => a.creator.localeCompare(b.creator),
  },
  {
    title: "Created At",
    dataIndex: 'createdAt',
    key: 'createdAt',
    sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
    // render: (date: string) => {
    //   const [dateString, timeString] = date.split(' ');
    //   return (
    //     <>
    //       <div>{dateString}</div>
    //       <div style={{ fontSize: '12px', color: 'grey' }}>{timeString}</div>
    //     </>
    //   );
    // },
  },
  {
    title: "Is Upgraded",
    dataIndex: 'isUpgraded',
    key: 'isUpgraded',
    sorter: (a, b) => a.isUpgraded === b.isUpgraded ? 0 : a.isUpgraded ? 1 : -1,
    // render: (isUpgraded: boolean) => (
    //   <Space>
    //     <strong>{isUpgraded ? "Yes" : "No"}</strong>
    //   </Space>
    // ),
  },
];

export default columnsConfig;
