"use client";

import { useEffect, useState } from "react";
import { useContextbar } from "./context/SidebarContext";
import Image from "next/image";
import Intro from "./components/Intro";
import DashboardDetails from "./components/DashboardDetails";
import { getvendor } from "@/services/auth";
import { useToast } from "@/components/hooks/use-toast";

import jwt from "jsonwebtoken";
import Loadingeanimation from "@/components/Loader";
import { getVendorByIdAndCategory } from "@/services/vendors/getVendorById";

interface BusinessDetails {
  businessName: string;
  category: string;
  gstin: string;
  teamsize: string;
  annualrevenue: string;
  businessAddress: string;
  cities: string[]; 
  pinCode: number;
  years: string;
}

interface User {
  name: string;
  mobile: string;
  businessDetails: BusinessDetails; 
}

const Page: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { user, setUser} = useContextbar();
    const [email, setemail] = useState<String | null>(null);

  const fetchVendor = async (userId: string, email: string, mobile: string) => {
    const res = await getvendor(userId, email, mobile);
    return res;
  };

  const venueDetails = {
    userId: "1",
    name: "Sorana",
    managerName: "asdfa",
    capacity: "Less than 50 persons",
    operatingHours: {
      address: "asdfasdf",
      venueDescription: "asdfasdf",
    },
    venueTypes: ["Marriage Hall", "Farm House", "Lawns"],
    audioVisualEquipment: [
      "Projection Screens",
      "Microphones",
      "PTZ Cameras",
      "Dlp Projectors",
    ],
    accessibilityFeatures: [
      "Sensory Rooms",
      "Emergency Procedures",
      "Interpreters",
      "Wheelchair Access",
    ],
    restrictionsPolicies: [
      "Non-flammable Areas",
      "Noise",
      "Bag Checks",
      "Fire Safety",
    ],
    specialFeatures: [],
    facilities: ["Av Equipments", "Charging Stations", "Garden Area"],
    termsConditions: [
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/Caterers/harshitaTest3/documents/terms_and_conditions-Invoice_1880882773.pdf",
    ],
    cancellationPolicy: [
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/Caterers/harshitaTest3/documents/cancellation_policy-Invoice_1799691381.pdf",
    ],
    insurancePolicy: ["https://eventory-bucket.s3.ap-south-1.amazonaws.com/Caterers/harshitaTest3/documents/cancellation_policy-Invoice_1799691381.pdf"],
    photos: ["https://eventory-bucket.s3.ap-south-1.amazonaws.com/Caterers/harshitaTest3/images/photos-aws-(1).png",
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/Caterers/harshitaTest3/images/photos-aws-(1).png",
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/Caterers/harshitaTest3/images/photos-aws-(1).png",
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/Caterers/harshitaTest3/images/photos-aws-(1).png",
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/Caterers/harshitaTest3/images/photos-aws-(1).png",
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/Caterers/harshitaTest3/images/photos-aws-(1).png",
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/Caterers/harshitaTest3/images/photos-aws-(1).png",
    ],
    videos: ["https://eventory-bucket.s3.ap-south-1.amazonaws.com/Caterers/harshitaTest3/videos/videos-event.mp4"],
    __v: 0,
    catererServices: true,
    decorServices: true,
    advanceBookingPeriod: "Less than a week",
    awards: "Awards url",
    clientTestimonials: "client url",
    socialLinks:{
      instagramURL:"insta url",
      websiteURL:"website url"
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZlbjIwMjQxMDE5MTgxMTAxMjc5IiwibmFtZSI6IkhhcnNoaXRhIHBhdGhhayIsIm1vYmlsZSI6Iis5MTg3OTk3MzI5NDAiLCJfaWQiOiI2NzEzZjY0ZDQyYTM5NzhkMWRiNzBkZjciLCJfX3YiOjAsImlhdCI6MTcyOTM2MTQ4NH0.IVuofZ3ziXZdgE8497owzb8gsnwHaKSMueikv5oV7eA";

      if (token) {
        try {
          const { id, email, name, mobile } = jwt.decode(token) as {
            id: string;
            email: string;
            name: string;
            mobile: string;
          };

          if (id && (email || mobile)) {
            const res = await fetchVendor(id, email, mobile);
            setemail(email);
            setUser(res);
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
  }, [setUser]);

  useEffect(() => {
    const fetchVendorData = async () => {
      if (!user) return;
      setLoading(true);

      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZlbjIwMjQxMDE5MTgxMTAxMjc5IiwibmFtZSI6IkhhcnNoaXRhIHBhdGhhayIsIm1vYmlsZSI6Iis5MTg3OTk3MzI5NDAiLCJfaWQiOiI2NzEzZjY0ZDQyYTM5NzhkMWRiNzBkZjciLCJfX3YiOjAsImlhdCI6MTcyOTM2MTQ4NH0.IVuofZ3ziXZdgE8497owzb8gsnwHaKSMueikv5oV7eA";

      if (token) {
        try {
          const { id } = jwt.decode(token) as {
            id: string;
          };

          if (id && user.businessDetails.category) {
            const vendorData = await getVendorByIdAndCategory(
              "caterer",
              "ven343555",
            );
            // Handle vendorData as needed (e.g., set state)
          } else {
            toast({
              variant: "destructive",
              title: "Error: Something went wrong.",
              description:
                "There was a problem with your request. Please log in again.",
            });
            console.error("Token does not contain expected data.");
          }
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Error",
            description:
              String(error) ||
              "Something went wrong. Check your internet connection.",
          });
          console.error("Failed to decode token:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.log("No token found.");
        setLoading(false);
      }
    };

    fetchVendorData();
  }, [user]);

  return (
    <div className="max-h-[89vh] min-h-[89vh] overflow-hidden overflow-y-auto bg-slate-100 p-6 scrollbar-hide">
      <div
        className={`ml-56 flex flex-col gap-6`} 
      >
        {loading && <Loadingeanimation width="w-64" />}

        {user && (
          <>
            <Intro user={user} email={email} />
            <DashboardDetails
              user={user}
              venueDetails={venueDetails}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
