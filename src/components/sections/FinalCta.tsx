import { SectionTitle } from "../SectionTitle";

export const FinalCta = () => {
    return (
        <section className="relative z-10 px-4 sm:px-6 py-20 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
                    <SectionTitle
                        title="Ready to Transform Your Business?"
                        subtitle="Let's Build Something Amazing"
                        align="center"
                    />
                    <p
                        style={{ fontFamily: "var(--font-sansbld)" }}
                        className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-4xl"
                    >
                        Start with a conversation. The right digital foundation changes everything.
                    </p>
                </div>
            </div>
        </section>
    );
}