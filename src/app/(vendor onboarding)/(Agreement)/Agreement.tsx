"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import jwt from "jsonwebtoken";
import { getvendor } from "@/services/auth";
import { useToast } from "@/components/hooks/use-toast";
import Loadingeanimation from "@/components/Loader";
type PageProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Agreement = ({ setCurrentPage }: PageProps) => {
  const [checked, setIschecked] = useState(false);
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [signature, setsignature] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    typeofservice: "",
    gstinNumber: "",
    address: "",
  });
  /*
  
  */

  const fetchVendor = async (userId: string, email: string, mobile: string) => {
    const res = await getvendor(userId, email, mobile);
    return res;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const { id, email, name, mobile } = jwt.decode(token) as {
            id: string;
            email: string;
            name: string;
            mobile: string;
          };

          if (id && (email || mobile)) {
            const user = await fetchVendor(id, email, mobile);
            // console.log(user);
            setFormData((prevFormData) => ({
              ...prevFormData,
              email: user?.email,
              phoneNumber: user?.mobile,
              fullName: user?.name,
              typeofservice: user?.category,
              gstinNumber: user?.businessDetails.gstin,
              address: user?.businessDetails.businessAddress,
            }));
            console.log(user);
          } else {
            toast({
              variant: "destructive",
              title: "Error Something went wrong.",
              description:
                "There was a problem with your request. Pls Login Again",
            });
            console.error("Token does not contain expected data.");
          }
        } catch (error) {
          toast({
            variant: "destructive",
            title: error ? "Error" : "Something went wrong.",
            description:
              String(error) ||
              "There was a problem with your request. Check internet",
          });
          console.error("Failed to decode token:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.log("No token found in localStorage.");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex w-screen justify-center bg-[#F7F6F9] lg:h-[calc(100vh-6.2rem)]">
        <div className="w-[68.75rem] rounded-2xl bg-[#ffffff] pl-4 pr-8 pt-8">
          <div>
            <h2 className="mb-2 mt-2 font-poppins text-2xl font-bold text-[rgba(46,49,146,1)]">
              Vendor Agreement
            </h2>
            <h4 className="text-[rgba(19, 47, 65, 1)] mb-4 font-poppins font-bold">
              Your Agreement
            </h4>
          </div>
          <div className="w-[66.06rem] lg:h-[calc(100vh-22.2rem)]">
            <div className="scrollbar-rounded-xl absolute w-[66.06rem] overflow-y-scroll pl-12 pr-6 text-left text-gray-500 lg:h-[calc(100vh-22.2rem)]">
              <h1
                style={{
                  textAlign: "left",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Vendor Agreement
              </h1>

              <p>
                This Vendor Agreement (&quot;<strong>Agreement</strong>&quot;)
                is entered into as of{" "}
                <strong>{new Date().toLocaleDateString()}</strong> between:
              </p>

              <p>
                <strong>Eventory</strong> (&quot;<strong>Platform</strong>&quot;
                or &quot;
                <strong>Company</strong>&quot;), having its principal place of
                business at:
                <br />
                <strong>
                  13-D, Atmaram House, 1-Tolstoy Marg, Connaught Place, New
                  Delhi -11001
                </strong>
                <br />
                And <br />
                <strong>{formData?.fullName || "Vendor Name"}</strong> having
                its principal place of business at: <br />
                <strong>{formData?.address || "Vendor Address"}</strong>.
              </p>

              <p>
                Collectively referred to as the &quot;<strong>Parties</strong>
                &quot; and individually as a &quot;<strong>Party</strong>.&quot;
              </p>

              <strong>1. Definitions</strong>
              <ul>
                <li>
                  <strong>1.1 Platform:</strong> Eventory&apos;s online and
                  offline event booking platform where services are offered to
                  users.
                </li>
                <li>
                  <strong>1.2 Vendor:</strong> The entity providing goods or
                  services for events listed on the Platform.
                </li>
                <li>
                  <strong>1.3 Users/Clients:</strong> Individuals or businesses
                  that hire the Vendor via the Platform.
                </li>
                <li>
                  <strong>1.4 Services:</strong> The services provided by the
                  Vendor listed on the Platform (e.g., catering, photography,
                  event planning, etc.).
                </li>
                <li>
                  <strong>1.5 Booking Amount:</strong> The base price of the
                  goods or services offered by the Vendor.
                </li>
              </ul>

              <strong>2. Scope of Services</strong>
              <ul>
                <li>
                  <strong>2.1 Description of Services:</strong> The Vendor
                  agrees to provide the following services:{" "}
                  <strong>{formData?.typeofservice || "Service Type"}</strong>.
                </li>
                <li>
                  <strong>2.2 Service Standards:</strong> The Vendor agrees to
                  deliver services in a professional manner, adhering to
                  industry standards, and will comply with all legal and
                  regulatory requirements.
                </li>
              </ul>

              <strong>3. Term and Termination</strong>
              <ul>
                <li>
                  <strong>3.1 Agreement Term:</strong> This Agreement is
                  effective as of{" "}
                  <strong>{new Date().toLocaleDateString()}</strong> and shall
                  remain in effect until terminated by either Party as provided
                  in this section.
                </li>
                <li>
                  <strong>3.2 Termination by Vendor:</strong> The Vendor may
                  terminate this Agreement by providing{" "}
                  <strong>
                    {new Date(
                      new Date().setDate(new Date().getDate() + 7),
                    ).toLocaleDateString()}
                  </strong>{" "}
                  written notice to the Platform.
                </li>
                <li>
                  <strong>3.3 Termination by Platform:</strong> The Platform may
                  terminate this Agreement immediately if the Vendor breaches
                  any terms of this Agreement or fails to provide services up to
                  required standards.
                </li>
                <li>
                  <strong>3.4 Effect of Termination:</strong> Upon termination,
                  all pending transactions or bookings will be completed unless
                  mutually agreed otherwise. The Vendor shall be responsible for
                  all commitments made prior to the date of termination.
                </li>
              </ul>

              <strong>4. Payment and Commission</strong>
              <ul>
                <li>
                  <strong>4.1 Commission Structure:</strong> The Platform will
                  retain commission based on the total transaction amount as
                  follows:
                  <ul>
                    <li>0k - 5k: 20%</li>
                    <li>5k - 15k: 18%</li>
                    <li>15k - 30k: 15%</li>
                    <li>30k - 50k: 12%</li>
                    <li>50k - 1L: 10%</li>
                    <li>1L - 3L: 8%</li>
                    <li>3L - 5L: 5%</li>
                    <li>5L - 10L: 3%</li>
                    <li>10L+: 2%</li>
                  </ul>
                </li>
                <li>
                  <strong>4.2 Payment Schedule:</strong> Payments to the Vendor
                  will be made within 7 days after the successful completion of
                  services, minus the applicable commission.
                </li>
              </ul>

              <strong>5. Vendor Obligations</strong>
              <ul>
                <li>
                  <strong>5.1 Compliance with Laws:</strong> The Vendor agrees
                  to comply with all applicable local, state, and national laws
                  and regulations.
                </li>
                <li>
                  <strong>5.2 Licenses and Permits:</strong> The Vendor is
                  solely responsible for obtaining and maintaining any licenses,
                  permits, and certifications required to perform the
                  agreed-upon services.
                </li>
                <li>
                  <strong>5.3 Insurance:</strong> The Vendor shall maintain
                  sufficient liability insurance to cover risks associated with
                  the provision of services under this Agreement. Proof of
                  insurance must be provided upon request.
                </li>
                <li>
                  <strong>5.4 Service Delivery:</strong> The Vendor guarantees
                  timely delivery of services as per agreed-upon schedules, and
                  any failure to deliver shall be considered a breach of this
                  Agreement.
                </li>
              </ul>

              <strong>
                6. Cancellation, Refund, and Booking Guarantee Policy
              </strong>
              <ul>
                <li>
                  <strong>6.1 Vendor Cancellation:</strong> If a Vendor cancels
                  a booking at the last moment, the Platform will provide
                  customers with alternative recommendations. Any price
                  differences due to dynamic pricing will be covered by the
                  Vendor.
                </li>
                <li>
                  <strong>6.2 Customer Cancellation:</strong> If a customer
                  cancels a booking, they will be charged a percentage of the
                  BOOKING AMOUNT, and the remaining amount will be refunded
                  depending on how many days in advance the cancellation is
                  made.
                </li>
              </ul>

              <strong>7. Vendor’s Representation and Warranties</strong>
              <ul>
                <li>
                  <strong>7.1 Performance:</strong> The Vendor warrants that it
                  has the necessary skills, experience, and resources to perform
                  the services professionally and efficiently.
                </li>
                <li>
                  <strong>7.2 Non-Infringement:</strong> The Vendor warrants
                  that all services provided do not infringe on any third-party
                  intellectual property rights.
                </li>
                <li>
                  <strong>7.3 Compliance:</strong> The Vendor represents that it
                  complies with all laws and regulations related to the
                  performance of its services.
                </li>
              </ul>

              <strong>8. Vendor Visibility, Booking Numbers, and ROI</strong>
              <ul>
                <li>
                  <strong>8.1 Visibility and Marketing:</strong> The Vendor’s
                  visibility on the Platform depends on factors such as quality
                  of service, pricing competitiveness, and profile updates.
                </li>
                <li>
                  <strong>8.2 No Guarantee of Bookings:</strong> The Platform
                  does not guarantee a fixed number of bookings or orders to any
                  Vendor. Success depends on several factors such as customer
                  preferences and service quality.
                </li>
              </ul>

              <strong>9. Dispute Resolution</strong>
              <ul>
                <li>
                  <strong>9.1 Disputes with Users:</strong> The Platform will
                  act as an intermediary in any disputes between the Vendor and
                  the user.
                </li>
                <li>
                  <strong>9.2 Arbitration:</strong> Any disputes between the
                  Vendor and Platform shall be settled by arbitration in
                  accordance with the rules of [Arbitration Body].
                </li>
              </ul>

              <strong>10. Governing Law</strong>
              <p>
                This Agreement shall be governed by and construed in accordance
                with the laws of India.
              </p>

              <strong>11. Miscellaneous</strong>
              <ul>
                <li>
                  <strong>11.1 Amendments:</strong> This Agreement may only be
                  amended in writing signed by both Parties.
                </li>
                <li>
                  <strong>11.2 Entire Agreement:</strong> This Agreement
                  constitutes the entire agreement between the Parties regarding
                  its subject matter and supersedes any prior agreements.
                </li>
                <li>
                  <strong>11.3 Entire Agreement:</strong> This Agreement
                  constitutes the entire agreement between the Parties and
                  supersedes all prior agreements and understandings.
                </li>
              </ul>
              <strong style={{ marginTop: "30px" }}>
                <strong>IN WITNESS WHEREOF</strong>
              </strong>
              <p>
                <strong>
                  The Parties have executed this Agreement as of the date
                  written below:
                </strong>
              </p>
              <br />
              <div>
                <p>
                  <strong>For Eventory:</strong>
                </p>
                <p>
                  <strong>Signature:</strong> Eventory
                </p>
                <p>
                  <strong>Name:</strong> Eventory Tech
                </p>
                <p>
                  <strong>Date:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>
              <div style={{ marginTop: "20px" }}>
                <p>
                  <strong>For Vendor:</strong>
                </p>
                <p>
                  <strong>Signature:</strong>{" "}
                  <input
                    onChange={(e) => setsignature(e.target.value)}
                    className={`border-b-2 ${
                      signature === formData?.fullName
                        ? "border-b-blue-600"
                        : "border-b-red-600"
                    }`}
                    type="text"
                    value={signature}
                    placeholder="Enter your signature"
                  />
                </p>
                <p>
                  <strong>Name:</strong> {formData?.fullName || "Vendor Name"}
                </p>
                <p>
                  <strong>Date:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start px-12 py-4 text-left">
            <div>
              <input
                id={"checker"}
                type="checkbox"
                onChange={() => setIschecked((prevCheck) => !prevCheck)}
                checked={checked}
                className="peer hidden"
              />
              <label
                htmlFor="checker"
                className="relative mr-3 flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded border bg-[#2E3192] p-1 before:absolute before:block before:h-full before:w-full before:bg-white peer-checked:before:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full fill-white"
                  viewBox="0 0 520 520"
                >
                  <path d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z" />
                </svg>
              </label>
            </div>
            <h2>
              i agree with{" "}
              <Link
                className="font-poppins text-[rgba(46,49,146,1)] underline"
                href="/privacy-policy"
              >
                Terms & Conditions
              </Link>
              <span className="text-red-600">*</span>
            </h2>
          </div>
          <div className="relative bottom-0 flex w-[66.06rem] items-end justify-end gap-3 p-4">
            <button
              onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
              className="flex h-[48px] w-[164px] items-center justify-center rounded-2xl border-1 border-[rgba(46,49,146,1)] p-4 font-poppins text-[rgba(46,49,146,1)]"
            >
              <h2>Cancel</h2>
            </button>
            <button
              onClick={() => {
                checked && signature === formData.fullName
                  ? setCurrentPage((prevPage) => prevPage + 1)
                  : toast({
                      variant: "destructive",
                      title: "Pls Complete Following Staff",
                      description:
                        "Pls Check the Checkmark And Write Your Signature At The Bottem Of Agreement",
                    });
              }}
              className="flex h-[48px] w-[164px] items-center justify-center rounded-2xl bg-[rgba(46,49,146,1)] p-4 font-poppins text-white"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      {loading && <Loadingeanimation width="w-64" />}
    </>
  );
};

export default Agreement;
