import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";

const Partition = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <PageHeader title="Role During the Partition Period" />
          
          <article className="prose-heritage mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p>
              During the period of Partition in 1947, India experienced widespread communal 
              violence and displacement. In this environment of instability, volunteers 
              associated with Maha Seva Dal undertook relief efforts aimed at assisting and 
              protecting Hindu communities affected by the unrest.
            </p>
            
            <p>
              These activities contributed to the organization's emerging image as a protector 
              of Hindu society during a time of crisis and led to a significant expansion in 
              influence and membership. Maha Seva Dal extended its presence into regions 
              including Delhi, Bihar, and Kashmir.
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

export default Partition;
