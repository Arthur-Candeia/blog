import { createContext } from "react";
import DataTypes from '../interface/DataTypes';

const DataContext = createContext<DataTypes>({posts: [{title: '', content: '', src: '', date: '', likes: 2}], links: []})

export default DataContext;