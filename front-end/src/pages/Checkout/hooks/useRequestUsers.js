/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from 'react';
import { getUserByRole } from '../../../services/api';

const useRequestById = (role) => {
  const [data, setData] = useState();

  useMemo(async () => {
    const result = await getUserByRole(role);
    setData(result.data);
  }, []);
  return data;
};

export default useRequestById;
