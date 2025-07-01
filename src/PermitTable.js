import React, { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./App.css";

function Stone() {
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
    dispatchSlipNo: "DISP809039",
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

  return (
    <div
      style={{
        padding: "1rem",
        fontFamily: "Arial",
        marginTop: "0.3in",
        width: "885px",
        boxSizing: "border-box",
      }}
    >
      <div ref={contentRef}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "55px",
            marginBottom: "15px",
            marginRight: "-35px",
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
                marginRight: "-80px",
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
              width: "890px",
              tableLayout: "fixed",
              borderCollapse: "collapse",
            }}
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
                  <input defaultValue="Gravel" />
                </td>

                <td>
                  Bulk Permit No :
                  <input defaultValue="PDK250001064" />
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
                <td>Lessee / Authorized Person Name :</td>
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

export default Stone;
