import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '../init/store';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;