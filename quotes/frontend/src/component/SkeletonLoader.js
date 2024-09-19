import React from 'react';

const SkeletonLoader = () => (
    <div className="skeleton-loader">
        <div className="skeleton-header">
            <div className="skeleton-avatar"></div>
            <div className="skeleton-title"></div>
        </div>
        <div className="skeleton-content"></div>
        <div className="skeleton-footer">
            <div className="skeleton-button"></div>
            <div className="skeleton-button"></div>
        </div>
    </div>
);

export default SkeletonLoader;