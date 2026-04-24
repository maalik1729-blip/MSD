import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";

const Legacy = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <PageHeader title="Growth and Legacy" />
          
          <article className="prose-heritage mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p>
              Following India's independence, Maha Seva Dal expanded its activities through the 
              establishment of shakhas (branches) and a broad network of affiliated organizations. 
              These included schools, women's groups, and student organizations, aimed at 
              strengthening social engagement and cultural continuity.
            </p>
            
            <p>
              Through its origins, ideological focus, role during Partition, and post-independence 
              expansion, Maha Seva Dal developed into a significant social and cultural organization 
              in independent India. Over time, it came to be regarded as a major Hindu nationalist 
              force grounded in social organization rather than political participation.
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

export default Legacy;
