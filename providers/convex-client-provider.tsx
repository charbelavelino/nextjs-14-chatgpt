"use client"

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { Authenticated, ConvexReactClient, Unauthenticated } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

interface ConvexClientProviderProps {
    children: React.ReactNode;
};

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
    children
}:ConvexClientProviderProps) => {
    return(
        <ClerkProvider signUpUrl="/sign-up" >
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                {/* <AuthLoading>
                    <Loading/>
                </AuthLoading> */}
                <Authenticated>
                    {children}
                </Authenticated>
                <Unauthenticated>
                    {children}
                </Unauthenticated>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}