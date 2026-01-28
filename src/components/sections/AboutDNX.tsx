import { SectionTitle } from "../SectionTitle";

export const AboutDNX = () => {
    return (
      <section className="relative z-10 px-4 sm:px-6 py-20 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
            <SectionTitle
              title="A Digital Partner,"
              subtitle="Not Just a Service Provider"
              align="center"
            />
            <p
              style={{ fontFamily: "var(--font-sansbld)" }}
              className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-4xl"
            >
              DesignNetrix is a full-service digital agency based in Sri Lanka,
              working with local and international clients. The focus is simple.
              Build digital systems that look good, work fast, and return value.
              <br />
              <br />
              Every project starts from scratch. No templates. No shortcuts.
              From idea to launch, everything is designed, developed, and
              optimized to support real business goals.{" "}
            </p>
          </div>
        </div>
      </section>
    );
}