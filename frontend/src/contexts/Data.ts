import { createContext } from "react";
import DataTypes from '../interfaces/DataTypes';

const DataContext = createContext<DataTypes>({posts: [{title: '', content: '', src: '', date: '', likes: 2, _id: ''}], links: [{title: '', url: ''}]})

export default DataContext;