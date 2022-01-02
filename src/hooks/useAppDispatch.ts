import { useDispatch } from 'react-redux';
import { AppDispatch } from '../init/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();