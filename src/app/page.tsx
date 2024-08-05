'use client';

import * as React from 'react';
import '@/lib/env';


/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <head>
        <title>CRMBD</title>
      </head>
      <div className="bg-gray-900 text-white h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <img src="/images/fgm.jpg" alt="CRMBD Image" className="max-w-full h-auto" />
          <p className="mt-4 text-5xl">CRMBD</p>
        </div>
      </div>
    </main>
  );
}
