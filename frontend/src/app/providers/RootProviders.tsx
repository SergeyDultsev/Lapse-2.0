import * as React from "react";

import { BrowserRouter } from 'react-router';
import { QueryProvider } from "@app/providers/QueryProvider.tsx";
import { ModalProvider } from "@app/providers/ModalProvider.tsx";

export const RootProviders = ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter basename="/">
        <QueryProvider>
            <ModalProvider>
                {children}
            </ModalProvider>
        </QueryProvider>
    </BrowserRouter>
)