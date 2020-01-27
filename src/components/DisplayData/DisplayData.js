import React from 'react';
import { Table } from 'antd';

const displayData = (props) => {
    const columns = [
        ...props.columns,
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href={`${record.key}`} onClick={(e) =>{
                        e.preventDefault();
                        props.delete(record.key)
                    }}>Delete</a>
                </span>
            )
        }
    ]
    return (
        <Table  columns={columns} dataSource={props.data} />
    )
}

export default displayData;