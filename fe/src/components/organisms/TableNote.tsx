import React from 'react';

import { Table as TableAntd, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { Note, Pagination } from '@/utils/types';

interface DataType extends Note {
  key?: React.Key;
}

interface TableNoteProps {
  data: Note[]
  pagination: Pagination
  loading: boolean
  ActionComponent: React.FC<Note>
}

export const TableNote = ({ ActionComponent, ...props }: TableNoteProps) => {

  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 150,
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      width: 150,
      render: (tags: string[]) => {
        return tags.map(tag => <Tag key={tag} color="magenta">{tag}</Tag>);
      }
    },
    {
      title: 'Content',
      dataIndex: 'content',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (propsRender:Note) => <ActionComponent {...propsRender} />,
    },
  ];

  return (
    <TableAntd columns={columns} dataSource={props.data} pagination={{ pageSize: props.pagination.pageSize || 50 }} loading={props.loading} />
  );
};

export default TableNote;