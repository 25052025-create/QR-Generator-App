import React, { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function PDFFormat() {
  const [form, setForm] = useState({
    lesseeId: "PDK241903",
    mineCode: "PDKN0079",
    lesseeName: "Ananth",
    address:
      "No. 4/161, Keela Street, Lemabalkudi Po, Thirumayam Taluk, Pudukkottai",
    district: "Pudukkottai",
    taluk: "Thirumayam",
    village: "Lempalakudi",
    sfNo: "539/23A, / 000.94.50",
    bulkPermitNo: "PDK250001064",
    classification: "Patta Land",
    leasePeriod: "25-11-2024 to 24-11-2029",
    withinTamilNadu: "Yes",
    dispatchSlipNo: "DISPB09039",
    deliveredTo: "PLR",
    vehicleNo: "TN19 AZ9730",
    vehicleType: "Taurus 19",
    destination: "UCCHIPULI",
    totalDistance: "340",
    travellingDate: "04-06-2025 08:00 AM",
    requiredTime: "8 hrs (04-06-2025 04:00 PM)",
    quantity: "19",
    driverLicenseNo: "TN55Y2021001718",
    driverName: "VINOTHKUMAR S",
    driverPhone: "8637677422",
    via: "KARAIKUDI",
    authorizedPerson: "Ananth",
    serialNo: "TN00967832",
    dispatchDateTime: "04-06-2025 07:04:59",
    hsnCode: "0002271",
    mineralName: "Gravel",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  const qrValue = `https://${form.dispatchSlipNo}`;
  const contentRef = useRef();

  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    doc.setFontSize(11);
    doc.text(`Serial No: ${form.serialNo}`, 150, 10);

    // QR Code
    const qrElement = document.querySelector("svg");
    const xml = new XMLSerializer().serializeToString(qrElement);
    const svg64 = btoa(unescape(encodeURIComponent(xml)));
    const image64 = `data:image/svg+xml;base64,${svg64}`;

    const canvas = document.createElement("canvas");
    const image = new Image();
    image.onload = function () {
      const size = 100;
      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, size, size);

      const pngDataUrl = canvas.toDataURL("image/png");

      doc.addImage(pngDataUrl, "PNG", 160, 12, 30, 30);

      // HSN & Date
      doc.setFontSize(10);
      doc.text(`HSN Code: ${form.hsnCode}`, 10, 25);
      doc.text(`Date & Time of Dispatch: ${form.dispatchDateTime}`, 120, 25);

      // Table
      autoTable(doc, {
        startY: 32,
        theme: "grid",
        styles: { fontSize: 9, cellPadding: 2 },
        head: [["Field", "Value", "Field", "Value"]],
        body: [
          ["Lessee Id", form.lesseeId, "Mine Code", form.mineCode],
          ["Lessee Name", form.lesseeName, "District", form.district],
          ["Address", form.address, "Taluk", form.taluk],
          ["Village", form.village, "SF.No / Extent", form.sfNo],
          ["Mineral", form.mineralName, "Bulk Permit No", form.bulkPermitNo],
          [
            "Classification",
            form.classification,
            "Lease Period",
            form.leasePeriod,
          ],
          [
            "Dispatch Slip No",
            form.dispatchSlipNo,
            "Within TN",
            form.withinTamilNadu,
          ],
          ["Delivered To", form.deliveredTo, "Vehicle No", form.vehicleNo],
          [
            "Vehicle Type",
            form.vehicleType,
            "Distance (km)",
            form.totalDistance,
          ],
          [
            "Travelling Date",
            form.travellingDate,
            "Required Time",
            form.requiredTime,
          ],
          ["Quantity (MT)", form.quantity, "Driver Name", form.driverName],
          ["License No", form.driverLicenseNo, "Via", form.via],
          [
            "Driver Phone",
            form.driverPhone,
            "Authorized Person",
            form.authorizedPerson,
          ],
          ["Driver Signature", "", "Signature of AD/DD", ""],
        ],
      });

      doc.save("transport_permit.pdf");
    };
    image.src = image64;
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <button
        onClick={generatePDF}
        style={{ marginBottom: "1rem", padding: "0.5rem 1rem" }}
      >
        Generate PDF
      </button>

      <div ref={contentRef}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "1000px",
            alignItems: "center",
            gap: "70px",
          }}
        >
          <p style={{ margin: 0 }}>{form.serialNo}</p>
          <QRCodeSVG value={qrValue} size={100} />
        </div>
        <div
          style={{
            width: "1000px",
            fontSize: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              HSN Code:
              <input
                defaultValue="0002271"
                style={{
                  width: "auto",
                  minWidth: "100px",
                  border: "none",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ textAlign: "right" }}>
              Date & Time of Dispatch:
              <input
                defaultValue="04-06-2025 07:04:59"
                style={{
                  width: "auto",
                  minWidth: "150px",
                  border: "none",
                  outline: "none",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid black",
            width: "1000px",
            fontSize: "12px",
          }}
        >
          <table
            border="1"
            cellPadding="4"
            cellSpacing="0"
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <tbody>
              <tr>
                <td>
                  Lessee Id : <input defaultValue="PDK241903" />
                </td>
                <td>
                  Minecode : <input defaultValue="PDKN0079" />
                </td>
                <td>Lease Area Details</td>
                <td>
                  Serial No:
                  <input
                    value={form.serialNo}
                    onChange={(e) =>
                      setForm({ ...form, serialNo: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Lessee Name and Address :</td>
                <td>
                  <input defaultValue="Ananth" style={{ width: "100%" }} />
                </td>
                <td>District Name:</td>
                <td>
                  <input defaultValue="Pudukkottai" style={{ width: "100%" }} />
                </td>
              </tr>
              <tr>
                <td colSpan="2" rowSpan="3">
                  <input
                    defaultValue="No.4/161, Keela Street, Lemabalkudi Po, Thirumayam Taluk, Pudukkottai"
                    style={{ width: "100%" }}
                  />
                </td>
                <td>Taluk Name :</td>
                <td>
                  <input defaultValue="Thirumayam" style={{ width: "100%" }} />
                </td>
              </tr>
              <tr>
                <td>Village :</td>
                <td>
                  <input defaultValue="Lempalakudi" style={{ width: "100%" }} />
                </td>
              </tr>
              <tr>
                <td>SF.No / Extent :</td>
                <td>
                  <input
                    defaultValue="539/23A, / 000.94.50"
                    style={{ width: "100%" }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Mineral Name :
                  <input defaultValue="Gravel" style={{ width: "100%" }} />
                </td>

                <td>
                  Bulk Permit No :
                  <input
                    defaultValue="PDK250001064"
                    style={{ width: "100%" }}
                  />
                </td>

                <td>Classification :</td>
                <td>
                  <input defaultValue="Patta Land" style={{ width: "100%" }} />
                </td>
              </tr>
              <tr>
                <td colSpan="2">Order Ref :</td>

                <td>Lease Period :</td>
                <td>
                  <input
                    defaultValue="25-11-2024 to 24-11-2029"
                    style={{ width: "100%" }}
                  />
                </td>
              </tr>
              <tr>
                <td>Dispatch Slip No :</td>
                <td>
                  <input
                    value={form.dispatchSlipNo}
                    onChange={(e) =>
                      setForm({ ...form, dispatchSlipNo: e.target.value })
                    }
                    style={{ width: "100%" }}
                  />
                </td>
                <td>Within Tamil Nadu</td>
                <td>
                  <input defaultValue="Yes" style={{ width: "100%" }} />
                </td>
              </tr>
              <tr>
                <td>Delivered To :</td>
                <td colSpan="3">
                  <input defaultValue="PLR" style={{ width: "100%" }} />
                </td>
              </tr>
              <tr>
                <td>Vehicle No:</td>
                <td>
                  <input defaultValue="TN19 AZ9730" style={{ width: "100%" }} />
                </td>
                <td colSpan="2">Destination Address :</td>
              </tr>
              <tr>
                <td>Vehicle Type:</td>
                <td>
                  <input defaultValue="Taurus 19" style={{ width: "100%" }} />
                </td>
                <td colSpan="2" rowSpan="4">
                  <input defaultValue="UCHCHIPULI" style={{ width: "100%" }} />
                </td>
              </tr>
              <tr>
                <td>Total Distance (in kms) :</td>
                <td>
                  <input defaultValue="340" style={{ width: "100%" }} />
                </td>
              </tr>
              <tr>
                <td>Travelling Date :</td>
                <td>
                  <input
                    defaultValue="04-06-2025 08:00:00"
                    style={{ width: "100%" }}
                  />
                </td>
              </tr>
              <tr>
                <td>Required Time :</td>
                <td>
                  <input
                    defaultValue="8hrs (04-06-2025 04:00 pm)"
                    style={{ width: "100%" }}
                  />
                </td>
              </tr>
              <tr>
                <td>Quantity (in MT) :</td>
                <td>
                  <input defaultValue="19" style={{ width: "100%" }} />
                </td>
                <td>Driver Name :</td>
                <td>
                  <input
                    defaultValue="VINOTHKUMAR S"
                    style={{ width: "100%" }}
                  />
                </td>
              </tr>
              <tr>
                <td>Driver License No :</td>
                <td>
                  <input
                    defaultValue="TN55Y2021001718"
                    style={{ width: "100%" }}
                  />
                </td>
                <td>Via :</td>
                <td>
                  <input defaultValue="KARAIKUDI" style={{ width: "100%" }} />
                </td>
              </tr>
              <tr>
                <td>Driver Phone No :</td>
                <td>
                  <input defaultValue="8637677422" style={{ width: "100%" }} />
                </td>
                <td>Lessee / Authorized Person :</td>
                <td>
                  <input defaultValue="Ananth" style={{ width: "100%" }} />
                </td>
              </tr>
              <tr>
                <td>Driver Signature :</td>
                <td></td>
                <td>Signature of AD/DD :</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PDFFormat;
