import { Todo } from '@flash-ws/dao';
import { Spin, Table } from 'antd';

import styles from './todos.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Task',
    dataIndex: 'task',
  },
  {
    title: 'Done',
    dataIndex: 'done',
  },
];

/* eslint-disable-next-line */
export interface UsuariosProps {}

export function Usuarios(props: UsuariosProps) {
  const [data, setData] = useState<Array<Todo>>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('/api/users')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(JSON.stringify(error));
        setLoading(false);
      });
  }, []);

  if (loading) return <Spin />;
  if (error) return <p>{error}</p>;

  if (!data) return <p>Internal error</p>;

  return (
    <div className={styles['container']}>
      <h1>There are {data.length} users</h1>
      <Table dataSource={data} columns={columns} />;
    </div>
  );
}

export default Usuarios;
