import { Footer, Header } from "@/modules";
import { QueryProvider } from "@/query";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <QueryProvider>
                <Header />
                {children}
                <Footer />
            </QueryProvider>
        </>
    );
};

export default Layout;
