/* eslint-disable prettier/prettier */
import { ParamListBase, RouteProp } from "@react-navigation/native";

export interface IStackScreenProps {
    name: string;
    route: RouteProp<ParamListBase, any>;
}