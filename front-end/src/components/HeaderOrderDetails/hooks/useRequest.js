/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from 'react';
import { getOrderById, getUserById } from '../../../services/api';

const useRequestById = (id, name) => {
  const [data, setData] = useState({});

  useMemo(async () => {
    if (id) {
      if (name === 'order') {
        const result = await getOrderById(id);
        setData(result.data);
      }
      if (name === 'user') {
        const result = await getUserById(id);
        if (result?.data) {
          setData(result.data);
        }
      }
    }
  }, [id]);
  return data;
};

export default useRequestById;
