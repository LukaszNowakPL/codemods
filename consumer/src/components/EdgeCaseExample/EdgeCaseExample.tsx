import React from 'react';

export const EdgeCaseExample: React.FC = () => {
    const {Link, Label} = FlareBreadcrumbs;

    return (
        <FlareBreadcrumbs>
            <Link href={'/home'} label={'Home'} />
            <Label label={'Bonds'} />
        </FlareBreadcrumbs>
    )
}