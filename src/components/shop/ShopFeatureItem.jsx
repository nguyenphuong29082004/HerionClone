import React from 'react';

function ShopFeatureItem({ icon: Icon, title, des }) {
  return (
    <div className="flex flex-col gap-4">
      <Icon className="text-red-500 text-5xl" />
      <h3 className="font-semibold text-xl tracking-wide">{title}</h3>
      <p className="text-gray-600 text-sm leading-7">{des}</p>
    </div>
  );
}

export default ShopFeatureItem;
