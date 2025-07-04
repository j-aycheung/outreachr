import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'

import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'

export const metadata = {
  description:
    'Outreachr helps job seekers connect with the right recruiters and hiring managers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          {/* Product Title */}
          <div className="flex justify-center">
            <h1
              className="font-tektur mb-16 text-center text-[clamp(4rem,12vw,8rem)] leading-none font-black text-gray-900"
              style={{ fontFamily: 'Tektur, sans-serif' }}
            >
              Outreachr
            </h1>
          </div>
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Reach the right people.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Connect directly with recruiters and hiring managers at your dream
            companies using smart outreach templates.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Sign in with Google</Button>
            <Button variant="secondary" href="/pricing">
              Learn more
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Find and connect with the right people.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

function MainFeatures() {
  return (
    <Container>
      <Subheading>Features</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Everything you need for successful outreach.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Search"
          title="Find the right contacts"
          description="Quickly find recruiters and hiring managers using our smart search link generator for LinkedIn and Twitter."
          graphic={
            <img
              src="/screenshots/app.png"
              alt="Search feature screenshot"
              className="h-full w-full object-cover"
            />
          }
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />

        <BentoCard
          eyebrow="Templates"
          title="Professional templates"
          description="Choose from our library of proven outreach templates that get responses. Automatically personalized with company and role details."
          graphic={
            <img
              src="/screenshots/app.png"
              alt="Search feature screenshot"
              className="h-full w-full object-cover"
            />
          }
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Gmail"
          title="Send with one click"
          description="Send your outreach emails directly through Gmail with a single click. Track opens and responses right from the app."
          graphic={
            <img
              src="/screenshots/app.png"
              alt="Search feature screenshot"
              className="h-full w-full object-cover"
            />
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Tracking"
          title="Stay organized"
          description="Keep track of all your outreach efforts, follow-ups, and responses in one place."
          graphic={
            <img
              src="/screenshots/app.png"
              alt="Search feature screenshot"
              className="h-full w-full object-cover"
            />
          }
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Results"
          title="Get more responses"
          description="Our users report 3x higher response rates using Outreachr's targeted approach and templates."
          graphic={
            <img
              src="/screenshots/app.png"
              alt="Search feature screenshot"
              className="h-full w-full object-cover"
            />
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Smart Features</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Powerful tools for effective outreach.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Search Links"
            title="Smart search suggestions"
            description="Get instant search links for LinkedIn and Twitter to find the right recruiters and hiring managers at your target companies."
            graphic={<LogoCluster />}
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Gmail Integration"
            title="Send with confidence"
            description="Seamlessly connect with Gmail to send your outreach emails directly from the platform."
            graphic={<LogoTimeline />}
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Templates"
            title="Proven templates"
            description="Access our library of templates that have helped job seekers land interviews at top companies."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Analytics"
            title="Track your success"
            description="Monitor your outreach performance with detailed analytics on email opens, responses, and successful connections."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10"></Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <MainFeatures />
        </div>
      </main>
      <Footer />
    </div>
  )
}
