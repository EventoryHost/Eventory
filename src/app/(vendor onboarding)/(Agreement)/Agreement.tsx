"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import jwt from "jsonwebtoken";
import { getvendor } from "@/services/auth";
import { useToast } from "@/components/hooks/use-toast";
type PageProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Agreement = ({ setCurrentPage }: PageProps) => {
  const [checked, setIschecked] = useState(false);
  const { toast } = useToast();
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
            console.error("Token does not contain expected data.");
          }
        } catch (error) {
          console.error("Failed to decode token:", error);
        }
      } else {
        console.log("No token found in localStorage.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex lg:h-[calc(100vh-10.2rem)]  w-screen justify-center bg-[#F7F6F9]">
      <div className="w-[68.75rem] rounded-2xl bg-[#ffffff] pl-4 pr-8 pt-8">
        <div>
          <h2 className="mb-2 mt-2 font-poppins text-2xl font-bold text-[rgba(46,49,146,1)]">
            Vendor Agreement
          </h2>
          <h4 className="text-[rgba(19, 47, 65, 1)] mb-4 font-poppins font-bold">
            Your Agreement
          </h4>
        </div>
        <div className="lg:h-[calc(100vh-26.2rem)] w-[66.06rem]">
          <div className="scrollbar-rounded-xl lg:h-[calc(100vh-26.2rem)] absolute w-[66.06rem] overflow-y-scroll pl-12 pr-6 text-left text-gray-500">
            <p>
              This Vendor Agreement (&quot;Agreement&quot;) is entered into as
              of {new Date().toLocaleDateString()}
              <br />
              between:
            </p>
            <p>
              Eventory (&quot;Platform&quot; or &quot;Company&quot;), having its
              principal place of business
              <br />
              at: 13-D, Atmaram House, 1-Tolstoy Marg, Connaught Place, New
              Delhi -11001
              <br />
              And
              <br />
              {formData?.fullName || "Vendor Name"} having its principal place
              of business
              <br />
              at: {formData?.address || "Vendor Address"}.
            </p>
            <br />
            <p>
              Collectively referred to as the &quot;Parties&quot; and
              individually as a &quot;Party.&quot;
            </p>

            <h2>1. Definitions</h2>
            <p>
              1.1 Platform: Eventory&apos;s online and offline event booking
              platform where services are offered to users.
            </p>
            <p>
              1.2 Vendor: The entity providing goods or services for events
              listed on the Platform.
            </p>
            <p>
              1.3 Users/Clients: Individuals or businesses that hire the Vendor
              via the Platform.
            </p>
            <p>
              1.4 Services: The services provided by the Vendor listed on the
              Platform (e.g., catering, photography, event planning, etc.).
            </p>
            <p>
              1.5 Booking Amount: The base price of the goods or services
              offered by the Vendor.
            </p>

            <h2>2. Scope of Services</h2>
            <p>
              2.1 Description of Services: The Vendor agrees to provide the
              following services: {formData?.typeofservice || "Service Type"}.
            </p>
            <p>
              2.2 Service Standards: The Vendor agrees to deliver services in a
              professional manner, adhering to industry standards, and will
              comply with all legal and regulatory requirements.
            </p>

            <h2>3. Term and Termination</h2>
            <p>
              3.1 Agreement Term: This Agreement is effective as of{" "}
              {new Date().toLocaleDateString()} and shall remain in effect until
              terminated by either Party as provided in this section.
            </p>
            <p>
              3.2 Termination by Vendor: The Vendor may terminate this Agreement
              by providing{" "}
              {new Date(
                new Date().setDate(new Date().getDate() + 7),
              ).toLocaleDateString()}{" "}
              written notice to the Platform.
            </p>
            <p>
              3.3 Termination by Platform: The Platform may terminate this
              Agreement immediately if the Vendor breaches any terms of this
              Agreement or fails to provide services up to required standards.
            </p>
            <p>
              3.4 Effect of Termination: Upon termination, all pending
              transactions or bookings will be completed unless mutually agreed
              otherwise. The Vendor shall be responsible for all commitments
              made prior to the date of termination.
            </p>

            <h2>4. Payment and Commission</h2>
            <p>
              4.1 Commission Structure: The Platform will retain commission
              based on the total transaction amount as follows:
            </p>
            <p>0k - 5k: 20%</p>
            <p>5k - 15k: 18%</p>
            <p>15k - 30k: 15%</p>
            <p>30k - 50k: 12%</p>
            <p>50k - 1L: 10%</p>
            <p>1L - 3L: 8%</p>
            <p>3L - 5L: 5%</p>
            <p>5L - 10L: 3%</p>
            <p>10L+: 2%</p>
            <p>
              4.2 Payment Schedule: Payments to the Vendor will be made within 7
              days after the successful completion of services, minus the
              applicable commission.
            </p>

            <h2>5. Vendor Obligations</h2>
            <p>
              5.1 Compliance with Laws: The Vendor agrees to comply with all
              applicable local, state, and national laws and regulations.
            </p>
            <p>
              5.2 Licenses and Permits: The Vendor is solely responsible for
              obtaining and maintaining any licenses, permits, and
              certifications required to perform the agreed-upon services.
            </p>
            <p>
              5.3 Insurance: The Vendor shall maintain sufficient liability
              insurance to cover risks associated with the provision of services
              under this Agreement. Proof of insurance must be provided upon
              request.
            </p>
            <p>
              5.4 Service Delivery: The Vendor guarantees timely delivery of
              services as per agreed-upon schedules, and any failure to deliver
              shall be considered a breach of this Agreement.
            </p>

            <h2>6. Cancellation, Refund, and Booking Guarantee Policy</h2>
            <p>
              6.1 Vendor Cancellation: If a Vendor cancels a booking at the last
              moment (as defined below), the Platform will provide customers
              with alternative recommendations. Any price differences due to
              dynamic pricing will be covered by the Vendor.
            </p>
            <p>
              If the Vendor cancels a booking &apos;x&apos; days before the
              actual booking date, they shall be liable to pay &apos;y&apos; %
              of the BOOKING AMOUNT to Eventory as follows:
            </p>
            <p>14+ days: 0%</p>
            <p>10-14 days: 5%</p>
            <p>7-10 days: 10%</p>
            <p>3-7 days: 15%</p>
            <p>1-3 days: 20%</p>
            <p>On the day of the booking: 35%</p>

            <p>
              6.2 Customer Cancellation: If a customer cancels a booking
              &apos;x&apos; days before the actual booking date, they will be
              charged &apos;y&apos; % of the BOOKING AMOUNT, and the remaining
              amount will be refunded as follows:
            </p>
            <p>14+ days: 0%</p>
            <p>10-14 days: 10%</p>
            <p>7-10 days: 30%</p>
            <p>3-7 days: 50%</p>
            <p>1-3 days: 70%</p>
            <p>On the day of the booking: 90%</p>
            <p>
              Note: For both vendors and customers, refund or cancellation
              charges will be dynamically adjusted at the time of booking,
              depending on the type of service.
            </p>
            <p>
              6.3 Guarantee of Booking: The Platform will make efforts to
              provide alternative vendor services in case of last-minute
              cancellations, but does not guarantee the availability of similar
              services at the same price.
            </p>

            <h2>7. Vendor&apos;s Representation and Warranties</h2>
            <p>
              7.1 Performance: The Vendor warrants that it has the necessary
              skills, experience, and resources to perform the services
              professionally and efficiently.
            </p>
            <p>
              7.2 Non-Infringement: The Vendor warrants that all services
              provided do not infringe on any third-party intellectual property
              rights.
            </p>
            <p>
              7.3 Compliance: The Vendor represents that it complies with all
              laws and regulations, including tax obligations, related to the
              performance of its services.
            </p>

            <h2>8. Vendor Visibility, Booking Numbers, and ROI</h2>
            <p>
              8.1 Visibility and Marketing: The Vendor acknowledges that their
              visibility on the Platform depends on factors such as:
            </p>
            <p>Quality of Service (QOS) showcased on the Platform.</p>
            <p>
              Item card/service pricing that is competitive and attractive to
              customers.
            </p>
            <p>
              Frequency of profile updates and the duration of time spent on the
              Platform.
            </p>
            <p>
              Realistic representation of inventory and services, limited to
              what can be practically delivered.
            </p>
            <p>
              8.2 No Guarantee of Bookings: The Platform does not guarantee a
              fixed number of bookings or orders to any Vendor. The
              Vendor&apos;s success depends on the factors outlined in Section
              8.1, and the Platform is an open market where customers can choose
              services based on their preferences.
            </p>

            <h2>9. Dispute Resolution</h2>
            <p>
              9.1 Disputes with Users: The Platform will act as an intermediary
              in any disputes between the Vendor and the user. The Vendor agrees
              to cooperate fully with the Platform in resolving disputes.
            </p>
            <p>
              9.2 Arbitration: Any dispute arising between the Vendor and the
              Platform shall be settled by arbitration in accordance with the
              rules of [Arbitration Body], and the decision shall be final and
              binding.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              This Agreement shall be governed by and construed in accordance
              with the laws of India.
            </p>

            <h2>11. Miscellaneous</h2>
            <p>
              11.1 Amendments: This Agreement may only be amended in writing
              signed by both Parties.
            </p>
            <p>
              11.2 Severability: If any provision of this Agreement is found to
              be unenforceable, the remaining provisions shall remain in full
              force and effect.
            </p>
            <p>
              11.3 Entire Agreement: This Agreement constitutes the entire
              agreement between the Parties and supersedes all prior agreements
              and understandings.
            </p>

            <p>IN WITNESS WHEREOF</p>
            <p>
              The Parties have executed this Agreement as of the date written
              below:
            </p>
            <p>For Eventory:</p>
            <p>Signature: Eventory</p>
            <p>Name: Eventory Tech</p>
            <p>Date: {new Date().toLocaleDateString()}</p>
            <p>For Vendor:</p>
            <p>
              Signature:{" "}
              <input
                onChange={(e) => setsignature(e.target.value)}
                className={`border-b-2 ${signature === formData.fullName ? "border-b-blue-600" : "border-b-red-600"}`}
                type="text"
              />
            </p>
            <p>Name: {formData?.fullName || "Vendor Name"}</p>
            <p>Date: {new Date().toLocaleDateString()}</p>
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
              href="/"
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
              checked && (signature === formData.fullName)
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
  );
};

export default Agreement;
