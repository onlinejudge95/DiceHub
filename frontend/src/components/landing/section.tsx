import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Check } from '../ui/icons';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-full py-12 sm:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            src="/images/dice-hero.jpg"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            priority={true}
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Unleash the Thrill of Dice Games
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Discover a world of endless possibilities with our dice-focused
                web app. Explore a variety of thrilling games, hone your skills,
                and connect with fellow enthusiasts.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/auth?action=sign-up"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Elevate Your Dice Game Experience
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover a wide range of features that will take your dice gaming
              to new heights. From seamless gameplay to interactive social
              features, we&apos;ve got you covered.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Dice Rolling Mechanics</h3>
                  <p className="text-muted-foreground">
                    Experience the thrill of authentic dice rolling with our
                    advanced algorithms and visual effects.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Multiplayer Modes</h3>
                  <p className="text-muted-foreground">
                    Challenge your friends or join global tournaments and
                    compete against players from around the world.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Customization Options</h3>
                  <p className="text-muted-foreground">
                    Personalize your gaming experience by choosing from a
                    variety of dice designs, themes, and more.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <Image
            src="/images/dice-features.jpg"
            width="550"
            height="310"
            alt="Features"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
};

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Affordable Plans for Every Dice Enthusiast
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that best suits your needs and unlock access to
              our full suite of dice-focused features.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 justify-center">
          <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div>
              <h3 className="text-2xl font-bold">Free</h3>
              <p className="text-muted-foreground">Get started for free</p>
            </div>
            <ul className="grid gap-2 text-muted-foreground">
              <li>
                <Check className="mr-2 inline-block h-4 w-4" />
                Basic dice rolling
              </li>
              <li>
                <Check className="mr-2 inline-block h-4 w-4" />
                Limited game modes
              </li>
              <li>
                <Check className="mr-2 inline-block h-4 w-4" />
                Basic customization
              </li>
            </ul>
            <Link
              href="/auth?action=sign-up"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Sign Up
            </Link>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div>
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-muted-foreground">Unlock advanced features</p>
            </div>
            <ul className="grid gap-2 text-muted-foreground">
              <li>
                <Check className="mr-2 inline-block h-4 w-4" />
                Unlimited dice rolling
              </li>
              <li>
                <Check className="mr-2 inline-block h-4 w-4" />
                Access to all game modes
              </li>
              <li>
                <Check className="mr-2 inline-block h-4 w-4" />
                Advanced customization
              </li>
              <li>
                <Check className="mr-2 inline-block h-4 w-4" />
                Multiplayer features
              </li>
            </ul>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Revolutionizing the Dice Gaming Experience
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Dice Games, we&apos;re passionate about creating an immersive
              and engaging platform for dice enthusiasts worldwide. Our team of
              developers and designers have poured their hearts into crafting a
              web app that seamlessly combines the thrill of dice rolling with
              cutting-edge features and a user-friendly interface.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/images/dice-about.jpg"
            width="550"
            height="310"
            alt="About"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">
                    Authentic Dice Mechanics
                  </h3>
                  <p className="text-muted-foreground">
                    Experience the true randomness and excitement of rolling
                    physical dice, brought to life through our advanced
                    algorithms and visual effects.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Vibrant Community</h3>
                  <p className="text-muted-foreground">
                    Connect with fellow dice enthusiasts, join tournaments, and
                    share your gaming experiences in our thriving online
                    community.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Continuous Innovation</h3>
                  <p className="text-muted-foreground">
                    We&apos;re constantly working to enhance our platform,
                    introducing new game modes, features, and customization
                    options to keep your dice gaming experience fresh and
                    exciting.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Contact
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Join the Dice Games Community
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Sign up today and start exploring the exciting world of dice gaming.
            Connect with fellow enthusiasts, participate in tournaments, and
            unlock a world of thrilling possibilities.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="/auth?action=sign-up"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Sign Up
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
