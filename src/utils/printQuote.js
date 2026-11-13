/**
 * Utility to generate and trigger a crisp, branded, printable/PDF quote for Superior Sounds.
 * Uses native browser printing for zero NPM bloat, pixel-perfect layout, and universal PDF export.
 */
export function printQuote({
  items = [],
  startDate = '',
  endDate = '',
  rentalDays = 1,
  fulfillment = 'pickup',
  subtotal = 0,
  client = {}
}) {
  if (items.length === 0) return;

  const quoteId = `SS-${new Date().toISOString().slice(2, 10).replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;
  const todayFormatted = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const printWindow = window.open('', '_blank', 'width=880,height=960');
  if (!printWindow) {
    alert('Please allow popups to generate and print your official PDF quote.');
    return;
  }

  const itemsRows = items
    .map((item, idx) => {
      const lineTotal = item.price * item.quantity * rentalDays;
      return `
        <tr style="border-bottom: 1px solid #e2e8f0; ${idx % 2 === 1 ? 'background-color: #f8fafc;' : ''}">
          <td style="padding: 12px 14px; font-weight: 600; color: #0f172a;">
            ${item.name}
            <div style="font-size: 11px; font-weight: normal; color: #64748b;">${item.category} • ${(item.specs || []).slice(0, 1).join('')}</div>
          </td>
          <td style="padding: 12px 14px; text-align: center; color: #334155;">$${item.price} / day</td>
          <td style="padding: 12px 14px; text-align: center; color: #334155; font-weight: 600;">${item.quantity}</td>
          <td style="padding: 12px 14px; text-align: center; color: #334155;">${rentalDays} ${rentalDays === 1 ? 'day' : 'days'}</td>
          <td style="padding: 12px 14px; text-align: right; font-weight: 700; color: #0f172a;">$${lineTotal.toLocaleString()}</td>
        </tr>
      `;
    })
    .join('');

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Superior Sounds Rental Quote ${quoteId}</title>
  <style>
    @page {
      size: letter;
      margin: 18mm 16mm;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      margin: 0;
      padding: 24px;
      line-height: 1.45;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 3px solid #06b6d4;
      padding-bottom: 18px;
      margin-bottom: 24px;
    }
    .brand-title {
      font-size: 26px;
      font-weight: 900;
      letter-spacing: -0.5px;
      color: #0284c7;
      margin: 0;
    }
    .brand-title span {
      color: #0891b2;
    }
    .brand-subtitle {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #64748b;
      font-weight: 600;
      margin-top: 3px;
    }
    .quote-badge {
      text-align: right;
    }
    .quote-badge h1 {
      margin: 0;
      font-size: 22px;
      font-weight: 800;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .quote-meta {
      font-size: 12px;
      color: #64748b;
      margin-top: 4px;
    }
    .meta-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 24px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
    }
    .meta-block h3 {
      margin: 0 0 8px 0;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #0284c7;
      font-weight: 700;
    }
    .meta-block p {
      margin: 3px 0;
      font-size: 13px;
      color: #334155;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
      font-size: 13px;
    }
    th {
      background: #0f172a;
      color: #ffffff;
      text-align: left;
      padding: 10px 14px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .totals-area {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 28px;
    }
    .totals-card {
      width: 320px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 14px 18px;
    }
    .totals-row {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      color: #475569;
      margin-bottom: 6px;
    }
    .totals-row.grand {
      border-top: 2px solid #0f172a;
      padding-top: 8px;
      margin-top: 8px;
      font-size: 18px;
      font-weight: 800;
      color: #0f172a;
    }
    .terms-box {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 14px;
      font-size: 11px;
      color: #64748b;
      background: #ffffff;
      margin-bottom: 20px;
    }
    .terms-box h4 {
      margin: 0 0 6px 0;
      color: #0f172a;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .footer {
      border-top: 1px solid #e2e8f0;
      padding-top: 12px;
      font-size: 11px;
      color: #94a3b8;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .no-print-bar {
      background: #0284c7;
      color: #ffffff;
      padding: 12px 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .print-btn {
      background: #ffffff;
      color: #0284c7;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 13px;
      cursor: pointer;
    }
    @media print {
      .no-print-bar {
        display: none !important;
      }
      body {
        padding: 0;
      }
    }
  </style>
</head>
<body>

  <div class="no-print-bar">
    <div>
      <strong>Superior Sounds Official Quote</strong> — Click Print / Save as PDF below.
    </div>
    <button class="print-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>

  <div class="header">
    <div>
      <h2 class="brand-title">SUPERIOR<span>SOUNDS</span></h2>
      <div class="brand-subtitle">Audio • Lighting • Production</div>
      <p style="margin: 6px 0 0 0; font-size: 12px; color: #475569;">
        91 College Ave • Poughkeepsie, NY 12603<br>
        Direct: (845) 790-5472 • info@superiorsoundsevents.com<br>
        Instagram: @superiorsounds
      </p>
    </div>
    <div class="quote-badge">
      <h1>Rental Estimate</h1>
      <div class="quote-meta">Quote Ref: <strong>${quoteId}</strong></div>
      <div class="quote-meta">Date: ${todayFormatted}</div>
      <div class="quote-meta">Status: <strong>Estimated / Pending Reservation</strong></div>
    </div>
  </div>

  <div class="meta-grid">
    <div class="meta-block">
      <h3>Client & Event Information</h3>
      <p><strong>Client Name:</strong> ${client.name || 'Event Coordinator'}</p>
      <p><strong>Email:</strong> ${client.email || 'N/A'}</p>
      <p><strong>Phone:</strong> ${client.phone || 'N/A'}</p>
      <p><strong>Event Type:</strong> ${client.eventType || 'Event Production'}</p>
      <p><strong>Location:</strong> ${client.venueCity || 'Hudson Valley, NY'}</p>
    </div>

    <div class="meta-block">
      <h3>Rental Window & Fulfillment</h3>
      <p><strong>Rental Start:</strong> ${startDate || 'TBD'}</p>
      <p><strong>Rental Return:</strong> ${endDate || 'TBD'}</p>
      <p><strong>Rental Duration:</strong> ${rentalDays} ${rentalDays === 1 ? 'Day' : 'Days'}</p>
      <p><strong>Fulfillment:</strong> ${
        fulfillment === 'pickup'
          ? 'Warehouse Pickup (91 College Ave, Poughkeepsie, NY)'
          : 'On-Site Delivery & Setup (Hudson Valley)'
      }</p>
      <p><strong>Visiting Hours:</strong> All Days 11:00 AM – 7:00 PM (By Appt)</p>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th style="width: 44%;">Equipment Item & Specifications</th>
        <th style="text-align: center; width: 16%;">Daily Rate</th>
        <th style="text-align: center; width: 10%;">Qty</th>
        <th style="text-align: center; width: 14%;">Duration</th>
        <th style="text-align: right; width: 16%;">Line Total</th>
      </tr>
    </thead>
    <tbody>
      ${itemsRows}
    </tbody>
  </table>

  <div class="totals-area">
    <div class="totals-card">
      <div class="totals-row">
        <span>Equipment Subtotal:</span>
        <span style="font-weight: 700;">$${subtotal.toLocaleString()}</span>
      </div>
      <div class="totals-row">
        <span>Fulfillment:</span>
        <span>${fulfillment === 'pickup' ? '$0.00 (Self Pickup)' : 'Custom Delivery Quote'}</span>
      </div>
      <div class="totals-row">
        <span>NY State Sales Tax (if applicable):</span>
        <span>Calculated on Final Invoice</span>
      </div>
      <div class="totals-row grand">
        <span>Estimated Total:</span>
        <span style="color: #0284c7;">$${subtotal.toLocaleString()}</span>
      </div>
    </div>
  </div>

  <div class="terms-box">
    <h4>Rental Terms & Pickup Instructions</h4>
    <ul style="margin: 0; padding-left: 18px; line-height: 1.5;">
      <li><strong>Availability:</strong> Equipment availability is guaranteed upon payment of reservation deposit and signing of standard rental contract.</li>
      <li><strong>Condition:</strong> All equipment is professionally tested, calibrated, and provided in tour-grade road cases. Renter is responsible for safe operation and return in original condition.</li>
      <li><strong>Pickup Location:</strong> 91 College Ave, Poughkeepsie, NY 12603. Pickups and returns are scheduled between 11:00 AM and 7:00 PM all days by appointment. Call 845.790.5472 upon arrival.</li>
      <li><strong>Payment:</strong> Superior Sounds accepts major credit cards, cash, bank ACH, and certified business checks.</li>
    </ul>
  </div>

  <div class="footer">
    <div>Superior Sounds Events • Hudson Valley Audio & Lighting Rental</div>
    <div>Call or Text: 845.790.5472 • @superiorsounds</div>
  </div>

  <script>
    // Automatically trigger print dialog on window load
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 400);
    };
  </script>
</body>
</html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
