import React from 'react';
import { ParallaxScroll } from '@/components/ui/parallax-scroll';

const GalleryPage: React.FC = () => {
    return (
        <div>
            <h1>Gallery Page</h1>
            <ParallaxScroll className="gallery-class" />
        </div>
    );
};

export default GalleryPage;
