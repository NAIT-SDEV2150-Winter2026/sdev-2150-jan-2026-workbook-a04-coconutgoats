import Card from './ui/Card';
import { useState } from 'react';

// src/components/Filters.jsx
export default function Filters() {
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedCategories, setSelectedCategories] = useState([]);

  function toggleCategory(category) {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      }

      return [...prev, category];
    });
  }

  const [openNow, setOpenNow] = useState(false);

  // exercise: virtual options checked, make text red!
  const [virtualOption, setVirtualOption] = useState(false);

  return (
    <Card title="Filters">
      <div className="space-y-4 p-4">
        <form id="frm-filter" className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="q" className="block text-sm font-medium text-gray-700">
              Search
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered w-full"
              placeholder="try: tutoring, mental health, bursary"
            />
            <p className="text-sm text-base-content/70">
              Searching for: {searchTerm}
            </p>
          </div>

          <hr className="border-gray-200" />

          <div className="space-y-2">
            <div className="text-sm font-semibold text-gray-800">Category</div>
            <div className="flex flex-wrap gap-2" aria-label="Category filters">
              {['All', 'Academic', 'Wellness', 'Financial', 'Tech'].map((label) => (
                <button
                  key={label}
                  type="button"
                  className={`${selectedCategories.includes(label) && 'bg-sky-600 text-white hover:bg-sky-800'} rounded border border-sky-600 px-3 py-1 text-xs font-semibold text-sky-700 hover:bg-sky-50`}
                  onClick={() => toggleCategory(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                id="openNow"
                className="checkbox"
                checked={openNow}
                onChange={(e) => setOpenNow(e.target.checked)}
              />
              Open now
            </label>
            <p className="text-sm">
              Open now: {openNow ? 'Yes' : 'No'}
            </p>

            <label className='flex items-center gap-2 text-sm text-gray-700'>
              <input
                type="checkbox"
                id="virtual"
                className="checkbox"
                checked={virtualOption}
                onChange={(e) => setVirtualOption(e.target.checked)}
              />
              <span className={virtualOption? 'text-primary' : 'text-gray-700'}>Virtual options</span>
            </label>
            <p className="text-sm">
              Virtual? {virtualOption ? 'Yes' : 'No'}
            </p>
          </div>

          <hr className="border-gray-200" />

          <div className="flex gap-2">
            <button
              type="button"
              className="rounded border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Reset
            </button>
            <button
              type="submit"
              className="rounded bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Filter
            </button>
          </div>
        </form>
      </div>
    </Card >
  );
}
