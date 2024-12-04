import {NextUIProvider} from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react';


const providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
};

export default providers;