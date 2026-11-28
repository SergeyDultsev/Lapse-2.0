import * as React from "react";

import { BrowserRouter } from 'react-router';
import { QueryProvider } from "@app/providers/QueryProvider.tsx";
import { ModalProvider } from "@app/providers/ModalProvider.tsx";
import { RefresherProvider } from "@app/providers/RefreshProvider.tsx";


export const RootProviders = ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter basename="/">
        <QueryProvider>
                <ModalProvider>
                    <RefresherProvider />
                    {children}
                </ModalProvider>
        </QueryProvider>
    </BrowserRouter>
)