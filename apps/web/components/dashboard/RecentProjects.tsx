import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "SP-001",
    customer: "John Villa",
    location: "Surat",
    size: "6.5 kW",
    status: "Completed",
  },
  {
    id: "SP-002",
    customer: "Green School",
    location: "Ahmedabad",
    size: "25 kW",
    status: "In Progress",
  },
  {
    id: "SP-003",
    customer: "ABC Factory",
    location: "Vadodara",
    size: "150 kW",
    status: "Pending",
  },
];

export default function RecentProjects() {
  return (
    <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Recent Projects
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-slate-500">
            <th className="pb-4">Project</th>
            <th className="pb-4">Location</th>
            <th className="pb-4">System Size</th>
            <th className="pb-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project) => (
            <tr
              key={project.id}
              className="border-b hover:bg-slate-50"
            >
              <td className="py-5">
                <div>
                  <p className="font-semibold">
                    {project.customer}
                  </p>

                  <p className="text-sm text-slate-500">
                    {project.id}
                  </p>
                </div>
              </td>

              <td>{project.location}</td>

              <td>{project.size}</td>

              <td>
                <Badge
                  className={
                    project.status === "Completed"
                      ? "bg-green-500"
                      : project.status === "Pending"
                      ? "bg-red-500"
                      : "bg-amber-500"
                  }
                >
                  {project.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}