```tsx
import React from 'react';

const Navbar: React.FC = () => (
  <div className="flex items-center">
    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
      <span className="text-white font-bold text-sm">V</span>
    </div>
    <span className="text-xl font-bold text-gray-900">Victor Plumbs</span>
  </div>
);

export default Navbar;
```