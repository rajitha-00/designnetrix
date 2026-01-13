import { Button } from '@/components/Button';

// Example icons - replace these with your preferred icon library
const ArrowRightIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const DownloadIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const StarIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
);

const TrashIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
);

export default function ButtonExamples() {
  return (
    <div className="p-8 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-optft)' }}>
            DesignNetrix Button Component
          </h1>
          <p className="text-white/70 text-lg">
            Modern, futuristic buttons with multiple variants and advanced animations
          </p>
        </div>

        {/* Primary Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Primary Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="primary" icon={<ArrowRightIcon />}>
              With Icon
            </Button>
            <Button variant="primary" icon={<ArrowRightIcon />} iconPosition="right">
              Icon Right
            </Button>
            <Button variant="primary" loading>
              Loading State
            </Button>
          </div>
        </section>

        {/* Secondary Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Secondary Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="secondary" icon={<StarIcon />}>
              With Icon
            </Button>
            <Button variant="secondary" disabled>
              Disabled
            </Button>
          </div>
        </section>

        {/* Neon & Special Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Neon & Special Effects</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="neon">Neon Glow</Button>
            <Button variant="neon" icon={<StarIcon />}>
              Neon with Icon
            </Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="ghost" icon={<DownloadIcon />}>
              Ghost with Icon
            </Button>
          </div>
        </section>

        {/* Sizes */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Button Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" variant="primary">Small</Button>
            <Button size="default" variant="primary">Default</Button>
            <Button size="lg" variant="primary">Large</Button>
            <Button size="xl" variant="primary">Extra Large</Button>
            <Button size="icon" variant="primary">
              <StarIcon />
            </Button>
          </div>
        </section>

        {/* Links & Navigation */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Links & Navigation</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="/" icon={<ArrowRightIcon />}>
              Internal Link
            </Button>
            <Button variant="secondary" href="https://example.com" external icon={<ArrowRightIcon />}>
              External Link
            </Button>
            <Button variant="link">Text Link</Button>
          </div>
        </section>

        {/* Destructive Actions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Destructive Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="destructive">Delete</Button>
            <Button variant="destructive" icon={<TrashIcon />}>
              Delete with Icon
            </Button>
            <Button variant="destructive" loading loadingText="Deleting...">
              Deleting
            </Button>
          </div>
        </section>

        {/* Full Width */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Full Width Buttons</h2>
          <div className="space-y-4">
            <Button variant="primary" fullWidth icon={<ArrowRightIcon />}>
              Full Width Primary
            </Button>
            <Button variant="neon" fullWidth icon={<StarIcon />}>
              Full Width Neon
            </Button>
          </div>
        </section>

        {/* Custom Styling */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Custom Styling</h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              icon={<StarIcon />}
            >
              Custom Gradient
            </Button>
            <Button 
              variant="ghost" 
              className="border-green-500 text-green-400 hover:bg-green-500/10 hover:text-green-300"
            >
              Custom Colors
            </Button>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Code Examples</h2>
          <div className="bg-gray-900 p-6 rounded-lg border border-white/10">
            <pre className="text-green-400 text-sm overflow-x-auto">
{`// Basic usage
<Button variant="primary">Click me</Button>

// With icon
<Button variant="neon" icon={<StarIcon />}>
  Neon Button
</Button>

// As a link
<Button variant="secondary" href="/about" icon={<ArrowRightIcon />}>
  Learn More
</Button>

// Loading state
<Button variant="primary" loading loadingText="Saving...">
  Save Changes
</Button>

// Full width
<Button variant="primary" fullWidth>
  Get Started
</Button>

// Custom styling
<Button 
  variant="ghost" 
  className="border-purple-500 text-purple-400"
>
  Custom Style
</Button>`}
            </pre>
          </div>
        </section>

      </div>
    </div>
  );
}