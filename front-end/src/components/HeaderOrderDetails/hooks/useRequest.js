import { useEffect, useState } from 'react';
import { getOrderById, getUserById } from '../../../services/api';

const useRequestById = (id, name) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getRequest = async () => {
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
    };
    getRequest();
  }, [id, name]);

  return data;
};

export default useRequestById;
