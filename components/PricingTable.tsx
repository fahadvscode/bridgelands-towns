import { PRICING_ROWS } from "@/lib/content";

export function PricingTable() {
  return (
    <div className="overflow-x-auto">
      <table>
        <caption className="mb-3 text-left text-sm text-text-muted">
          Bridgelands townhome pricing status as of August 29, 2026. Every field remains to be
          announced.
        </caption>
        <thead>
          <tr>
            <th scope="col">Field</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {PRICING_ROWS.map((row) => (
            <tr key={row.field}>
              <th scope="row">{row.field}</th>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
