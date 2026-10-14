import { useColorScheme } from 'react-native'
import {
    light,
    dark
} from './colors'

export function useTheme() {
    const colorScheme = useColorScheme()
    return colorScheme === 'dark' ? dark : light
}