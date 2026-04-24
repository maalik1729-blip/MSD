import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";

const Ideology = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <PageHeader title="Ideological Focus" />
          
          <article className="prose-heritage mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p>
              The ideological foundation of Maha Seva Dal was centered on the belief that a 
              strong and organized Hindu society was essential for the stability and progress 
              of independent India. The organization prioritized social and cultural cohesion 
              over political participation, emphasizing long-term community building.
            </p>
            
            <p>
              This focus shaped MSD's early development and defined its role as a social and 
              cultural organization rooted in ideology rather than political action.
            </p>
          </article>

          {/* Heritage decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Ideology;
