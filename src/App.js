import React, { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./App.css";

function App() {
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

  const qrValue = form.dispatchSlipNo.toUpperCase();
  const contentRef = useRef();

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const generatePDF = () => {
    html2canvas(contentRef.current, {
      scale: 4, // higher scale = sharper image
      useCORS: true, // if loading external assets
      logging: false,
      allowTaint: true,
      backgroundColor: "#fff", // avoids transparent background
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const marginX = 25; // 🔹 left margin (in mm)
      const marginY = 20; // 🔹 top margin (in mm)

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", marginX, marginY, pdfWidth, pdfHeight);
      pdf.save("transport_permit.pdf");
    });
  };

  return (
    <div
      style={{
        padding: "1rem",
        fontFamily: "Arial",
        marginTop: "0.4in",
        width: "900px",
        boxSizing: "border-box",
      }}
    >
      {/* <button
        onClick={generatePDF}
        style={{ marginBottom: "1rem", padding: "0.5rem 1rem" }}
      >
        Generate PDF
      </button> */}

      <div ref={contentRef}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "55px",
            marginBottom: "15px",
            marginRight: "-30px",
          }}
        >
          <p
            style={{
              marginTop: "50px",
              color: "#555533",
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            {form.serialNo}
          </p>
          <QRCodeSVG value={qrValue} size={75} />
        </div>
        <div
          style={{
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

            <div
              style={{
                alignItems: "right",
                marginRight: "-70px",
              }}
            >
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
            fontSize: "12px",
          }}
        >
          <table
            cellPadding="4"
            cellSpacing="0"
            style={{
              width: "900px",
              tableLayout: "fixed",
              boxSizing: "border-box",
            }}
          >
            <tbody>
              <tr>
                <td>
                  Lessee Id :{" "}
                  <input defaultValue="PDK241903" style={{ width: "100%" }} />
                </td>
                <td>
                  Minecode :{" "}
                  <input defaultValue="PDKN0079" style={{ width: "100%" }} />
                </td>
                <td>Lease Area Details</td>
                <td>
                  Serial No:
                  <input
                    value={form.serialNo}
                    onChange={(e) =>
                      setForm({ ...form, serialNo: e.target.value })
                    }
                    style={{
                      color: "grey",
                      fontStyle: "italic",
                      border: "none",
                      outline: "none",
                      fontSize: "12px",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Lessee Name and Address :</td>
                <td>
                  <input defaultValue="Ananth" />
                </td>
                <td>District Name:</td>
                <td>
                  <input defaultValue="Pudukkottai" />
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
                  <input defaultValue="Patta Land" />
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
                  <input defaultValue="PLR" />
                </td>
              </tr>
              <tr>
                <td>Vehicle No:</td>
                <td>
                  <input defaultValue="TN19 AZ9730" />
                </td>
                <td colSpan="2">Destination Address :</td>
              </tr>
              <tr>
                <td>Vehicle Type:</td>
                <td>
                  <input defaultValue="Taurus 19" />
                </td>
                <td colSpan="2" rowSpan="4">
                  <input defaultValue="UCHCHIPULI" style={{ width: "100%" }} />
                </td>
              </tr>
              <tr>
                <td>Total Distance (in kms) :</td>
                <td>
                  <input defaultValue="340" />
                </td>
              </tr>
              <tr>
                <td>Travelling Date :</td>
                <td>
                  <input defaultValue="04-06-2025 08:00:00" />
                </td>
              </tr>
              <tr>
                <td>Required Time :</td>
                <td>
                  <input defaultValue="8hrs (04-06-2025 04:00 pm)" />
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
                  <input defaultValue="TN55Y2021001718" />
                </td>
                <td>Via :</td>
                <td>
                  <input defaultValue="KARAIKUDI" style={{ width: "100%" }} />
                </td>
              </tr>
              <tr>
                <td>Driver Phone No :</td>
                <td>
                  <input defaultValue="8637677422" />
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
                <td style={{ textAlign: "left" }}>
                  <img
                    src="/Signature/Sign_AD.jpg"
                    alt="Signature"
                    style={{
                      width: "80px", // Fixed width
                      height: "20px", // Fixed height
                      display: "block", // Avoid inline spacing
                      opacity: 0.8,
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
