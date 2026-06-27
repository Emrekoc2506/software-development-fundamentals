import { Action } from "../Types/ActionTypes";
import { CheckCircleOutlined, CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons'; // Import the icons you need
import { TableData } from "../Types/TableDataType";

export const actionsConfig: Action<TableData>[] = [
    {
        label: ' Onayla',
        icon: <CheckCircleOutlined />,
        style: { color: 'green' },
        onClick: (record) => {
            console.log('Approve clicked for record:', record);
            // Add your approve logic here
        },
    },
    {
        label: ' iptal Et',
        icon: <CloseCircleOutlined />,
        style: { color: 'red' },
        onClick: (record) => {
            console.log('Disapprove clicked for record:', record);
            // Add your disapprove logic here
        },
    },
    {
        label: ' Sil',
        icon: <DeleteOutlined />,
        onClick: (record) => {
            console.log('Delete clicked for record:', record);
            // Add your delete logic here
        },
    },
];