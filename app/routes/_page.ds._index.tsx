export default function DesignSystemPage() {
  return (
    <main className="min-h-screen p-8 bg-linear-0">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          Design System Guidelines
        </h1>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Typography</h2>

          {/* Font Families */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Font Families
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="mb-2 text-sm font-medium text-gray-500">Xilosa</p>
                <p className="font-xilosa text-2xl">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="mb-2 text-sm font-medium text-gray-500">
                  Manrope
                </p>
                <p className="font-manrope text-2xl">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="mb-2 text-sm font-medium text-gray-500">
                  Poppins
                </p>
                <p className="font-poppins text-2xl">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>

          {/* Headings */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Headings
            </h3>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">H1</span>
                </div>
                <div className="text-h1 flex-1 font-xilosa leading-h1">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>3.75rem</div>
                  <div>LH: 3.75rem</div>
                  <div>Weight: 500</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">H2</span>
                </div>
                <div className="text-h2 flex-1 font-xilosa leading-h2">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>3rem</div>
                  <div>LH: 3.75rem</div>
                  <div>Weight: 500</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">H3</span>
                </div>
                <div className="text-h3 flex-1 font-xilosa leading-h3">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>2.25rem</div>
                  <div>LH: 2.5rem</div>
                  <div>Weight: 500</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">H4</span>
                </div>
                <div className="text-h4 flex-1 font-xilosa leading-h4">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.875rem</div>
                  <div>LH: 2.25rem</div>
                  <div>Weight: 500</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">H5</span>
                </div>
                <div className="text-h5 flex-1 font-xilosa leading-h5">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.5rem</div>
                  <div>LH: 2rem</div>
                  <div>Weight: 500</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">H6</span>
                </div>
                <div className="text-h6 flex-1 font-xilosa leading-h6">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.25rem</div>
                  <div>LH: 1.75rem</div>
                  <div>Weight: 500</div>
                </div>
              </div>
            </div>
          </div>

          {/* Subtitles */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Subtitles
            </h3>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S1</span>
                </div>
                <div className="text-s1 flex-1 font- leading-s1">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>3.75rem</div>
                  <div>LH: 3.75rem</div>
                  <div>Weight: 600</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S2</span>
                </div>
                <div className="text-s2 flex-1 font- leading-s2">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>3rem</div>
                  <div>LH: 3rem</div>
                  <div>Weight: 600</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S3</span>
                </div>
                <div className="text-s3 flex-1 font- leading-s3">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>2.25rem</div>
                  <div>LH: 2.5rem</div>
                  <div>Weight: 600</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S4</span>
                </div>
                <div className="text-s4 flex-1 font- leading-s4">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.875rem</div>
                  <div>LH: 2.25rem</div>
                  <div>Weight: 600</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S5</span>
                </div>
                <div className="text-s5 flex-1 font- leading-s5">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.5rem</div>
                  <div>LH: 2rem</div>
                  <div>Weight: 600</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S6</span>
                </div>
                <div className="text-s6 flex-1 font- leading-s6">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.25rem</div>
                  <div>LH: 1.75rem</div>
                  <div>Weight: 600</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S7</span>
                </div>
                <div className="text-s7 flex-1 font- leading-s7">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1rem</div>
                  <div>LH: 1.75rem</div>
                  <div>Weight: 600</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">S8</span>
                </div>
                <div className="text-s8 flex-1 font- leading-s8">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>0.875rem</div>
                  <div>LH: normal</div>
                  <div>Weight: 600</div>
                </div>
              </div>
            </div>
          </div>

          {/* Paragraphs */}
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-gray-700">
              Paragraphs
            </h3>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P1</span>
                </div>
                <div className="text-p1 flex-1 font-poppins leading-p1">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>3.75rem</div>
                  <div>LH: 3.75rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P2</span>
                </div>
                <div className="text-p2 flex-1 font-poppins leading-p2">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>3rem</div>
                  <div>LH: 3rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P3</span>
                </div>
                <div className="text-p3 flex-1 font-poppins leading-p3">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>2.25rem</div>
                  <div>LH: 2.5rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P4</span>
                </div>
                <div className="text-p4 flex-1 font-poppins leading-p4">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.875rem</div>
                  <div>LH: 2.25rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P5</span>
                </div>
                <div className="text-p5 flex-1 font-poppins leading-p5">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.5rem</div>
                  <div>LH: 2rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P6</span>
                </div>
                <div className="text-p6 flex-1 font-poppins leading-p6">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1.25rem</div>
                  <div>LH: 1.75rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P7</span>
                </div>
                <div className="text-p7 flex-1 font-poppins leading-p7">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>1rem</div>
                  <div>LH: 1.5rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
              <div className="flex items-baseline gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="w-20 shrink-0">
                  <span className="text-sm font-medium text-gray-500">P8</span>
                </div>
                <div className="text-p8 flex-1 font-poppins leading-p8">
                  The quick brown fox
                </div>
                <div className="w-48 shrink-0 text-right text-xs text-gray-500">
                  <div>0.875rem</div>
                  <div>LH: 1.25rem</div>
                  <div>Weight: 400</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section>
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Color Palettes
          </h2>
          <div className="space-y-8">
            {/* Olivine */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                Olivine
              </h3>
              <p className="mb-4 text-sm text-gray-500">Green Palette</p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-light" />
                  <p className="text-xs text-gray-600">light</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-light-hover" />
                  <p className="text-xs text-gray-600">light-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-light-active" />
                  <p className="text-xs text-gray-600">light-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-normal" />
                  <p className="text-xs text-gray-600">normal</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-normal-hover" />
                  <p className="text-xs text-gray-600">normal-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-normal-active" />
                  <p className="text-xs text-gray-600">normal-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-dark" />
                  <p className="text-xs text-gray-600">dark</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-dark-hover" />
                  <p className="text-xs text-gray-600">dark-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-dark-active" />
                  <p className="text-xs text-gray-600">dark-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-olivine-darker" />
                  <p className="text-xs text-gray-600">darker</p>
                </div>
              </div>
            </div>

            {/* Moonstone */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                Moonstone
              </h3>
              <p className="mb-4 text-sm text-gray-500">Blue/Teal Palette</p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-light" />
                  <p className="text-xs text-gray-600">light</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-light-hover" />
                  <p className="text-xs text-gray-600">light-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-light-active" />
                  <p className="text-xs text-gray-600">light-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-normal" />
                  <p className="text-xs text-gray-600">normal</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-normal-hover" />
                  <p className="text-xs text-gray-600">normal-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-normal-active" />
                  <p className="text-xs text-gray-600">normal-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-dark" />
                  <p className="text-xs text-gray-600">dark</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-dark-hover" />
                  <p className="text-xs text-gray-600">dark-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-dark-active" />
                  <p className="text-xs text-gray-600">dark-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-moonstone-darker" />
                  <p className="text-xs text-gray-600">darker</p>
                </div>
              </div>
            </div>

            {/* Payneys Grey */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                Payneys Grey
              </h3>
              <p className="mb-4 text-sm text-gray-500">Slate/Steel Palette</p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-light" />
                  <p className="text-xs text-gray-600">light</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-light-hover" />
                  <p className="text-xs text-gray-600">light-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-light-active" />
                  <p className="text-xs text-gray-600">light-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-normal" />
                  <p className="text-xs text-gray-600">normal</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-normal-hover" />
                  <p className="text-xs text-gray-600">normal-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-normal-active" />
                  <p className="text-xs text-gray-600">normal-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-dark" />
                  <p className="text-xs text-gray-600">dark</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-dark-hover" />
                  <p className="text-xs text-gray-600">dark-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-dark-active" />
                  <p className="text-xs text-gray-600">dark-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-payneys-grey-darker" />
                  <p className="text-xs text-gray-600">darker</p>
                </div>
              </div>
            </div>

            {/* Pearl */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                Pearl
              </h3>
              <p className="mb-4 text-sm text-gray-500">Beige/Warm Palette</p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-light" />
                  <p className="text-xs text-gray-600">light</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-light-hover" />
                  <p className="text-xs text-gray-600">light-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-light-active" />
                  <p className="text-xs text-gray-600">light-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-normal" />
                  <p className="text-xs text-gray-600">normal</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-normal-hover" />
                  <p className="text-xs text-gray-600">normal-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-normal-active" />
                  <p className="text-xs text-gray-600">normal-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-dark" />
                  <p className="text-xs text-gray-600">dark</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-dark-hover" />
                  <p className="text-xs text-gray-600">dark-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-dark-active" />
                  <p className="text-xs text-gray-600">dark-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-pearl-darker" />
                  <p className="text-xs text-gray-600">darker</p>
                </div>
              </div>
            </div>

            {/* Caput Mortuum */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                Caput Mortuum
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Deep Red/Earth Palette
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-light" />
                  <p className="text-xs text-gray-600">light</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-light-hover" />
                  <p className="text-xs text-gray-600">light-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-light-active" />
                  <p className="text-xs text-gray-600">light-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-normal" />
                  <p className="text-xs text-gray-600">normal</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-normal-hover" />
                  <p className="text-xs text-gray-600">normal-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-normal-active" />
                  <p className="text-xs text-gray-600">normal-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-dark" />
                  <p className="text-xs text-gray-600">dark</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-dark-hover" />
                  <p className="text-xs text-gray-600">dark-hover</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-dark-active" />
                  <p className="text-xs text-gray-600">dark-active</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 rounded-lg border border-gray-300 bg-caput-mortuum-darker" />
                  <p className="text-xs text-gray-600">darker</p>
                </div>
              </div>
            </div>

            {/* Miscellaneous */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                Miscellaneous
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Semantic Colors & Utilities
              </p>

              {/* Main Theme */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-600">
                  Main Theme
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-main-theme" />
                    <p className="text-xs text-gray-600">main-theme</p>
                  </div>
                </div>
              </div>

              {/* Font Colors */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-600">
                  Font Colors
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-font-light" />
                    <p className="text-xs text-gray-600">font-light</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-font-medium" />
                    <p className="text-xs text-gray-600">font-medium</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-font-dark" />
                    <p className="text-xs text-gray-600">font-dark</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-font-dark-green" />
                    <p className="text-xs text-gray-600">font-dark-green</p>
                  </div>
                </div>
              </div>

              {/* Background Colors */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-600">
                  Background Colors
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-background-light" />
                    <p className="text-xs text-gray-600">background-light</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-background-olivine-light" />
                    <p className="text-xs text-gray-600">
                      background-olivine-light
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-background-olivine-light-ghost" />
                    <p className="text-xs text-gray-600">
                      background-olivine-light-ghost
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-background-dark" />
                    <p className="text-xs text-gray-600">background-dark</p>
                  </div>
                </div>
              </div>

              {/* Stroke Colors */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-600">
                  Stroke Colors
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-stroke-light" />
                    <p className="text-xs text-gray-600">stroke-light</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-stroke-medium-light" />
                    <p className="text-xs text-gray-600">stroke-medium-light</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-stroke-medium" />
                    <p className="text-xs text-gray-600">stroke-medium</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-stroke-dark" />
                    <p className="text-xs text-gray-600">stroke-dark</p>
                  </div>
                </div>
              </div>

              {/* Interactions */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-600">
                  Interactions<span className="font-medium"> / Primary</span>
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-primary-normal" />
                    <p className="text-xs text-gray-600">primary-normal</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-primary-hover" />
                    <p className="text-xs text-gray-600">primary-hover</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-primary-active" />
                    <p className="text-xs text-gray-600">primary-active</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-primary-disabled" />
                    <p className="text-xs text-gray-600">primary-disabled</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-600">
                  Interactions<span className="font-medium"> / Secondary</span>
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-secondary-normal" />
                    <p className="text-xs text-gray-600">secondary-normal</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-secondary-hover" />
                    <p className="text-xs text-gray-600">secondary-hover</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-secondary-active" />
                    <p className="text-xs text-gray-600">secondary-active</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-secondary-disabled" />
                    <p className="text-xs text-gray-600">secondary-disabled</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold text-gray-600">
                  Interactions<span className="font-medium"> / Tertiary</span>
                </h4>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-tertiary-normal" />
                    <p className="text-xs text-gray-600">tertiary-normal</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-tertiary-hover" />
                    <p className="text-xs text-gray-600">tertiary-hover</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-tertiary-active" />
                    <p className="text-xs text-gray-600">tertiary-ctive</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 rounded-lg border border-gray-300 bg-tertiary-disabled" />
                    <p className="text-xs text-gray-600">tertiary-disabled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
