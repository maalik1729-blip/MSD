import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";

const Origins = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <PageHeader title="Origins and Foundation" />
          
          <article className="prose-heritage mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p>
              Maha Seva Dal emerged during a defining moment in India's history, as the country 
              moved toward independence in 1947. In this period of national transition, the 
              organization directed its efforts toward the organization and strengthening of 
              Hindu society, viewing social cohesion as a necessary foundation for an independent 
              nation.
            </p>
            
            <p>
              Rather than engaging in direct anti-British political movements, MSD maintained a 
              non-political stance during the freedom struggle. Its focus remained on cultural 
              organization, social discipline, and community structure, guided by the belief that 
              long-term national stability depended on a strong and unified social framework.
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

export default Origins;
