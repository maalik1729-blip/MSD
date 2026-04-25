import { useParams, Navigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import appointmentsData from "@/data/appointments.json";

const Appointment = () => {
  const { id } = useParams<{ id: string }>();
  const appointment = appointmentsData.find((a) => a.id === id);

  if (!appointment) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <PageLayout>
      <section className="relative pt-10 pb-20 overflow-hidden">
        {/* Background gradients */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 5%, rgba(255,153,51,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(19,136,8,0.04), transparent)",
          }}
        />

        <div className="container max-w-4xl relative z-10">
          <div className="flex justify-center mb-6 mt-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(0,0,128,0.05)",
                border: "1px solid rgba(0,0,128,0.20)",
                color: "#000080",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span>📜</span> Organizational Appointment
            </span>
          </div>

          <PageHeader
            title={appointment.region}
            subtitle={
              appointment.type === "team"
                ? `Official State Team Appointment`
                : `Official Appointment for ${appointment.name}`
            }
          />

          <div 
            className="card-heritage mt-12 overflow-hidden animate-fade-up bg-white/80 backdrop-blur-sm shadow-xl"
            style={{ 
              animationDelay: "0.1s", 
              border: "1px solid rgba(255,153,51,0.3)",
              boxShadow: "0 10px 40px -10px rgba(255,153,51,0.15)"
            }}
          >
            {/* Certificate Header Accent */}
            <div className="h-2 w-full flex">
              <div className="h-full flex-1" style={{ background: "#FF9933" }} />
              <div className="h-full flex-1" style={{ background: "#FFFFFF" }} />
              <div className="h-full flex-1" style={{ background: "#138808" }} />
            </div>

            <div className="p-8 md:p-12">
              {appointment.type === "individual" && (
                <div className="mb-8 text-center border-b border-orange-100 pb-8">
                  <h3 
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#0a5c06" }}
                  >
                    {appointment.name}
                  </h3>
                  <p 
                    className="text-lg font-medium text-orange-700 tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {appointment.role}
                  </p>
                </div>
              )}

              <article 
                className="prose prose-lg max-w-none text-gray-800 leading-relaxed mb-10 text-justify"
                style={{ fontFamily: "'Crimson Pro', serif" }}
              >
                <p className="text-xl font-medium leading-relaxed">
                  {appointment.description}
                </p>
              </article>

              {appointment.type === "team" && appointment.members && (
                <div className="mt-8 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="py-4 px-6 font-bold text-gray-800 uppercase tracking-wider text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Name</th>
                        <th className="py-4 px-6 font-bold text-gray-800 uppercase tracking-wider text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Post</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {appointment.members.map((member: any, idx: number) => (
                        <tr key={idx} className="hover:bg-orange-50/50 transition-colors">
                          <td className="py-4 px-6 font-medium text-gray-900">{member.name}</td>
                          <td className="py-4 px-6 text-gray-600 font-medium">{member.post}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {appointment.type === "individual" && appointment.responsibilities && (
                <div className="mt-8">
                  <h4 
                    className="text-lg font-bold mb-4 uppercase tracking-wider"
                    style={{ color: "#000080", fontFamily: "'Inter', sans-serif" }}
                  >
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-4">
                    {appointment.responsibilities.map((resp: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4 text-gray-800">
                        <span className="flex-shrink-0 text-orange-500 mt-1">✦</span>
                        <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem" }}>{resp}</span>
                      </li>
                    ))}
                  </ul>
                  {appointment.effectiveDate && (
                    <div className="mt-10 p-4 bg-orange-50 rounded-lg inline-block border border-orange-100">
                      <p className="text-sm font-semibold text-orange-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Effective From: <span className="text-gray-900 ml-2">{appointment.effectiveDate}</span>
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Signatures */}
              <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10 text-center">
                <div>
                  <div className="h-16 flex flex-col justify-end mb-2">
                    {/* Placeholder for left signature if needed */}
                  </div>
                </div>
                <div>
                  <div className="h-20 flex flex-col justify-end mb-2">
                    <img src="/msd-logo.png" alt="Seal" className="h-16 mx-auto opacity-20 grayscale" />
                  </div>
                  <h5 className="font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Dr. P. Jothikumar</h5>
                  <p className="text-sm text-gray-500 font-medium">B.com., LL.b., LL.M.</p>
                  <p className="text-xs text-orange-700 font-bold tracking-wide uppercase mt-1">Maha Seva Dal<br/>Raashtreey Prabhaaree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Appointment;
