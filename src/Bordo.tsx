
import type { ReactNode } from 'react';

type BordoProps = {
    children: ReactNode;
};

function Bordo({ children }: BordoProps) {

    return (
        <div className="border-black">
            {children}
        </div>
    )
}

export default Bordo;