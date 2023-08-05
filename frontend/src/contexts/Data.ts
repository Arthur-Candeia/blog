import { createContext } from "react";
import DataTypes from '../interface/DataTypes';

const DataContext = createContext<DataTypes>({posts: [], links: []})

export default DataContext;