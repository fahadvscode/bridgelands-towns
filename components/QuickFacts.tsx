import { QUICK_FACTS } from "@/lib/content";

export function QuickFacts() {
  return (
    <div className="overflow-x-auto">
      <table>
        <caption className="mb-3 text-left text-sm text-text-muted">
          Bridgelands townhome quick facts as of August 29, 2026
        </caption>
        <tbody>
          {QUICK_FACTS.map((row) => (
            <tr key={row.field}>
              <th scope="row" className="w-[40%] sm:w-[32%]">
                {row.field}
              </th>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
