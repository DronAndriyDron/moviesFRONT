import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppStore } from "core/store";

export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;
