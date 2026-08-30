import { COMPARISON_ROWS } from "@/lib/content";

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table>
        <caption className="mb-3 text-left text-sm text-text-muted">
          Bridgelands townhomes compared with the same builder trio&apos;s other GTA townhome
          communities. They do not share pricing, floor plans, or availability.
        </caption>
        <thead>
          <tr>
            <th scope="col">Community</th>
            <th scope="col">Location</th>
            <th scope="col">Townhome Status</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON_ROWS.map((row) => (
            <tr key={row.community}>
              <th scope="row" className={row.highlight ? "font-semibold" : undefined}>
                {row.community}
              </th>
              <td>{row.location}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
