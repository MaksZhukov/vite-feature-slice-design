import { createContext } from 'react';
import { ThemeMode } from './types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ThemeContext = createContext({ mode: ThemeMode.Light, setMode: (_: ThemeMode) => {} });
