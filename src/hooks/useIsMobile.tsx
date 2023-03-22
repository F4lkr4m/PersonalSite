import { useMediaQuery } from 'react-responsive'
import { DESKTOP_DISPLAY_WIDTH } from '@/constants'

export const useIsMobile = () => useMediaQuery({ maxWidth: DESKTOP_DISPLAY_WIDTH })
