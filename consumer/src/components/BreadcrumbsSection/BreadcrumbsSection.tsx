import React from 'react';

export const BreadcrumbsSection: React.FC = () => {
    return (
        <FlareBreadcrumbs>
            <FlareBreadcrumbs.Link href={'/home'} label={'Home'} />
            <FlareBreadcrumbs.Label label={'Bonds'} />
        </FlareBreadcrumbs>
    );
};
