import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, src, alt }) => (
  <Link
    to={to}
    className="flex items-center justify-center w-32 p-4 transition-all rounded-md shadow-md hover:shadow-md sm:shadow-sm"
  >
    <img src={src} alt={alt} className="h-16" />
  </Link>
);

export default CustomLink;
