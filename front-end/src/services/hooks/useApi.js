import axios from 'axios';
import { useState } from 'react';

export default function UseApi(url, loginData) {
  const [data, setData] = useState();

  axios.post(url, loginData).then((response) => setData(response));

  return data;
}
