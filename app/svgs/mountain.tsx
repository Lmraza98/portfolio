import React from "react";
import Image from "next/image";

export const Mountain = () => {
  return (
    <div className="relative w-full h-full">
      <div 
        className="hidden md:block absolute inset-0" 
        style={{ 
          backgroundImage: 'url(/Mountains.svg)',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          backgroundSize: 'auto 100%'
        }}
      />
      <Image 
        src="/Mountains.svg" 
        alt="mountain" 
        fill={true}
        className="md:hidden object-cover w-full"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};
