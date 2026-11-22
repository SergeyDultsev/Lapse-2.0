import * as React from "react";

import { BrowserRouter } from 'react-router';
import { QueryProvider } from "@app/providers/QueryProvider.tsx";

export const RootProviders = ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter basename="/">
        <QueryProvider>
             {children}
        </QueryProvider>
    </BrowserRouter>
)