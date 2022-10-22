import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../store";
import { ServicesDispatch, ServicesState } from '../services'

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const useServicesDispatch = () => useDispatch<ServicesDispatch>();
export const useServicesSelector: TypedUseSelectorHook<ServicesState> = useSelector;